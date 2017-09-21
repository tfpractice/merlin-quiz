# Merlin Guides Conde challenge

Timeline:
15-30 minutes.

Problem:
Merlin has to run on all websites, and often has to work out if it should move on to the next part of the guide or not. Part of the way it has to do this is by trying to detect if the page is 'loading' or not. 

Unfortunately as most sites now use 'ajax' we can't use the default event listener for page loading. As such we often have to detect for when elements of the page imply they are loading (for instance a loading notification with text or a loading gif). Try to write some code which is given a callback, and tries to detect for these. 

If the page doesn't appear to be loading, then call the callback, if it does then wait until it has finished (then calls it). We recommend not taking longer than 30 minutes on this challenge, and trying to think about false positives, the goal is a piece of JS we could copy and paste onto any website and works in the majority of cases.

Again this code should be able to work in the majority of cases if we copy and pasted it onto any site as a javascript snippet (as a browser extension, we in essence inject javascript onto pages to work).

Code Language:
Please provide this using Javascript ES5 not ES6 code. You can use anything in default javascript and any chrome extension calls as well.

Sharing Method:
Please share through a public GitHub repo.
