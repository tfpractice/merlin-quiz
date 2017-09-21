// this pollstate variable  determines if the guide is ready
let pollState = false;

// every two seconds the browser checks the pollstate, this will be cancelled once guide is begun
const pollID = window.setInterval(pollReady(startGuide_polling), 1000);

// once the ocntent is loaded, the button will be able to change the pollstate
window.addEventListener('load', applyClickHandler);

// logs the pollstate
function logState() {
  console.log('pollState is', pollState);
}

// will begin the guide dependent on the state
function pollReady(cb) {
  return function() {
    if (pollState) {
      clearInterval(pollID);
      cb();
    } else {
      logState();
    }
  };
}

function startGuide_polling() {
  alert('polling.js: readyToBegin!');
}

// actively changes the state
function toggleState() {
  pollState = !pollState;
  console.log('pollState changed to ', pollState);
}

function getPollButton() {
  return document.getElementById('toggleButton');
}
function applyClickHandler() {
  if (getPollButton()) {
    // initially the pollButton will only log the current state,

    getPollButton().onclick = logState;

    // the button will be able to affect the state after three seconds,
    // mimicking the result of an ajax call affecting the DOM
    // this nesting combines asynchron & user interactivity
    window.setTimeout(() => {
      getPollButton().onclick = toggleState;
    }, 3000);
  } else {
    console.log('no pollbutton on this page');
  }
}
