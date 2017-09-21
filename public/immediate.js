document.addEventListener('DOMContentLoaded', checkStatus);

function checkImmediateButton() {
  console.log('checkImmediateButton');
  return document.getElementById('immediateButton');
}

function checkStatus() {
  console.log('DOMContentLoaded!');
  const iButton = checkImmediateButton();

  iButton && readyToBegin();
  console.log('iButton', iButton);
}

function readyToBegin() {
  alert('immediate.js: readyToBegin!');
}
