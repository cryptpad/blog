---
title: Time to Encrypt the Cloud
date: 2017-02-20 17:54:02
author: Caleb James DeLisle
tags:
- zero knowledge
summary: From typing a business letter to taking pictures with friends, the internet has changed every part of our lives. We don't just share information with people, we also want it synced across our computers, tablets, and phones.
---

From typing a business letter to taking pictures with friends, the internet has changed every part of our lives.
We don't just share information with people, we also want it synced across our computers, tablets, and phones.

Modern technology allows us to do this, but it does so by sending all our data to _the Cloud_.

A lot of what we think of as the Cloud is owned by multinational corporations like Google.
Though they may seem like innocent custodians of our data, behind the scenes they are often using it to target us with advertising.

## There is little that one person can do

Terms of service are long, vague documents which usually don't address knowledge _derived_ from your data.
More sinister: you can never really know if they're cheating.
Ad networks don't tell you how they know or even what they know.
They just show you ads, based on what they discovered about you... _somehow_.

## What's your personal information worth?

* Normally  $0.0005 - $0.0021 per person
* Pregnant in your second trimester? $0.11 (_52 times as much_)
* Have a specific health condition? $0.26 (_123 times as much_)

This is only going to get worse.
Artificial Intelligence technology is maturing and Silicon Valley is using it to derive even more value from _us_, its most valuable products.

The result of this will be a veritable weapon of mass manipulation.
The tragedy is, manipulating people to get what you want is not that complex.
We don't need to wait for the AI singularity, all we need is a deep mind with the cleverness of a spoiled 5 year old.

>  _All data, over time, approaches deleted, or public._
>
> --Quinn Norton

While we must seek to use services with ethical foundations, we must also recognize that once we give up our data, we are at the mercy of economics.
Companies which don't _extract maximum value_ from our data will eventually be acquired by those which do.

## Zero Knowledge

Fortunately we don't have to go back to the typewriter age.
Using basic cryptography, the cloud can make information available across your devices without being able to read the data which it stores.

We do this by adding a hash character (#) to a link.
By design, browsers don't share anything after this character.
That means we can share encryption keys just by sharing links.
Furthermore, a username and password can be made into a secret key which allows a person's private data to be kept encrypted using their login credentials.

## How do we know you're secure?

Zero Knowledge web apps are not intended to _make you secure_, they're intended to be _provably ethical_.
This cannot be overstated, for too long we have been forced to choose between "James Bond" security protocols which are too difficult to use, and slick web apps which monetize your data.

> _Our promise to you is that our business model is not to spy on you, and it never will be_.

We hope that the security community will join us in building user-friendly, Zero Knowledge services.
Privacy is a social problem as much as it is a mathematical one, and it is time we take that seriously.

## What we're going to do

We are going to show the world that web apps can be elegant and usable while still respecting privacy in a verifiable way.
We cannot easily prove that we've never collected any data but we can prove we're not doing it systematically.

To start off this conversation, we have developed [CryptPad](https://cryptpad.fr), the first ever Zero Knowledge Realtime Collaborative Editor.
We are aiming to make it the most user friendly, most productive collaboration tool available, and still Zero Knowledge.

Finally, we have chosen to make the CryptPad project [Open Source](https://github.com/xwiki-labs/cryptpad).
We did this not only because Open Source is in our culture, but also because we want Zero Knowledge web apps to become the universal standard.

### The plan in four steps

1. Develop the most user friendly collaboration tool available which is also Zero Knowledge.
2. Use this tool to explain the problem and show that an alternative is possible.
3. Open Source the work we do so that others can also build Zero Knowledge apps.
4. Foster a culture where privacy by default is a baseline expectation.

## How you can help

* Use CryptPad and other Zero Knowledge services evey day, tell us what you like and what we can do better.
* Show your support: Buy an upgraded account (_coming soon_) from us, the people who are developing the code.
* If you install the Open Source code of CryptPad on your own servers, consider buying a support contract.
* Talk to your friends and colleagues about Zero Knowledge, show them CryptPad and explain that this is what the cloud can be.
* If you're a web developer, think about Zero Knowledge for your next web app.

## Other Zero Knowledge Services

### Open Source

* Sync backups to Google or Dropbox and force them to become Zero Knowledge
  * https://cryptomator.org/
  * Source Code: https://github.com/cryptomator/cryptomator
* Easy chrome extension for gmail users to send & receive end-to-end encrypted email
  * https://cryptup.org/
  * Source Code: https://github.com/tomholub/cryptup-chrome
* Send and receive end-to-end encrypted email using your normal email account (Mobile, Desktop version coming soon)
  * https://prettyeasyprivacy.com/
  * https://cacert.pep.foundation/trac
* Send end-to-end encrypted text messages on a phone or computer
  * https://wire.com/en/
  * https://github.com/wireapp/
* Send end-to-end encrypted text messages on your phone
  * https://whispersystems.org/
  * Source Code: https://github.com/whispersystems
* Type or paste a message and give the link to friends
  * https://ncry.pt/  (Source code: https://github.com/luggs-co/ncrypt)
  * https://privatebin.net/ (Source code: https://github.com/PrivateBin/PrivateBin)
* Chat online with lots of people at once
  * https://riot.im/  **NOTE:** End-to-end encryption mode in beta so currently disabled by default
  * Source code: https://github.com/vector-im

### Proprietary

While we value Open Source, the need for Zero Knowledge Cloud is paramount and we respect the
decision of some organizations to keep parts of their codebases proprietary.

* Data backup
  * https://www.boxcryptor.com/en
  * https://whisp.ly/en
  * https://www.sync.com/
  * https://www.pcloud.com
  * https://spideroak.com/personal/spideroak-one
* Chat and instant messaging
  * https://spideroak.com/personal/semaphor
* Send and receive end-to-end encrypted email
  * https://protonmail.com/
* Web of trust and proof of identity
  * https://keybase.io/


An important one which we forgot? [Get in touch](https://cryptpad.fr/contact.html)!

### Updated

* August 9, 2017, Wire is now fully Open Source, yay
