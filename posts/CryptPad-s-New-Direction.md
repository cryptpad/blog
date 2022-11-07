---
title: CryptPad's New Direction
date: 2017-08-18 12:14:39
author: Caleb James DeLisle
tags:
- security
- extensibility
- quality
cover: /images/cryptpad_old_mainpage.png
---

> If you are hosting CryptPad, please make sure you are up to date. [CryptPad 1.13.0 (Naiad)](https://github.com/xwiki-labs/cryptpad/releases/tag/1.13.0) fixed a major security issue.

CryptPad was born on Halloween 2014, at that time it was a skunkworks project inside of XWiki SAS. The UI was hidious green and white and the only feature was the CKEditor based pad. We have come a long way.

![Old CryptPad Main Page](/images/cryptpad_old_mainpage.png)

As was mentioned in [Building Mututally Beneficial Relationships](2017/06/02/Building-mutually-beneficial-relationships/), CryptPad cannot ever be great without people developing the software as their daily job. We have been able to develop this project with the generous support of [BPI France](http://www.bpifrance.fr/) and the [OpenPaaS::NG](http://ng.open-paas.org/) but that support only finances a small team and it will not continue indefinitely.

Starting with this release, we are adopting a new look and a reinforced dedication to making a quality product for people whose time is valuable. We're starting this by upgrading the logo and the informational pages.

![New CryptPad Main Page](/images/cryptpad_new_mainpage.png)

Our lovable fist logo was created one night by grabbing a screen shot of an ascii generator. It was a time when I was racing to get *something* working to prove that CryptPad was an idea worth pursuing. Now times have changed. CryptPad is finally something that I'm starting to feel proud of, and the logo represented the last reminents of a time when everything was a rush and quality was an afterthought.

We also have introduced a lot of new features such as:
* New front page which allows creating a pad in 1 click
* Clickable links in pads when viewed in read-only mode
* File-picker for embedding media in a pad in Markdown mode
* You can now have your preference between tabs and spaces, when editing in the code editor

![Registered users can uploading and view PDF Files](/images/cryptpad_pdf.png)

But more than features, we have focused on making CryptPad easier to use. It's now easier to paste text into the pad without breaking the formatting and we have additional tool-tips to help explain different features of CryptPad.

Going forward from today we plan to make CryptPad easier to use, more secure and more extensible. We are rewriting the pad logic in order to run in a cross-domain iframe which will make use of the browser's [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy) as a sandbox to block most of the code from accessing the decryption keys.

This will open the door to 3rd party applications developed for CryptPad which can be protected by the same cryptography as CryptPad and which have limited access to the CryptPad system.
