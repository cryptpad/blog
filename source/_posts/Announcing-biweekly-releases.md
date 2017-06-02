---
title: Announcing biweekly releases
date: 2017-02-24 16:26:03
author: Aaron MacSween
tags:
  - Release
---

When I joined the research team at [XWiki](http://www.xwiki.com/en/team/) a little over a year ago, CryptPad was very much an experiment.
We had ideas of what we wanted to accomplish, but we didn't know whether it would work at all, let alone how we were going to get there.

We've come a long way since then.
Having proven that _zero knowledge, real time collaborative editing_ in the browser was possible, we've been thinking about an even more difficult task:

> How do we make this something that _anybody_ can use?

## How we've gotten here

We've built CryptPad from a number of small pieces.
In some cases, we were lucky enough to find existing software libraries which solved our problems.
We love when this happens because it keeps us from having to reinvent the wheel, leaving more time for unsolved problems.

When you try to build something that nobody has built before, however, you run into problems that nobody else cares about.
We've had to build a lot of our own components, and some of them have been incredibly complicated.

Some bugs only become obvious under very odd circumstances, when users with different browsers do very specific sequences or combinations of actions.
Our growing userbase has been critical in helping us to identify these kinds of issues, and things have been improving steadily.

## What we've learned

Our longest delays have come from working on tough problems that managed to get tangled up with smaller bug fixes, which kept them from reaching our users.
At the end of 2016, however, most of these big, complicated issues were coming to a close.
Our team took some much-needed vacation time, and upon returning we started working to release and deploy a tagged version of our codebase.

Our newest features went live to [CryptPad.fr](https://cryptpad.fr) on Tuesday, the 14th of February.
Some of them are big enough that we'll probably dedicate entire blog posts to them, but the release notes are [on GitHub](https://github.com/xwiki-labs/cryptpad/tree/1.0.0).

## Our new release policy

In the interest of getting feedback from our users more quickly, we've decided to adopt a two week release cycle.
We're going to focus on delivering features that directly improve your experience.

The live site will run code from our latest _master_ branch, while the upcoming release will be on the [staging](https://github.com/xwiki-labs/cryptpad/tree/staging) branch.

Each release will come with a set of notes detailing what we did, and known issues that didn't quite make it into that version.
We'll work on getting those issues fixed in the following cycle.

Whenever we deploy these big updates, we'll announce when we expect the next one to arrive.
Since we started on a Tuesday, we expect to deploy again on Tuesday, February the 28th, 2017.

## Codenamed releases

Since it's difficult to remember versions of the software if they have names like `1.0.0`, we've decided to give each one a more memorable codename.
With there being 26 letters in the Latin alphabet, and 26 two week releases in the year, we started looking for alphabetical lists from which we could choose names.
We didn't look for very long until we thought of _Cryptids_...

> _an animal whose existence or survival is disputed or unsubstantiated, such as the yeti_

We quickly settled on picking a name from this list every two weeks, starting with the letter A, and proceding through the alphabet.
For version `1.0.0`, we went with [Agogwe](https://en.wikipedia.org/wiki/Agogwe).

There won't necessarily be much significance to the name we choose, but we hope that nobody will worry if we choose a particularly frightening cryptid for a given release.
Some of the code is bound to be difficult and scary to write, but we want your experience to be _as easy as possible_.

As always, if you have any feedback you'd like to share, we want to hear it!
[Contact us](https://cryptpad.fr/contact.html) and let us know how you use Cryptpad.

If you aren't using CryptPad yet, give it a try at [CryptPad.fr](https://cryptpad.fr)!

