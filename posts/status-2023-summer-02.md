---
title: Summer 2023 status - part 2
date: 2023-08-18
author: "David Benqué"
tags:
- status update
- release
- diagram
- auth
cover: /images/diagram-screenshot.png
summary: "CryptPad 5.4.0, New Diagram app, 2 Factor Authentication"
---


As promised, this is the second part of our summer status. It is all about the new 5.4.0 version of CryptPad which is now live and released.

## 🚀 CryptPad 5.4.0

We deployed the new version to our [flagship instance](https://cryptpad.fr) on July 20th. With members of the team taking summer breaks, we took our time to test the new features, bring the [documentation](https://docs.cryptpad.org) up to date, gather feedback and translations. We released [5.4.0 on GitHub](https://github.com/cryptpad/cryptpad/releases/tag/5.4.0) on August 10th. The major new feature are: 

### 🎨 New Diagram app
The Diagram application is an integration of [Draw.io](https://www.drawio.com/) into CryptPad's encrypted real-time collaboration.

<a class="btn" href="https://cryptpad.fr/diagram/"><i class="fa fa-external-link"></i> Try the Diagram app on cryptpad.fr</a>


![screenshot of the new diagram application](/images/diagram-screenshot.png)

### 🔑🔑 2 Factor Authentication 
You can now protect your account with 2 factor authentication using one-time passwords. 

How-to for your Cryptpad.fr account:
1. Settings > Security & Privacy
2. Enter your password
3. Save the recovery code
4. Snap the QR code with a 2FA app of your choice
5. Confirm with a code
6. ✅ 2FA is enabled

2FA is the first deliverable for the [CryptPad AUTH](https://nlnet.nl/project/CryptPad-Auth/) project, ahead of the upcoming SSO features. We are very grateful to NLnet and NGI Assure for the support in making CryptPad more secure.

### 🎁 and more

- We dropped Bower, an [outdated tool](https://github.com/cryptpad/cryptpad/issues/295#issuecomment-1373267211) to manage client-side dependencies
- In addition to the Diagram application, Mermaid.js is also upgraded to 10.2.4 adding more diagram types such as [mindmap](https://mermaid.js.org/syntax/mindmap.html) and [timeline](https://mermaid.js.org/syntax/timeline.html)
- New setting to destroy all of the documents you own in one click
- The full release notes are [on GitHub](https://github.com/cryptpad/cryptpad/releases/tag/5.4.0)

## 🚀 🪂 CryptPad 5.4.1

Even though we had plenty of time to test things on _our_ instance, problems occured after the release with a number of configuration issues and [typos](https://github.com/cryptpad/cryptpad/commit/a3772cf92c448e893cf8e021cfe9149939d3fd6c) causing upgrading issues on other instances. We are tracking these and will release [5.4.1](https://github.com/cryptpad/cryptpad/milestone/3) ASAP to make the fixes available.

## 🔭 Next up

- We'll be resuming monthly status updates at the end of each month starting with September
- SSO authentication features are next on the roadmap for the AUTH project
- We are in the final talks for an exciting new hire for the team, we'll say more in the next couple of months