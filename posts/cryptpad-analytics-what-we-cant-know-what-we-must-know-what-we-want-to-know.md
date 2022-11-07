---
title: CryptPad Analytics & Privacy - What we can't know, what we must know, what
  we want to know
date: 2017-07-07 13:41:02
author: Caleb James DeLisle
tags:
- analytics
- data
- privacy
cover: /images/Analytics-padtypes.png
---

CryptPad is a Zero Knowledge cloud application, this means we have designed it such
that we do not have any access to the content which is hosted on our server.
However, there are other things which we do collect and it is important that
privacy-minded users understand what we are collecting and why. There are four
types of information:

* What we can't know: This is data that CryptPad app encrypts so we will never have
access to it
* What we must see but don't collect: This is information which we don't bother
to store but because of how the technology works, we necessarily have access to it.
* What we must know: This is metadata which we cannot help but see because of the
way the technology works
* What we want to know: This is information which we really want to know in order
to make CryptPad better every day

We want to know everything about *people*, we want to know how *people* use CryptPad,
why *people* use CryptPad and how we can make their experience easier. However, we
don't want to know anything at all about *you*.

This poses a challenge because we want to collect as much aggregate information as we
can in order to make a great web service, but we don't want to collect data that can
be *linked* in order to tell a story about you.

## What we can't know

