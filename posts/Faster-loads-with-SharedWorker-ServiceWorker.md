---
title: Faster loads with SharedWorker & ServiceWorker
date: 2018-06-22 21:21:58
author: Caleb James DeLisle
tags:
  - web worker
  - shared worker
  - performance
---

When CryptPad was first created, the only thing to load was the CryptPad code itself and the pad which you were editing. Recently edited pads were remembered in the browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) which was not portable between computers but allowed some recent history to be kept.

However, we wanted to allow people to login and manage their pads on all of their devices so we created the CryptDrive. Anyone who has used CryptPad but never logged in is encouraged to [register and login](https://cryptpad.fr/register) (it's free) and check out their drive. CryptDrive is basically just a realtime pad containing a JSON structure with links to all of your pads as well as their titles and other information. When you update the title of a pad, it changes the pad itself but it also changes your drive so that you can see the title of the pad in your drive. This is of course not perfect because if someone else changes the title of a pad, your drive will not be updated until you look at the pad again, but doing everything with the server completely blind to the content isn't easy, and this works reasonably well.

However, CryptDrive causes an additional delay when loading CryptPad because whenever you load a document, you are actually loading two realtime instances. Since the drive is loaded over and over for every pad you view, it was obvious to us that we could make it more efficient using communication inside the browser.

## First idea: Messages between tabs

Tabs (or windows) in a browser which are on the same website are able to [communicate using localStorage](http://krasimirtsonev.com/blog/article/Using-Local-Storage-as-a-communication-channel) and so it seemed like a good solution to just have one tab claim the role of managing the drive and then when another tab is opened, it would message the first. However, this seemingly easy solution becomes a nightmare when you consider what happens when that tab is closed. The drive that everyone is relying on goes away and all of the other tabs are without a drive so they need to [flip a coin](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html) to decide which tab should become the keeper of the drive, then that tab needs to download the drive before it can service events, all the while any of the buttons which affect the drive (for instance deleting the pad) cannot possibly function. This idea was soon scrapped...

## Enter ServiceWorker
Recently, the HTML5 working group created a new standard called [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) which for someone making a webapp seems like a dream come true. ServiceWorkers:

* Are side-processes which are created one-per-website and live in the background.
* Can intercept HTTP requests from your main javascript (excellent for caching!).
* Is suspended when the last tab is closed, and re-launched when the user returns.
* Are stored in suspended state even when the browser is turned off.
* Supported by [every modern browser](https://caniuse.com/#search=serviceworker).

When the website loads a worker, if the worker is already running it will not load and will instead defer to the existing worker. Communicating between workers and tabs which are on the website is possible via a [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage) API and then the ServiceWorker can postMessage() which will reach all tabs that are navigated to the website.

One limitation of this design is versioning. Because the ServiceWorker would stay alive potentially forever, we needed to identify a way to upgrade it if a new version of CryptPad is released. This is quite important for CryptPad as version mismatches can lead to catastrophic conflicts between different browsers working on the same document.

Though updating is non-trivial, we were able to solve it by sending version messages between different components of CryptPad and informing them whether they need to update (or even if they can *optionally* update). Since this seemed like a solvable problem, we tried creating an experimental implementatiton of ServiceWorkers in CryptPad, and then the fun started...

### ServiceWorkers in Firefox
Since Firefox 48, Firefox has begun following Chrome's model and running [different processes](https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox) for rendering the different tabs in the browser. However, this isolation has a side-effect that when you attempt to launch a ServiceWorker, it [may launch even though one already exists for the same website](https://bugzilla.mozilla.org/show_bug.cgi?id=1438945), because the other one exists in a different tab which happens to be operating in a different process. However, the postMessage() requests from tabs go out to all of the ServiceWorkers so this bug can be worked around.

Unfortunately we encountered some more issues with Firefox which we found not worth debugging. Our CryptDrive is a Javascript object which is represented in the encrypted realtime document as JSON and there is an ES6 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) object in order to allow every change to the drive to be propagated to the underlying realtime object. In Firefox the proxy did not work when used in a ServiceWorker and at times our ServiceWorker simply stopped running.

### Reporting bugs in browsers
One might think these are great opportunities to report issues with Firefox, and when we find an [issue which we think will affect lots of people](https://bugzilla.mozilla.org/show_bug.cgi?id=1434278) especially if it is a regression, we don't hesitate to report it, but usually it is not clear how to reproduce the issue, whether there might be some error in our usage of the API which is being smoothed over by Chrome, or whether the component being reported on is a priority, in that case rather rain low quality bug reports down upon the poor browser developers, we spend our limited time trying to make CryptPad better. In the case of ServiceWorker in Firefox, our conclusion is that in effect the technology remains experimental and shouldn't be relied upon.

## SharedWorker to the rescue
Fortunately there is another technology called [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) which is essentially identical to a plain vanilla WebWorker but can communicate with all tabs which are navigated to the site. Unfortunately this technology is only supported in [Chrome and Firefox](https://caniuse.com/#feat=sharedworkers), but the support for this technology, we found, really works!

However, Firefox still has the [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1438945) with of multiple SharedWorkers being created for multiple tabs, but since this issue is fixable we were able to go ahead with it anyway. For browsers which have no SharedWorker, they would fallback to plain old WebWorker. Though this seems like it would be a problem, it is in fact quite fine because actions done in the drive by another WebWorker are the same as actions done in the drive by another device, they need to be encrypted and sent to the server in order to persist anyway.

## Faster CryptPad
Coming in the release on Tuesday June 26, 2018, we will have a new SharedWorker based CryptPad instance, that means when you use Chrome or Firefox, the first time you open CryptPad, it will load your drive, but then every tab you open after that will communicate with the SharedWorker managing the drive and therefore pads will load nearly twice as fast.
