---
title: Our future is collaborative
date: 2019-05-27 12:20:22
author: Aaron MacSween
tags:
  - roadmap
  - funding
  - ngi
  - open-source
---

For anyone that doesn't have the time or interest to read the rest of this article, the short version is that the CryptPad team has received a 50000 Euro grant from [NLnet foundation](https://nlnet.nl/foundation/). This funding will be directed towards the design and development of _team-centric_ features in a project we're calling _CryptPad Teams_.

If you're still reading, I assume you want to know more about our plans and our relationship with NLnet.

## Some backstory...

Up until the end of March 2019 our team's work was funded by the [OpenPaaS project](https://open-paas.org/), a four-year French research project in which CryptPad was only a minor component.
Our role was to produce a set of collaborative editors for the open-source platform.
It was never stated that our contributions should be delivered as a standalone platform, but having a self-contained code-base that we could easily update and deploy simplified our job.

CryptPad had already been prototyped as a part of a previous research project, though its scope was considerably smaller than what would be required by OpenPaaS.
Since the platform was being developed with businesses and other large institutions in mind, confidentiality was a concern and a stated requirement of the project.
Even so, I think it's fair to say nobody expected us to make privacy such an central part of our design.

In many organizations these design choices might have been seen as digressions.
We've been fortunate to have had a lot of support from our employer, ([XWiki SAS](https://www.xwiki.com/)).
Consequently, we were able to nurture a prototype such that it grew into a platform, a product, and a community.
Still we knew all along that our role in the OpenPaaS project would come to an end, and that without external funding it would be difficult to continue with the momentum we'd established.

## Support from our community

As an active member of the community concerned about privacy issues, I know there are a lot of people that are suspicious of government money.
While I understand that this distrust is justified by a lot of history, I'm very satisfied with what I consider _the European software model_ of funding work public work with public money, keeping in mind that I'm a Canadian that's lived in France for the past few years.

Without the social investment we've received so far it would have been very difficult to create a product of sufficient quality that anyone would pay for it.
I often hear people rebutt this point by saying that a lot of _free-software_ is produced _for free_ by volunteers.
Personally I'm in the camp that believes that the people writing that software deserve the same financial stability that is enjoyed by those producing software with proprietary or extractive business models, but that's a bit beyond the scope of this article.

In any case, before going on to talk about the very generous contribution we've received, I wanted to acknowledge the support up until now from individuals and organizations that use CryptPad.
Since the end of our last project and the beginning of this new one, we've been sustained by a mix of the revenue generated by [subscriptions to CryptPad.fr](https://accounts.cryptpad.fr/#/?on=cryptpad.fr) and [donations to our OpenCollective campaign](https://opencollective.com/cryptpad).
These contributions help to keep CryptPad going in such brief periods when we haven't secured larger sources of funding as well as providing alternatives should such opportunities cease to be available.

You can expect another post in the near future about the status of our crowdfunding campaign where we'll go over our crowdfunding campaign in more depth.

## NLnet and the _Next Generation Internet_

You might recall that we recently [visited Barcelona](https://blog.cryptpad.fr/2019/02/22/Heading-to-Barcelona/) to receive an _NGI award_ for _privacy and trust-enhanced technologies_.
Those awards were organized as a part of the [NGI initiative](https://www.ngi.eu/), funded by the European Union's [Horizon 2020 research program](https://ec.europa.eu/programmes/horizon2020/en).

As a part of the initiative, NLnet has been made responsible for distributing a rather large sum of money to smaller projects through the administration of [Search and Discovery](https://nlnet.nl/discovery/) and [Privacy (and trust) Enhancing Technologies](https://nlnet.nl/PET/).
By delegating these enormous tasks to NLnet the EU has recognized their excellent track record for supporting projects that actively contribute towards an open information society.

Naturally we're very happy to receive the financial support, but beyond that the foundation has offered a variety of other resources which they have at their disposal by way of having played a strong role in the European free software community.
They've offered expertise in accessibility, documentation, security auditing, internationalization, and legal matters surrounding software licensing, among other things.

Finally, it's worth mentioning that for all of this support that we'll receive, the amount of time we've spent writing the initial proposal and following up until the point of signing a contract has been remarkably brief.
Whether considering the delay between submission and acceptance or the actual time spent on documents and correspondence, they've kept the bureaucracy to an absolute minimum.
For a small team like ours, this makes a massive difference in our ability to access such funding and to put more of our time towards the activities the money is meant to support.

## What _CryptPad Teams_ will entail

This purpose of this grant is to develop technologies which enhance the public's ability to preserve their privacy.
Our contract defines the milestones which we must reach in order to get paid.
I voluntarily included a stipulation that we would not consider a goal complete until its components were publicly accessible as source code and in our hosted platform.
This was meant to ensure that the outcomes benefit our community of users and developers alike.

Starting with CryptPad 2.23.0 we'll introduce support for personal encrypted mailboxes for registered users.
We're not looking to replace e-mail or the other platforms which are focused on encrypted messaging, this will just be a simple feature which will allow users to interact with each other more effectively whether or not they are online at the same time.

Our first use-case for this is an improved version of our "friend request" which currently requires that both users be online.
You'll be able to send friend requests from user's profile pages and they'll see a notification the next time they visit CryptPad.
Going forward we'll use the same system to offer friends access to documents directly through the sharing menu, instead of having to send URLs over potentially insecure mediums like unencrypted email or messengers.
Similarly, friends will be able to request the ability to edit documents that they can view, as well as to request "ownership" over documents which they should be able to delete.

As minor as some of this functionality might sound, we believe they'll make a positive and significant impact on users' privacy.
We want to minimize how often they have to directly handle the encryption keys which protect the contents of their documents.

After these initial steps we'll begin offering first-class support for teams within CryptPad, allowing users to define groups of friends so that they can delegate access quickly and effectively.
Teams will integrate with shared folders and will eventually offer features targeting various types of groups, whether hierarchical as is customary in many businesses or on a more ad-hoc basis as might be expected with friends or other self-organizing groups.
Team members will benefit from better oversight as to who can access particular documents, reducing the likelihood that they'll accidentally leak private information.
We want to offer users better oversight into the activity of documents in their CryptDrives, both to make it easier to quickly join editing sessions with friends, as well as to make it noticeable when access to a document has leaked outside of its intended audience.

## The hard part

Different groups have different levels of trust among their members.
It's difficult to build these features in a manner that's fast to use with friends while still preventing your boss from spying on you.
We're committed to thinking through all of these cases to keep our users safe, and to acting on users concerns if we don't get it right the first time.

We're excited to begin this project and grateful to everyone supporting our efforts, financially or otherwise.
_Teams_ is the first grant we've received _explicitly_ for the development of CryptPad, and we couldn't have gotten here without help.
As always, if you have ideas, concerns, or questions feel free to [contact us](https://cryptpad.fr/contact.html).