There are a few things which the Zero Knowledge design of CryptPad does not allow
us to know at all. These include (obviously) your password and the content of your
pads, but less obviously, the titles of your pads, the names of the contributors and
your username (you can even have the same username as someone else on the system, we
won't know). The types of your pads are also unknown to us though we could make
educated guesses by looking at the encrypted data.

*It is our promise to you that we will never collect this information.*

## What we could know but don't bother to collect

There are also some things which we don't really want to know but we cannot avoid
seeing it anyway. This includes most importantly the IP addresses of people who
edited a specific pad. Technically we know your
[IP address](https://en.wikipedia.org/wiki/IP_address) because it's how you
communicate with our server, but most of the actual operations are done using
commands sent down a [WebSocket](https://en.wikipedia.org/wiki/WebSocket).
Once the WebSocket is established, we assign you a random ID and this is how
you are referenced, what appears in our server logs looks like this:

```
198.167.222.70 - - [06/Jul/2017:20:47:45 +0200] "GET /pad/ HTTP/1.1"
304 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36
(KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36" "-"
```

Notice there is no pad ID in there, the pad ID is not in the URL so it doesn't go
in the server logs by default.

Compare this with EtherPad:

```
  IP Address                                             Pad ID
198.167.222.70 - - [06/Jul/2017:11:54:37 -0700] "GET /p/UNWnpczTkq HTTP/1.1"
200 8920 "https://pad.meshwith.me/" "Mozilla/5.0 (Macintosh; Intel Mac OS X
10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109
Safari/537.36"
```

*You cannot verify that we're not collecting this so best assume that we are.*

## What we must know

There are some things which we need to know in order for CryptPad to function
properly, we need to know which pads are in your drive in order to impose
storage limits on logged-in users and to expire pads which nobody cares about.
However, we don't know much about who you are. Since we don't know your username,
to us you are identified by a public signing key, something like this:

`YIBzjPr3beuGgfHNglGfo3xq-dquxsj4Bst-ze7mL9A`

We know that `YIBzjPr3beuGgfHNglGfo3xq-dquxsj4Bst-ze7mL9A` has 392 MB of data in
their CryptDrive including a pad of some type which has the ID
`fe382219b10c0396de63d2bab7942390` and an uploaded which we know as
`ff2fdf9bb99ecc89d29d780780de10efdac14ed15e93b235`. One of these pads that they
have is actually their drive itself, but we don't strictly know which one (again,
we can take guesses based on the size of the patches). You can find out what your
signing key is by looking at in your [settings page](https://cryptpad.fr/settings).

We also know when each pad was last accessed so that we can know to delete pads
which are not in anybody's CryptDrive and have not been opened in a long time.

### Why we can't avoid collecting IP addresses

Being able to know how many *different* people are using CryptPad is very important
to us. One rather rude person decided to try to crash our server by creating 647,533
pads. They didn't put much thought into their attack because what they were doing
was not actually creating pads, but it illustrates the problem that if we don't
know how many *different* people are using the server, we don't have any idea
whether we are popular or under attack. Worse, we don't know what features have
widespread support vs. which ones are only popular with a few prolific users.

One obvious thought is to simply run the IP addresses through a hash function the
way we traditionally hash passwords. However this sadly cannot work because there
are only 4.2 billion IPv4 addresses and constructing a
[rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) to get back the
original IP addresses would take only about 1 day of computer time. So in the end
we simply log the IP addresses and don't worry about it.

### What a pad looks like to us

A pad is stored as a file which represents a sequence of encrypted *patches*.
These patches change the content of the pad from nothing to whatever it becomes in
the end. A typical message looks something like this:
```
[0,"69d46337f826c0ecd881be59c119a527","MSG","fe382219b10c0396de63d2bab7942390","51Q...."]
```
It starts with a zero and then your temporary random ID, then it contains the word
MSG and the ID of the pad which it is sent to, this format is exactly the same as
what is sent on the wire. Finally it contains the encrypted patch which tells us
essentially nothing except it gives us a rough idea of just how big the change was.

Occasionally the client will send a *checkpoint*, this is a special patch which
removes all of the content and then puts it all back again. To us, a checkpoint
looks the same as anything else, it is a big ball of encrypted data, except in this
case it is flagged as a checkpoint so the server knows it can send only part of
the history of the pad instead of all of it. However, they do give us a good idea
of how big the pad actually is at that time.

## What we collect because we want to know

What we really want to understand is your *experience* with CryptPad and how we can
make that experience better. So therefore we collect quite a number of data-points
about where people click and what their browser supports. For example we collect
the dimensions of your browser. Not because we want to know who you are but because
we want to know that types of browsers we need to support.

```
198.167.222.70 - - [06/Jul/2017:21:26:15 +0200]
"HEAD /common/feedback.html?DIMENSIONS:752x1440=1499369175085 HTTP/1.1" 200 0
"https://cryptpad.fr/settings/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36" "-"
```

You can see an exhaustive list of things that we collect by checking out the
[feedback functionality](https://github.com/xwiki-labs/cryptpad/search?p=2&q=Cryptpad.feedback&type=&utf8=%E2%9C%93) in the CryptPad source code but
as of the time of this writing, we are collecting feedback about the following
things (usually we just collect the fact that an event occurred, not more).

* Clicking "upgrade account"
* Clicking "support cryptpad"
* Presentation: clicking on "print slides"
* Registering and logging in
* Opening your recent pads as an anonymous user
* Clicking any CKEditor button such as "bold" or "italic"
* Displaying the drive as icons or as a list
* Creating and using templates
* Showing and hiding the userlist or CKEditor menu bar
* Whether your browser is missing certain important features like
[Proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy),
[isArray](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
or [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage)
* Which type of pad you are using
* The dimensions of your browser window
* When you have changed your display name
* Whether you have migrated your CryptDrive from the legacy format

If you are worried about what we might do with this data, you can disable
feedback collection in your [settings page](https://cryptpad.fr/settings/). But
keep in mind that if you disable it we cannot help but know, because your IP
address will be in the tiny minority of addresses which access the site but don't
send feedback messages.

## What we can learn from the data


### 1. People mostly use CryptPad to make a plain old pad
But the code/markdown pad and the CryptDrive are catching up.
![Unique IPs per pad type](/images/Analytics-padtypes.png)

### 2. Activity has been on a very slow rise but with a few spikes
This chart shows unique IPs per day hitting CryptPad. You can things are relatively
flat over time except for a big day in June and then some increased activity in July
after the UI improvements were rolled out.
![Unique IPs per day](/images/Analytics-uniques.png)

### 3. Browser window dimensions are all over the map
This chart shows bubbles which are bigger depending on how many different IPs
report the same browser window dimensions. Tragically it seems that there is no
way to predict what aspect ratio a device using CryptPad is going to have.
![Browser window dimensions](/images/Analytics-browserdimensions.png)

### 4. Lots of pads are made and then abandoned
The first chart shows in blue the number of pads created each day and the number
of pads which become "abandoned" (have not been touched in 2 weeks). This says
that perhaps pads are considered ephemeral and not to be used for the long term.
![Created vs. abandoned pads](/images/Analytics-createdabandoned.png)

Here we can see the evolution of pads which have been accessed within the last
day the last week and the last month. There is slow but steady growth in the
pads active in the past month.
![Number of active pads](/images/Analytics-activepads.png)

### 5. People use CryptPad for a while, then leave
We measured 15,000 IP addresses which came to CryptPad just to look at one pad and
then left, but of the 13,000 who stayed longer than that we analyzed the time when
they first arrived and the time when they made their last visit. About 630 IP
addressses have been continually using CryptPad for all 45 days.
![Number of IPs continuing to access CryptPad](/images/Analytics-peopleleave.png)
We want to make CryptPad a useful tool for helping people get organized and make
their projects succeed. So whenever people decide that CryptPad is not the right
answer for them, we care about what went wrong and how we can make it better.

## How we analyze this data

We do all of our analysis ourselves, and we don't share any of this data with Google
or other data companies. We're thankful to
[Kibana/ElasticSearch](https://www.elastic.co/products/kibana) and
[LogStash](https://www.elastic.co/products/logstash) for making it possible to do
in depth analysis on our own computers without resorting to a cloud service.
