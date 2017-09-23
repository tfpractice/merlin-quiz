// this will be a collection of all native XHRs made from the page
const requests = [];
const totoroURL =
  'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

window.addEventListener('load', applyClickHandler);

// this script will monkeyPatch the native XMLHttpRequest prototype method to
// add the object to the requests array // object to alert us of all requests

(function patchOpen(openNative) {
  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    // this.onreadystatechange = isPageReady(intercept_ready);
    console.log('this', this);

    // console.log('this.onreadystatechange', this.onreadystatechange);
    requests.push(this);

    // call the native send()
    openNative.apply(this, [ method, url, async, user, password, ]);
    this.onreadystatechange = isPageReady(intercept_ready);
    console.log('this', this);
    console.log('this.onreadystatechange', this.onreadystatechange);
  };
}(XMLHttpRequest.prototype.open));

function intercept_ready() {
  alert('intercept_ready.js: readyToBegin!');
}
function requestDone(req) {
  return req.readyState === '4';
}
function checkReqs() {
  return requests.every(requestDone);
}
function isPageReady(cb) {
  checkReqs() && cb();
}
function hookReadyState(xhr) {
  const assigned = xhr.onreadystatechange;

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
      console.log(xhr.responseText);
      addMovieInfo(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
  console.log('requests', requests);
}

function addMovieInfo(info) {
  console.log('info', info);

  // create a new button element & give it some content
  const newPara = document.createElement('p');
  const title = info.title;
  const director = info.director;
  const release_date = info.release_date;
  const infoArray = [ title, director, release_date, ];

  console.log('infoArray', infoArray);
  const infoList = document.createElement('ul');
  const currentDiv = document.getElementById('interceptDiv');

  infoArray.forEach((t) => {
    console.log('t', t);
    const item = document.createElement('li');
    const newContent = document.createTextNode('t');

    item.appendChild(newContent);
    infoList.appendChild(item);
  });

  // add the text node to the newly created div.
  currentDiv.appendChild(infoList);
}

function applyClickHandler() {
  document.getElementById('interceptBtn').onclick = callMovie;
}
