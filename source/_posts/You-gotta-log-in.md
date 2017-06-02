---
title: You gotta log in
date: 2017-05-17 12:22:52
author: Caleb James DeLisle
tags:
  - Login
  - Storage
---

It's been two and a half years since the [first commit to CryptPad](https://github.com/xwiki-labs/cryptpad/commit/1508c7ba71f5de5e51f061fbef45bc1f18493832),
we no longer have the hideous white and green color-scheme and we're on our third URL format.
More importantly we now have a CryptDrive with folders instead of just remembering a few recent
pads in the browser's local storage.

The success of CryptPad as a tool for organizing and collaboration makes us glad to be working on
the technology, but our desire to avoid collecting metadata has lead to an unsustainable situation.

> *We can't store data we don't understand for people we don't know*

There has been a proliferation of pads which are not accessed after a while and we don't know who
made them or even what type of pad they are. We know that a great many of them are "test pads",
if for no other reason, because we made a lot of them. Eventually we will be forced to delete old
data but we don't want to delete anything important.

Starting a few weeks ago we implemented a system called pinning. When you are logged in, your
browser tells CryptPad all of the things in your drive. We don't know what's in them but we know
they're important so we shouldn't delete them. Right now you can log in to CryptPad, go to your
[Settings Page](https://cryptpad.fr/settings/) and click the **Usage** button to see how much data
you are pinning.

We recognize many users of CryptPad would like to use it anonymously and we will continue to support
anonymous pads, but soon they will begin to be removed from storage after 3 months of inactivity.
We've also simplified the anonymous CryptDrive because we want to send the message loud and clear
that *pads in the anonymous drive are not safe from deletion*.

So please register and log in, you'll get 50MB of pinning quota with the full features of CryptDrive
and you can be sure that none of your pads will ever be removed from the server.
