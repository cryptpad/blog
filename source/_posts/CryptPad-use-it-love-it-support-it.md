---
title: 'CryptPad - use it, love ❤️ it, support it'
date: 2017-05-23 18:40:35
author:
tags:
---

It's been another release day in our little team. Today we released
[CryptPad v1.7.0 (Hodag)](https://github.com/xwiki-labs/cryptpad/releases/tag/1.7.0). The biggest new feature in this version is that when you create a */code/* pad, the default highlighting is in markdown syntax and there it is rendered in realtime while you type. Try it out by making a pad at [cryptpad.fr/code](https://cryptpad.fr/code).

In this release we also completed something much more important and central to the future of CryptPad. We finished our first version of the payment server which allows you to take a subscription and help support the work that we do.

Starting with this release we are now imposing a 50MB storage limit for our anonymous users and a 3 month expiration of pads which are not stored by a registered user. 

Instant collaboration is the vision of CryptPad and we are committed to continuing to provide that and even providing 50MB of persistent storage for anyone who is willing to sign up.

For people who are ready to take the next step, we are now providing subscriptions which will improve how you organize your information while helping CryptPad to grow and improve.

## Plans

1. Personal (5GB storage, 5€/month ex. VAT)
	* This is best for an individual using lots of pads for collaboration and note taking. For the price of a sandwich you can stay organized on all of your devices while also keeping your privacy private.
2. Standard (20GB storage, 10€/month ex. VAT)
	* For the price of lunch, you can have 20GB of storage, enough for not only pads but also for the soon to launch File Upload which will allow Zero Knowledge storage of files such as pictures and PDF documents. With the Standard plan you can add one more friend for free.
3. Team (50GB storage, 15€/month ex. VAT)
	* If you're ready to extend your usage of CryptPad to an entire team, we are ready to help you succeed. With a Team plan you get 50GB of data storage in CryptPad, plenty for files and pads. You also get to add **five** people to your plan and you get professional support available in English and French.

Our goal is to make the best collaboration tool available while still being unable to sell or leak your content. Help us succeed, helping you stay organized and help show the world that Zero Knowledge Cloud is possible.

## For Admins

If you're hosting your own instance of CryptPad, there are a few things you'll need to do when you upgrade to Hodag. The limits code is still somewhat of a mess and while we get it tied down, you'll need to do a bit of work to disable it.

First there is a serverside per-user storage limit defined in `config.js` You'll want to set this to a big number like so:

	defaultStorageLimit: Number.MAX_SAFE_INTEGER
    
Then there is `customize/application_config.js`. If you're not familiar with `/customize/`, you can create this directory and then copy `application_config.js` over from the `/customize.dist/` directory so it will not be overwritten. The server will try looking in `/customize/` first.

Inside of `application_config.js` you'll need to update the `enablePinLimit` line like so:

    enablePinLimit = false;

If you're using your own CryptPad installation in a business context, please consider contacting [sales@cryptpad.fr](mailto:sales@cryptpad.fr) for an on-premises support contract. You'll get help with upgrades and early information about security issues.

## What's Next

In the coming months, we're hoping to roll out text coloring based on the authors of the document as well as file upload for PDF and image embedding. Eventually we plan to add Zero Knowledge spreadsheets and workgroups for team collaboration.
