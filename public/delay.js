// document.body.onload = addElement;
window.setTimeout(addDelayButton, 3000);

function addDelayButton() {
  // create a new div element
  // and give it some content
  const newButton = document.createElement('button');
  const newContent = document.createTextNode('I am delayed!');

  newButton.appendChild(newContent); // add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('delayDiv');

  currentDiv.appendChild(newButton); // add the text node to the newly created div.

  delayReady();
}

function delayReady() {
  alert('delay.js: button added');
}
