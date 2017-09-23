const totoroURL =
  'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

window.addEventListener('load', applyClickHandler);

// this will be a collection of all native XHRs made from the page
const requests = [];

// this script will monkeyPatch the native XMLHttpRequest prototype method to
// add the object to the requests array
(function patchOpen(openNative) {
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    const currReqObj = this;

    hookReadyState(currReqObj);

    // console.log('this.onreadystatechange', this.onreadystatechange);

    requests.push(currReqObj);

    // call the native send()
    openNative.apply(currReqObj, [ method, url, async, user, password, ]);

    // currReqObj.onreadystatechange = isPageReady(intercept_ready);

    // console.log('currReqObj.onreadystatechange', currReqObj.onreadystatechange);
  };
}(XMLHttpRequest.prototype.open));

// this declares that the page is ready
function intercept_ready() {
  alert('intercept_ready.js: readyToBegin!');
}

// this checks if an individual request object is complete
function requestDone(req) {
  return req.readyState === '4';
}

// this takes every request object and checks if it status
// is done, implying that no requests are being made
function checkReqs() {
  console.log('requests done', requests.every(requestDone));
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

  console.log('xhr', xhr);
  console.log('assigned', assigned);
  if (assigned instanceof Function) {
    xhr.onreadystatechange = function(e) {
      assigned(e);
      isPageReady(intercept_ready)(e);
    };
  } else {
    xhr.onreadystatechange = isPageReady(intercept_ready);
  }
}

function callMovie() {
  let xhr = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

  xhr.open(method, totoroURL);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      addMovieInfo(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

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

  // add the text node to the newly created div.
  currentDiv.appendChild(infoList);
}

function applyClickHandler() {
  document.getElementById('interceptBtn').onclick = callMovie;
}
