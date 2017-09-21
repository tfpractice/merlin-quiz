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

Hey Charles,

Again, thanks for reaching out and I enjoyed our conversation about the opportunities at Merlin Guides. I am very interested in the work you all are doing and in the interest of doing my best work, I have provided four solutions, each with their own script and html tags to mimic the structure of this highly interface dependent problem. If there was a single site or collection of sites that I could potentially use to measure my success, I am sure I could provided a more robust solution.

Beyond the four I've provided there are a few approaches that I could take, to the clear recognition of a "ready state":

Many apps in the React ecosystem make asynchronous requests as a result of user interaction (click a button to "load more", for example) but knowing which elements are attached to which handlers is largely obscured by the transpilation process. 

I could also check every element on the page with event handlers attached but which of these handlers make Ajax requests isn't necessarily made apparent to a client side script. 

Potentially I could imagine there is a way to check if the page is firing any requests at all but this would potentially require introspection into the actual protocol/requests which all browser vendors may not expose to a client script. While javascript does provide the "reayStateChange event", this still hinges upon differentiating requests relevant to the guide from those unrelated ot the guide. As someone who has never built a chrome extension, there may be options there of which I am unaware.

I hope that my solutions demonstrate a clear understanding of asynchrony and process building, as well as a commitment to testability, and establishing clear metrics for success. As for competitors in the marketplace for tech tutorials, I have found these three:

https://www.lynda.com/ (more oriented toward large software suites)
http://stepshot.net/
and 
http://www.screensteps.com/
which both help with producing small step-by-step process guides

 
I hope you find this work satisfactory and I very eagerly look forward to your reply.

Sincerely, 
tfpractice
