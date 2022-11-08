---
title: One year of biweekly releases
date: 2018-02-23 14:37:15
author: Aaron MacSween
tags:
- release
- security
- roadmap
summary: Approximately one year ago, we published an article about our intention to follow a biweekly release schedule. Since then, we've thought of every second Tuesday as release day.
---

Approximately one year ago, we published an article about our intention to follow a [biweekly release schedule](/2017/02/24/Announcing-biweekly-releases/).
Since then, we've thought of every second Tuesday as _release day_.
Starting with [the letter A](https://github.com/xwiki-labs/cryptpad/releases/tag/1.0.0) on February 21st, 2017 and ending with [the letter Z](https://github.com/xwiki-labs/cryptpad/releases/tag/1.25.0) on January 30th, 2018, we went through the whole latin alphabet.

Throughout this self-imposed regimen, we managed to meet each deadline, though on occasion we had to stay at the office later than usual.
Any time a release was more difficult than expected, we considered what went wrong and added a counter-measure to our release checklist (in CryptPad, naturally).
Each release became easier than the one before, but even so, we found there were some drawbacks to this rigid schedule.

## Changing our pace

Having a regular rhythm for our releases trained us to break up complex features into components that could be implemented within a two week period.
With that in mind, not all tasks fit neatly within two weeks, and those larger tasks have had a tendency to get pushed to the next release.
So, now that we've finished one full year of releases, we've started to look more closely at those larger features which we've inadvertently neglected.
The tendency to procrastinate on especially difficult features is just another challenge to approach, but it's been one which is somewhat more difficult to summarize within a _to do_ list.

As of CryptPad v1.26.0, we're no longer following the strict biweekly schedule.
To be clear, this doesn't mean we're slowing down development.
We're still _working on CryptPad consistently_.
We still plan to _deliver features to users_ as soon as they are stable.
We still plan to _deploy on Tuesdays_, since it's as early in the week as possible without falling on a Monday and deploying on a Friday is a _terrible idea_.

<img src="/images/iamdevloper_deploy_on_friday.jpeg" alt="Should I release on a Friday?" style="width:50%;" />

Some releases might happen in a single week.
Others might take stretch to three weeks or a full month, but we'll do our best not to take any longer than that.
We try to be as transparent as possible with our plans, and so users should expect each release to also specify the projected date for the following release.

## What's coming next...

In the last year, we tried to find a balance between improving user security through the use of our [sandboxing techniques](2017/08/30/CryptPad-s-new-Secure-Cross-Domain-Iframe/), and implementing the productivity features necessary for people to consider the security improvements an _added bonus_ rather than an impractical ideology.
The core of our philosophy is that _security_ and _ease of use_ must be packaged together in order for tools like CryptPad to benefit users.

While CryptPad is considerably more than a _proof-of-concept_, we don't consider it anywhere close to being finished.
As heavy users of CryptPad ourselves, we are aware of its rough edges.
Our community has been very supportive with our continued development, though, so we're excited to be able to improve the following areas!

### Sharing

We spend a lot of time passing links between each other when collaborating on a project.
In order to do so _privately_, the sender and the receiver must both use an encrypted messenger, or else the message could be intercepted by a malicious third-party.
The necessity of having to use a second tool makes it so that CryptPad must always be used as _part of the solution_, rather than solving a user's problem outright.

We'd like to approach this problem with two improvements:

1. integrate our existing encrypted messenger better with the rest of CryptPad's functionality (as per [this issue](https://github.com/xwiki-labs/cryptpad/issues/79))
2. develop a method of sharing entire folder structures from a users drive, so that sharing can scale to support large-scale projects, a feature we call _Workgroups_

### Layered protection

Even if the link for a pad is shared securely, there is the possibility that somebody discovers that link through other (possibly malicious) means.
We're interested in developing CryptPad's basic two-tier permission system (edit/view) to address such concerns.
This could be accomplished in very different ways:

* add the ability to protect a pad with a password, so that anyone who finds the link must also know a secret value in order to retrieve the pad's history from the server
* add the ability to encrypt messages such that only a designated set of users can decrypt them using public-key cryptography

So far CryptPad only features a very limited set of cryptographic techniques.
Going forward, we hope to find ways to implement a more granular permission system which does not rely on the server behaving correctly.
Some of these features are more in the realm of _applied-cryptography research_ than _web application development_, so it's very likely they'll be implemented later, but we're excited about them nevertheless.

### Increased trustworthiness

Even though CryptPad performs its encryption in your browser, there is always the possibility that a compromised server could send malicious code to the browser which would cause it to reveal its secrets.
We're interested in developing features which would mitigate these kinds of attacks against users, through a combination of modern browser features like [sub-resource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity), and perhaps a registry of verified code signatures signed by us, the developers.

It's very difficult to make a web application secure against those responsible for delivering its source to your browser.
We're actively searching for any kind of technique for securing that makes CryptPad a more robust platform for storing your data privately, even against ourselves.

### Password usability

CryptPad's login system looks quite conventional at first glance, since it has a field for a _user-name_ and _password_ like most other web applications.
Unlike those other applications, we never learn your user-name and password.
Instead, your browser uses those fields to generate a unique secret value which you use to encrypt your drive, and accomplish a range of other tasks.
The downside of this approach is that if a user forgets their username or password, we can't help them gain access to their documents.
If we could, we'd be able to access their documents ourselves.

Fortunately, we're not the only team building web applications that use cryptography, and so there has been some research into how to improve password-based workflows without revealing secrets data to the server's host (us).
We've already received emails from users who've inadvertently locked themselves out of their accounts with no way to recover their data, and that's a situation we'd like to help people avoid, so this is a feature we're looking forward to offering.

### More applications

Lots of users have requested that we add a few more applications to CryptPad, and we've been listening!
We plan to add support for spreadsheets, and possibly other applications so that people don't have to fall back to using an unencrypted CryptPad alternative.

### Scalability

One advantage CryptPad has over other conventional collaboration platforms is that a lot of the difficult computation is run in the users' browsers, rather than on our server.
This means that we can support a very large number of clients without a noticeable decrease in performance.
Even so, the number of people using _CryptPad.fr_ and the amount they use it has increased dramatically.

Though excessive popularity is a wonderful problem to have, we'd like to avoid a situation where users have difficulty accessing our service, so improved scalability is something we'd like to work on.

## Conclusion

We haven't yet decided how long we intend for this release cycle to last, and we don't have a set list of the exact goals we'd like to accomplish.
We're taking a step back to decide where we'd like to go next.

We recognize that CryptPad's growth over the last year was driven largely by word of mouth between friends and colleagues who care about privacy.
By moving towards a more flexible schedule, we hope to make it easier to adapt to the frequent feedback we receive from people using CryptPad to help them accomplish a multitude of goals.

We're very interested in hearing what you think about this change.
Feel free to reach out to us through any of the methods listed on [our contact page](https://cryptpad.fr/contact.html).
