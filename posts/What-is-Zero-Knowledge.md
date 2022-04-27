---
title: What is Zero Knowledge
date: 2017-03-24 14:42:03
author: Caleb James DeLisle
tags:
  - zero knowledge
  - security
---

We have gotten a lot of questions about the concept of Zero Knowledge, the vision and ethics as well as the exact meaning.

* What is Zero Knowledge?
* How can encryption in the browser be secure?
* What about metadata?
* Most importantly: How to know if a service is Zero Knowledge?

I wanted to write a blog post to clarify what Zero Knowledge is all about. Zero Knowledge has two meanings, it can refer to a *Zero Knowledge Proof*, an obscure mathematical construct with few real-world uses but it can also refer to something with a very real-world meaning: web services which encrypt your content so that they themselves cannot read it. You may be wondering how this can be secure when a web administrator can quietly change their site to an unencrypted version at any time. This is a real problem, there is currently no way to verify the content (and code) of a website, but we need not despair. Even though we cannot prove that a website is *secure*, we can check that they are promising to make themselves blind to your content and they make that promise knowing if break it they might get caught.

## Security is probabilistic

Consider the security software you use every day such as your web browser with HTTPS, your phone and your computer's operating system. Have you ever stopped to check that software for "backdoors" (intentionally inserted which break your security)? If you have then you are one of the tiny group of heroes who dedicate their time to making the world a bit more robust and I salute you for it. If you're like the rest of us, you just hope that the authors of that software were honest enough and protective enough of their reputations to avoid inserting a backdoor when it means potentially getting caught. Zero Knowledge is based on the same logic, just as software makers can surreptitiously add a backdoor to their software, Zero Knowledge websites can serve a backdoor to the user. However, just as software makers who insert backdoors in their software risk getting caught, Zero Knowledge web app providers who insert backdoors in their website also risk being caught.

## The metadata question

Metadata is a serious issue. Former CIA director Michael Hayden said of the agency: "We kill people based on metadata". I don't want to belittle the importance of data which is not the actual content, but at the same time we must recognize that there is a huge uphill climb fix this issue. While the CryptPad project tries not to collect metadata when it can be avoided, we also recognize that other cloud providers may collect more or less metadata than us in order to provide their services. Fundamentally, we accept that a service qualifies as Zero Knowledge as long as the *content* is protected from the server operators. We are committed to studying ways to develop new, more secure solutions to the metadata issue but the spirit of Zero Knowledge is about more ethical solutions which are immediately actionable.

## How to know if a service is Zero Knowledge

Zero Knowledge is about trust, nobody can read over and verify all of the code of all of the Zero Knowledge services available, but there are some heuristics which you can use when choosing a service.

### 1. Is it primarily Open Source ?

Services which are primarily Open Source are easier to evaluate both for accidental security mistakes and for potentially nefarious behavior. Furthermore, when a company commits their software to Open Source they make a statement that they are in the business of being an ethical provider for the long term and are not just riding the wave of a popular term.

### 2. Were you warned about losing your password ?

True Zero Knowledge services must protect your data from themselves using something you know and they don't, such as your password... In the event that you lose your password and you are using a true Zero Knowledge service, your content will be inaccessible to you and to the service - the locks that keep them out will keep you out as well. Check for this warning.

### 3. Does it claim to be Zero Knowledge or End-to-end Encrypted ?

This is perhaps the most important question, because when a service provider makes the public statement that they are Zero Knowledge, they show they are prepared to risk their reputation if they are discovered to be storing your content in a way they can access. Some Zero Knowledge providers prefer the term *End-to-end Encrypted* which has gained significant popularity with messaging apps. There is no functional difference between a Zero Knowledge application and one which advertizes End-to-end Encryption.

## Talk to us

CryptPad is developed by a team of 3 people with generous financing from BPIFrance through the [OpenPaaS::NG Research Project](http://ng.open-paas.org/about-us.html). Our mission is to make Cloud Computing more ethical by promoting Zero Knowledge Cloud Services and show young entrepreneurs that it is possible to make a living while being ethical with peoples' data. Meet us in our IRC/Matrix channel on Freenode and at: https://riot.im/app/#/room/#cryptpad:matrix.org
