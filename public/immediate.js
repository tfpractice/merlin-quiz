// leveraging DOMContentLoaded to run status check after inital content is
// loaded onto page the issue here is that in the current web app environment
// many ajax requests may likely fire after initial content is loaded
document.addEventListener(
  'DOMContentLoaded',
  checkStatus(startGuide_immediate)
);

function checkImmediateButton() {
  // the presence of this element on screen determines the guides ready state
  // if the button exists it will return a node (coerced to true)
  // if not it will return a null (coerced to false)
  return document.getElementById('immediateButton');
}

function startGuide_immediate() {
  alert('immediate.js: readyToBegin!');
}

// this function uses partial application to delay the evaluation
// of the callback until the original async action ( in this
// case DOMContentLoaded) resolves,
function checkStatus(cb) {
  // return a function that can be invoked by DOMContentLoaded
  return function() {
    // if the button exists, fire the callback which
    checkImmediateButton() && cb();
  };
}
