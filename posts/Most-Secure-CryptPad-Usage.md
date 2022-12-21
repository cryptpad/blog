---
title: The title of the post # TODO
date: 2022-12-24 # TODO
author: Theo von Arx
lang: en
summary: # TODO
cover: /images/forms_chart_timeline.png
tags:
- security
- tutorials
---

While we do the most possible to make CryptPad secure, the security depends on
how it's used.

## 🧑‍🏫 Preliminaries

### 🗺 Threat model

When speaking of security or privcay, we should always define the scenario we
are speaking of.
This scenario is the so called [_threat
model_](https://en.wikipedia.org/wiki/Threat_model) which defines the adversarial
capabilities.
In general, we aim to think of them to be as powerful as possible.
If we can defend against a strong adversary, we can also defend against a weaker
one.

CryptPad is a web application: you visit the website of your instance (e.g.
<https://cryptpad.fr>) and automatically download the client code that will be
executed locally on your computer.
If you received bogus code from this server, you cannot establish any security,
as this bogus code may, e.g., send all your documents in plaintext to the
server.
Hence, you must trust the server to not run any _active_ attacks (i.e., run
a modified CryptPad server software). We nevertheless defend against a
_honest-but-curious_ (i.e. passive) server which plays according to the
rules, but could try to inter sensitive data by simply sniffing.
This scenario includes the possibility that a third-party gets access to the
server and can see all data and logs.
This has already happened in the past when
[a server running CryptPad was seized by the police](https://newsrnd.com/tech/2022-06-24-data-confiscated-from-pirate-party-servers.SJxeH5I79q.html).

Lastly, we assume the attackers to have network capability. This would be the case
for, e.g., the system admin managing the network in your office, your [internet service
provider](https://en.wikipedia.org/wiki/Internet_service_provider), or secret
services. The attackers may even use active network capabilities, that is they
can sniff your web traffic, as well as replay, drop or modify data sent over the
network.

### 🔎 Security and Privacy

The notions of _security_ and _privacy_ are often mixed, however they do not
refer to the same concept.
In the context of CryptPad, the two notions can be differentiated as follows:

#### Security:

* An adversary cannot read or modify your documents, your messages, or the teams
  your belonging to.

#### Privacy:

* An adversary cannot link your activity to other profiles, your name or to any
  of your sensitive data.

CryptPad aims to give you both.
However, as any other website you're visiting, the server can see your [IP address](https://en.wikipedia.org/wiki/IP_address)
and your ["user
agent"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) (browser and operating system).

### 🔑 Encryption


## 🧗The Basics

- Check TLS
- Password
- If members of your organisation are on location or fear their device might get seized, advise them to log out of CryptPad after each session. Each session can also "log out everywhere" to shut down open sessions on other devices.
- Choose server you trust


## 📄 Documents
- Introduction about CryptPad encryption

- Cryptpad sends the keys to the documents (view or edit depending on what you choose) as part of the link, so it is only as safe as the communication channels used to send these links. If you consider a channel to be unsafe, or if it is publicly accessible, you may want to isolate some some of your documents from it. I have read bad things about Telegram but it may be necessary to reach people. If that is the case you could, for example, limit the sending of edit links to Signal chats with disapearing messages.

### 💨 Self-Destruction


## 🧑 Contacts

- Once someone is your contact on CryptPad, the safest way to share content with them is to use the Contact tab in the Share menu. This way no link is exposed outside of CryptPad's end-to-end encryption. They are then notified via the bell in the toolbar.


- Note that usernames are not unique on CryptPad, we identify people by the combination of username + password. Depending on context, it may be wise to verify contact request through another channel.

## 🧑‍🤝‍🧑 Teams
- Make sure you or the team is set as "owner" when you create documents, this will give you full control including to destroy a document if it contains sensitive information and the link escapes your control.

- Links are not revokable, but you can shut down access to a document using the Access List feature.

## 🕵️ Anonymity

- Use Tor
- Use burner account / use no account

## 📚 References

* The [security section](https://docs.cryptpad.org/en/user_guide/security.html)
  in our user guide explains the use of CryptPad's security features.
* The talk ["Living on the Edge with CryptPad: privacy, distributed
  computation, and architectures of
  resilience"](https://peertube.xwiki.com/w/jAP48FTXpi9CpJnb8SSVDh) is an
  extended explanition about the concepts behind CryptPad.
* We have published a [white paper](https://cryptpad.org/TODO) describing the
  securty mechanism and the cryptography used in CryptPad. This paper is
  targeted to people who are already familiar with cryptography.

## 🙋 Questions?

We are happy to help you and answer your questions regarding this blog post.
You can reach us on [our forum](https://forum.cryptpad.org/),
[Matrix](https://matrix.to/#/#cryptpad:matrix.xwiki.com),
[Mastodon](https://fosstodon.org/@cryptpad), or
[Email](mailto:contact@cryptpad.fr).
