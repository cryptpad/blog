---
title: Security growing pains
date: 2017-03-06 11:04:58
author: Caleb James Delisle
tags:
---

To sum things up:

1. [Martin Gubri](https://github.com/Framartin) volunteered to help us with security testing and found multiple XSS vulnerabilities
2. We learned things and improved our security in multiple ways and we have plans to build even further improvements
3. Update all the things

## Exactly what happened

Late Tuesday night after work, I got an email from Martin Gubri telling me that he had found multiple XSS vulnerabilities in CryptPad.
This is not fun news for anybody, but as the browser stores encryption keys, it is especially bad news.
I want to reiterate what I said in [our first blog post](https://blog.cryptpad.fr/2017/02/20/Time-to-Encrypt-the-Cloud/ "Time to Encrypt the Cloud"), CryptPad is just a regular web app but with provable ethics, it is not designed to provide military grade security.

Though we could have waited until our next release to fix this issue, we decided that we could not feel good working on new features while knowing about an issue which could harm our users.
However, we wanted to fix the systemic issue which caused XSS to be possible in the first place, not just the symptoms which we became aware of.

CryptPad uses a modern web feature called [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) to prevent attacks such as this one.
Content Security Policy allows a web server to mandate that javascript can only be loaded from domains which are explicitly authorized.
Unfortunately, CKEditor [makes heavy usage of inline scripts](https://dev.ckeditor.com/ticket/8584) (scripts which are written directly into the HTML file), so we had made an exception for inline script which represents the most common type of XSS.
When Martin did a review of our application, he found multiple places where we had not been properly escaping HTML content and sadly all of these were attackable despite our Content Security Policy.

## How we reacted

For me, a security bug does not come alone, it is always the result of multiple failures at different levels.
Zero Knowledge is about resilient software for resilient society and we allowed ourselves to rely entirely on proper escaping.

On Thursday, March 6th, 2017, we deployed and released a set of patches to our previous [Bunyip release](https://github.com/xwiki-labs/cryptpad/releases/tag/1.1.0), which we're calling [1.1.1 _Bunyip's Revenge_](https://github.com/xwiki-labs/cryptpad/releases/tag/1.1.1).
This not only sanitizes XSS in places where we know about but it also implements a strong Content Security Policy everywhere except inside of the CKEditor iframe, which insists on injecting script tags.

It is important to upgrade as soon as possible because XSS attacks can potentially give an adversary access to all of your pads.
If you're using cryptpad.fr on the website then there's nothing you need to do, everything is fixed.

## Moving forward

We want to find and pioneer better ways of protecting your data on CryptPad.
We also hope to foster a whole movement of Zero Knowledge web services which feature layered security, protecting users from external threats as well as the mistakes that developers are sure to make.

Spurred on by the revelation of our own errors, we have reinvigorated a conversation about moving each of the _apps_ such as CKEditor into a [sandboxed iframe](https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/) where they would be unable to access any of the cryptographic keys or other pads.
This introduces some difficulty on our end, as we want to provide a resilient platform while making Zero Knowledge an approachable subject for web developers.

Finally I would like to also publically thank our friend [_kpcyrd_](https://github.com/kpcyrd) for finding another XSS issue back in early December of 2016, before we had official releases or a blog where we could give him credit for his work.


