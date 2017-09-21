// leveraging the load event which awaits nested content to be
// loaded, the browser will confirm if the user wants to begin a guide
window.addEventListener('load', confirmUser(startGuide_interact));

function confirmUser(cb) {
  return function() {
    // this confirmation determines ready state
    const uReady = confirm('Would you like to Begin?');

    uReady ? cb() : uDecline();
  };
}

function startGuide_interact() {
  alert('interact.js: readyToBegin!');
}
function uDecline() {
  alert('user declined to begin tutorial');
}
