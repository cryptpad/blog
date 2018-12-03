---
title: CryptPad's new Secure Cross-Domain Iframe
date: 2017-08-30 16:53:00
author: Caleb James DeLisle
tags:
  - security
  - appstore
  - iframe
  - media-tag
---

<script src="https://cryptpad.fr/common/media-tag-nacl.min.js"></script>

CryptPad version 1.14 (Codename [Ouroboros](https://en.wikipedia.org/wiki/Ouroboros)) has been released and the most exciting new feature is one you cannot even see. As you may remember from the [Security Growing Pains](/2017/03/06/Security-growing-pains/) post, [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) is a significant part of CryptPad's security model, and it is unfortunately incompatible with [CKEditor](https://ckeditor.com/), the Open Source text editor used in CryptPad.

With this release, we have done a significant re-architecture of the CryptPad codebase. Starting with the /pad/ application, the CryptPad UI has begun a process of moving into an iframe which is hosted on a different domain: *sandbox.cryptpad.info*. Moving the visual content to a different domain means that even in the event of a [Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) security vulnerability, most of your private information such as the pads in your CryptDrive, will not be at risk.

In this version we updated only the /pad/ application to use the cross-domain iframe because it is the only app which requires *inline script*. This prevented us from using Content Security Policy to block the most significant vector for Cross Site Scripting attacks but now with the cross-domain iframe, such attacks are mitigated.

<media-tag src="https://files.cryptpad.fr/blob/b5/b5cd676935a5b23c158f38a84b7f3dfd3dc96ab3aafddd62" data-crypto-key="cryptpad:FBD19VUsNtgIxwjMGSOZcswciQzDixfuBY7dVWVwRG0=" data-attr-width="50%"></media-tag>

Going forward, we plan to implement a standardized CryptPad application API so that new applications can be developed, installed and used in CryptPad. Today, the CryptPad API which is exposed to apps such as /pad/ and /code/ is not standardized and there is no clear line between the apps themselves and the CryptPad internals. As we move toward the a standard app API, we will define a standard representation of a CryptPad application with such additional aspects as the app's color-scheme and icons.

Fundementally, this unexciting change to CryptPad begins a new phase in development, we plan to move from a set of integrated prepackaged applications to an ecosystem of applications for collaborating on different types of content with the same encryption under the hood.

## But Wait, There's more

The pictures in this blog post are not hosted on the blog, they are in fact Zero Knowledge files uploaded on CryptPad. They
can be seen on this blog because it is using the [Media Tag](https://github.com/UCF-project/media-tag) which was developed as part of the UCF Project with the support of [Systematic](http://www.systematic-paris-region.org/), [BPIFrance](https://www.bpifrance.fr/) and the [City of Paris](https://www.paris.fr/). 

<media-tag src="https://files.cryptpad.fr/blob/3c/3c9b5b3fb00b7dc35e15851606132585e8b69b06a51556eb" data-crypto-key="cryptpad:VE4raHL5VFReAXxioTaFZwt6q2jpxX+bdFHAFeoivZQ=" data-attr-width="40%"></media-tag>

Media Tag allows files on CryptPad to be included in any website (such as this blog). All you have to do to include a file from CryptPad is simply include the Media Tag loader and then add a Media Tag to your document, just like the following:

```html
<!-- At the top of your HTML file -->
<script src="https://cryptpad.fr/common/media-tag-nacl.min.js"></script>

<!-- Where you'd like the image to be located -->
<media-tag src="https://files.cryptpad.fr/blob/3c/3c9b5b3fb00b7dc35e15851606132585e8b69b06a51556eb" data-crypto-key="cryptpad:VE4raHL5VFReAXxioTaFZwt6q2jpxX+bdFHAFeoivZQ="></media-tag>
```

With this you can embed files from your CryptDrive into any website you want.
