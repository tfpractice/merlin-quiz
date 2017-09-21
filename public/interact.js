window.addEventListener('load', confirmUser);
function confirmUser() {
  console.log('\'LOAD EVENT FIRED\'');
  const uReady = confirm('Would you like to Begin?');

  uReady ? startTutorial() : uDecline();
}

function interactReady() {
  alert('interact.js: ready to begin');
}
function uDecline() {
  alert('user declined to begin tutorial');
}
function startTutorial() {
  // create a new div element
  // and give it some content
  const newButton = document.createElement('button');
  const newContent = document.createTextNode('User confirmed ready!');

  newButton.appendChild(newContent); // add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById('uiDiv');

  currentDiv.appendChild(newButton); // add the text node to the newly created div.

  interactReady();
}

// confirmUser();
