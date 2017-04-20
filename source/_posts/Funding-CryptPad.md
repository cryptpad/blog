---
title: Funding CryptPad
date: 2017-04-20 12:15:09
author: Aaron MacSween
tags:
---

CryptPad started as a novel idea:

> provide a means for people to collaborate on the web, without their data being exposed to the server that connects them

Since its conception as one developer's hobby project, this idea has grown organically into a team of core developers, a community of contributors, and a growing number of people who collaborate with CryptPad every day.

## How we're able to do this work

CryptPad is a part of the OpenPaaS-NG project, which is funded by [BPIFrance](http://www.bpifrance.fr/).
As mentioned in [our April 1st post](https://blog.cryptpad.fr/2017/04/01/Exciting-news/), this funding only applies to 50% of our expenses.
I joked that the other 50% was being covered by our new partners (the _**NSA**_), but in fact, the remainder is still covered entirely by [XWiki SAS](http://xwiki.com).

We have a fair amount of autonomy when it comes to deciding what features we will develop.
With that in mind, however, there are some long term goals that come as a part of OpenPaaS, some that stem from XWiki, and some that come from feedback from our userbase.

We recognize that however people's goals may differ, ultimately everyone with an interest in the project would like to see it continue to receive attention.

By operating as part of an established company that has a history of building open source software, we're able to leverage experience and resources that would not be as readily available if we were to attempt to build the same thing in our free time.
Our ability to solicit research funding means that individuals who wish to see the project prosper are not solely responsible for its livelihood.

Since the [OpenPaaS-NG project](https://open-paas.org/) is only funded until 2019, we've been searching for other means of funding.
Until 2019, any additional revenue would serve to ease the load on our employer.
We hope that by the time the project finishes, we will have solidified a stream of income which is stable enough to make CryptPad entirely self-sustaining.

## Our new funding strategies

Many of the largest web companies operate by offering free services to anyone who wants to use them.
They offset the costs of these services by selling user data to whoever will buy it, or by selling ad space to anyone who wants to sell to their market.

We've chosen not to pursue either of these options.
Instead, we want to appeal to those who value the work we're doing, and provide options for supporting it, so that we can continue to improve CryptPad.
We're willing to bet on a trend that other privacy-conscious enterprises have demonstrated, that people are _willing to pay not to be a product themselves_.

To be perfectly clear, we will continue to develop our code in the open.
Anybody who wants to install CryptPad for themselves will still be able to do so.
Additionally, the features CryptPad now offers will continue to be available under the current terms.
Going forward, however, we will offer certain additional functionality as premium features.

### Paid hosting

[CryptPad.fr](https://cryptpad.fr) hosts an ever-increasing amount of data.
So far, this hasn't been a concern, but as more people take interest in the project this won't be something that we can sustain.

In many cases, people create a pad as a test of the software, and forget about it once they understand how things work.
In other situations, people use CryptPad to collaborate on reports, code, or presentations.
At some point, those projects are finished, and those documents are forgotten.

To address this problem, we've implemented **pinning**, which is a way of telling the server that you want a pad to continue to be available.
Anonymous pads, that is, _those which aren't pinned by a registered user_, are liable to be removed after 90 days of not having been read or modified.
We believe this time is sufficient to distinguish valuable information from that which is safe to remove.

* Pinning will only be available to registered users.
* Pinning will take effect following our next release, on April 25th, 2017
* Everything that is in your drive will be automatically pinned.
  * new files will be pinned once you add them
  * removing a file from your drive's trash will unpin it
* Unpinned files which have not been accessed for at least 90 days will be removed
  * effective July 24th, 2017 (90 days from April 25th)
* Registration is free, but we plan to offer users a limited amount of storage space for pinning.
* For additional storage, you'll have the option of paying a modest fee for an increased quota.
* We'll have more information about pricing soon.

### Support contracts for private installations

If you've decided to host CryptPad yourself, we fully understand.
Like you, we use free software, and know the benefits of taking responsibility for your own infrastructure.

If you're using CryptPad to host critical information, however, you might consider purchasing a support contract.
We're still figuring out the details of our support contracts, however, this approach has proven to be of valuable to XWiki's many customers in the past.
You can see an example of XWiki's pricing [here](http://www.xwiki.com/en/products/pricing-onpremise).

If you plan to use CryptPad for your business, consider that it might be more time and cost effective to have us install and configure everything than to learn to administrate it yourself.
Otherwise, if you find that you're comfortable setting everything up in a basic configuration, but you'd like help configuring your server to behave in a special way, we'll be there to help.

### Sponsored development of open source features

If there's a particular feature you'd like to see implemented within CryptPad, we're able to dedicate development time to build it into the software in the best way possible.

Sponsored development allows us to build features to suit particular users' needs.
By integrating those features into the official, open source version of CryptPad, we ensure that they will be used by as many people as possible.
This helps us refine those features to be even more useful for you, and ensures that they will continue to be supported in the long run.

## What's next

Since we announced our [bi-weekly release schedule](https://blog.cryptpad.fr/2017/02/24/Announcing-biweekly-releases/), we've tried to make sure that each release contains an exciting feature.
This time around, we've had to set some time aside to implement pinning, as well as code for reporting the size used by any one user's drive.
We realize this isn't especially interesting for most of you, but it will be necessary for some more advanced features which we hope to share with you soon.

By providing a quota system for our registered users, we will be able to offer encrypted file upload capabilities.
You'll be able to upload images, and embed them in presentations and pads, a process which has been somewhat difficult so far.
Our decision to limit users' upload capacity is intended less to make a profit, and more to limit abuse.

We recognize that disk space is getting cheaper all the time, and that cloud hosting services will be able to offer more competitive pricing.
Our aim isn't to compete with the giants in the cloud industry, but simply to finance our ongoing research into privacy-friendly collaboration.
There is still much to do, but working together, we can accomplish great things.

