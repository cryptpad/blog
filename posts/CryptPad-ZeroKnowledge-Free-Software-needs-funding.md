---
title: 'CryptPad #ZeroKnowledge Free Software needs funding'
date: 2018-07-06 14:37:18
author: Caleb James DeLisle
tags:
- zero knowledge
- funding
summary: On October 31, 2014 the CryptPad project was first published, back then it was nothing more than a simple rich text pad and a horribly ugly front page.
---

[Version française ? 🇫🇷](http://blog.ludovic.org/xwiki/bin/view/Blog/Aidez%20le%20projet%20libre%20CryptPad)

On October 31, 2014 the CryptPad project was first published, back then it was nothing more than a simple rich text pad and a horribly ugly front page. Since then the project has blossemed with financing from [XWiki SAS](https://www.xwiki.com/en/) and the [OpenPaaS::NG](https://open-paas.org/) research project.

Now we are turning a corner, the OpenPaaS::NG project will end in April of 2019 and in order to keep improving, CryptPad will need new sources of funding.

Until now, the vast majority of CryptPad code has been developed by XWiki SAS and with the future of research financing in question, we want to be completely clear about our intentions. We don't want to take financing that is incompatible with the open spirit of CryptPad so while we will look for research projects, subscriptions and donations, we want to maintain the community spirit of CryptPad.

1. **We will continue to host** https://cryptpad.fr/: We want to thank everyone who has subscribed to paid accounts, with your support (currently 1,5K/year) this server pays for itself and we consider this a valuable public service which should continue.
2. **XWiki SAS will continue to fund the team through the OpenPAAS project till the end of the project**. Following this our intention is to try to keep at least 1 developer active on the project (50,000€ per year) using alternative funding or through new research projects. If we can't find a research project we'll evaluate our capacity to keep it alive based on the subscriptions and contributions we have received. 
3. **We will begin making the CryptPad finances public**: All of the money that comes in and goes out of the CryptPad project, including the money paid by subscriptions to https://cryptpad.fr/ will be published so that you can see how the project earns and spend money, and be convinced that it's worth supporting us. You will be able to follow the project's finances by going to [CryptPad on OpenCollective](https://opencollective.com/cryptpad)

Currently, the funding from our subscriptions and donations is not enough to finance even one developer, nevermind the present team of two. We need your help to grow this revenue through April 2019 and show that this can take over funding even if we don't find a research project before then. All revenue received till April 2019 will be used to fund development after April 2019.


## What we would like to do

So far, we have not been very transparent about our roadmap, we have a [tech tree](https://cryptpad.fr/code/#/1/view/R1kZC1mY9khSsrLCyJT+CA/t5Eey4SVS+TpaZWmhrCTvIP50IzX7GR4gnud9UclR6Y/present/) which shows in simple terms what features we would like to have and what technologies need to be developed in order to get those features working.

In the medium term, we would like to see CryptPad evolve into a generic platform with installable apps, a cryptographically enforced access control system, and federation with PGP-compatible messaging.

* **Installable Apps**: There are not a lot of differences between the rich text pad, the code pad, the slide deck and the kanban board. They are all layered on top of the same CryptPad base infrastructure, but still it is not possible to create a new one without changing a few things in the CryptPad core. We would like to change this so that a new app can be added without changing anything else.
* **Cryptographically enforced Access Controls**: Initially CryptPad had a very simple access control system, you share the link and that shares the pad. We added the ability to *publish* pads via read-only links and to assign a password to a pad, but we still don't have the ability to share a pad with a group of people, or importantly, revoke access once it has been given. Traditional access controls are simple because the server is trusted to give and revoke access, however with CryptPad the server doesn't have access to begin with so it must be done cryptographically. In the context of federation, cryptographic access controls are even more important since servers in the network can be run by anybody.
* **Federation and Messaging**: The weakness in CryptPad security has always been securely sharing the pad link. Today there are about 150 CryptPad instances installed around the world, and we would like to allow people on different instances to share pads and send eachother messages. Furthermore, since we already have client-side encryption, we could easily extend messaging to support PGP for sharing of pad links and messages.

Fundamentally, our goal is as it always has been, to promote Zero Knowledge and an alternative to the Google Docs / Office365 hegemony on cloud office technology. However, this is not something we can do alone, we will need your help to move it forward.

## How you can help

You can help CryptPad in a number of ways, if you're a programmer then you can contribute code, if you're a philanthropist and believe in these ideas then you can finance the roadmap or finance just particular features. What everyone can do is use CryptPad and spread the word and show people that it is possible to collaboratively edit documents without giving all the data to the server admins.

* **Contribute code**: If you are a programmer and you are using CryptPad, help make it better, talk to us about what you would like to do with CryptPad and we will do our best to find a way that your code can be integrated.
* **Take a subscription**: Every subscription helps bring a little more money into the project and this will be re-invested to make the CryptPad project better. Every subscription we get makes us believe more in the project we do and the ability to make it financially sustainable. [Subscribe](https://accounts.cryptpad.fr/).
* **Sponsor a feature**: This is one of the best ways to make sure CryptPad will improve because you can both help the project and help guide the project roadmap at the same time.
* **Get support**: If you've installed your own CryptPad in a business setting, you can get support for your installation and also help foster development of the project.
* **Just donate**: If you don't know what to sponsor, if you don't need a subscription, or if you want to sponsor more than the value of a subscription, just donate ! Even if it is not a lot of money, this is important to us as it allows to prove that the project matters. [Donate on opencollective.com](https://opencollective.com/cryptpad)
* **Get us in a funded research project**: If you are a research organization or have experience with getting European research funding, particularly in a security oriented project, get us on board to participate in the project. This will allow us to fund the project.
* **Spread the word**: The more CryptPad is used and the more it's known, the more we can convince potential financers to fund the project, this is also proves that people are interested in it. [Tweet about CryptPad](https://twitter.com/intent/tweet?text=Check%20out%20the%20%40CryptPad%20project%2C%20it%27s%20an%20open%20source%20collaborative%20editor%20and%20drive%20and%20it%27s%20end-to-end%20encrypted%20so%20the%20server%20sees%20nothing.%20%23e2ee%20%23ZeroKnowledge)

To see information about our budget and goals and to make a donation, check out [CryptPad on OpenCollective](https://opencollective.com/cryptpad).

## Come have a chat

We're on [Twitter](https://twitter.com/cryptpad) and [Mastodon](http://social.weho.st/@cryptpad) and we have a CryptPad [chat room on Matrix](https://riot.im/app/#/room/#cryptpad:matrix.xwiki.com). Come talk with us and participate to help with the project.

If you are a Web or Research professional, are intereted in our objectives and have experience in research, come talk to us as [we're interested in hiring a person](https://www.xwiki.com/en/jobs/research-and-development-lead) to help us win and execute research projects and guide CryptPad to make it functionally and economically successful.
