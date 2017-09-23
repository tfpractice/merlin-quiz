window.addEventListener('load', applyClickHandler);

// this will be a collection of all native XHRs made from the page
const requests = [];

// this script will monkeyPatch the native XMLHttpRequest prototype method to
// add the object to the requests array
(function patchOpen(openNative) {
  // reset the prototype method to hook into the instance method of each new request
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    const currReqObj = this;

    hookReadyState(currReqObj);

    // add the request to the requests array
    requests.push(currReqObj);

    openNative.apply(currReqObj, [ method, url, async, user, password, ]);
  };
}(XMLHttpRequest.prototype.open));

// this declares that the page is ready
function intercept_ready() {
  alert('intercept_ready.js: readyToBegin!');
}

// this checks if an individual request object is complete
// used double equals for maximum type coercion
function requestDone(req) {
  return req.readyState == '4';
}

// this takes every request object and checks if it status
// is done, implying that no requests are being made
function checkReqs() {
  return requests.every(requestDone);
}

// this function is run on every request and calls a callback in the case
// that all requests are complete, and no ajax requests are taking place
function isPageReady(cb) {
  checkReqs() && cb();
}

// this hooks into the onreadystatechange property of each request
// and checks if the page is ready after each requst is sent
function hookReadyState(xhr) {
  const assigned = xhr.onreadystatechange;

  if (assigned instanceof Function) {
    xhr.onreadystatechange = function hookState(e) {
      assigned(e);
      isPageReady(intercept_ready)(e);
    };
  } else {
    xhr.onreadystatechange = isPageReady(intercept_ready);
  }
}

// this is a sample XHR to a publc movie api, just to check if every thing works properly, it does
function callMovie() {
  let xhr = new XMLHttpRequest(),
  method = 'GET',
  totoroURL =
      'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

  xhr.open(method, totoroURL);
  xhr.onreadystatechange = function totoReq() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      addMovieInfo(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

// updates the DOM with xhr responseText
function addMovieInfo(info) {
  // create a new button element & give it some content
  const newPara = document.createElement('p');
  const title = info.title;
  const director = info.director;
  const release_date = info.release_date;
  const infoArray = [ title, director, release_date, ];

  const infoList = document.createElement('ul');
  const currentDiv = document.getElementById('interceptDiv');

  infoArray.forEach((t) => {
    const item = document.createElement('li');
    const newContent = document.createTextNode(t);

    item.appendChild(newContent);
    infoList.appendChild(item);
  });

  currentDiv.appendChild(infoList);

  // everytime the dom is updated, the requests array updates
  console.log('requests', requests);
}

function applyClickHandler() {
  document.getElementById('interceptBtn').onclick = callMovie;
}
