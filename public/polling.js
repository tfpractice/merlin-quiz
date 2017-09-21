let pollState = false;
const pollID = window.setInterval(pollReady, 1000);

window.addEventListener('load', applyClickHandler);

function pollReady() {
  console.log('pollState', pollState);
  if (pollState) {
    clearInterval(pollID);
    alert('polling.js: readyToBegin');
  }
}

function toggleState() {
  pollState = !pollState;
  console.log('pollState changed to ', pollState);
}
function applyClickHandler() {
  const pollButton = document.getElementById('toggleButton');

  console.log('pollButton', pollButton);

  pollButton.onclick = toggleState;
}
