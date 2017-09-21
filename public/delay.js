// this will attempt to start the guide every half second
const delayID = window.setInterval(delayCheck(startGuide_delay), 500);

// after two seconds the button will be added to the DOM
window.setTimeout(addDelayBtn, 2000);

// checks for the presents of the delay button
// and invokes a callback if it returns true
function delayCheck(cb) {
  return function() {
    if (getDelayBtn()) {
      cb();
    } else {
      console.log('button not yet loaded');
    }
  };
}

function addDelayBtn() {
  // create a new button element & give it some content
  const newButton = document.createElement('button');

  newButton.setAttribute('id', 'delayButton');
  const newContent = document.createTextNode('I am delayed!');

  // add the text node to the newly created div.
  newButton.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('delayDiv');

  // add the text node to the newly created div.
  currentDiv.appendChild(newButton);
}

function getDelayBtn() {
  // if the button exists it will return a node (coerced to true)
  // if not it will return a null (coerced to false)
  return document.getElementById('delayButton');
}

function startGuide_delay() {
  // alert the user that the guide may begin
  alert('delay.js: readyToBegin!');

  // disable the checker function
  clearInterval(delayID);
}
