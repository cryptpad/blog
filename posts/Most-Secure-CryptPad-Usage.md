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
model_](https://ssd.eff.org/glossary/threat-model) which defines the
[adversarial capabilities](https://ssd.eff.org/glossary/capability).
In general, we aim to think of them to be as powerful as possible.
If we can defend against a strong
[adversary](https://ssd.eff.org/glossary/adversary),
we can also defend against a weaker one.

CryptPad is a web application: you visit the website of your instance (e.g.
<https://cryptpad.fr>) and automatically download the client code that will be
executed locally on your computer.
If you received bogus code from this server, you cannot establish any security,
as this bogus code may, e.g., send all your documents in plaintext to the
server.
Hence, you must trust the server to not run any _active_
[attacks](https://ssd.eff.org/glossary/attack) (i.e., run
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

* **Security:** An adversary cannot read or modify your documents, your
  messages, or the teams your belonging to.
* **Privacy:** An adversary cannot link your activity to other profiles, your
  name or to any of your sensitive data.

CryptPad aims to give you both.
However, as any other website you're visiting, the server can see your
[IP address](https://ssd.eff.org/glossary/ip-address) and your ["user
agent"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
(browser and [operating system](https://ssd.eff.org/glossary/operating-system)).

### 🔑 Encryption

One of the key features of CryptPad is [end-to-end
encryption](https://ssd.eff.org/glossary/end-to-end-encryption).
Let us give you a rough idea of what encryption is and how we use it in
CryptPad.

There are three main building blocks:

1. **Symmetric Encryption** works similar to a box with a lock: We can put
   something into the box and lock the box by key (encryption).
   Only someone with the key can unlock the box and access the content
   (decryption) and modify it.
   Since we use the same key to lock and unlock the box, we call this scheme
   _symmetric_.
   We can further make copies of the key and distribute it to people whom we
   trust, so that they can all lock and unlock the box.
   <p style="text-align: center;">
   <img title="Box with lock" src="https://unsplash.com/photos/i1ZRcrzRX7w/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcxNjk4MjU2&force=true&w=640" width=400>
   </p>
2. **Asymmetric Encryption** differs from symmetric encryption in the way that
   we use a different key for encryption (this is the _public key_) and
   decryption (the _private key_).
   You can imagine asymmetric encryption as a special lock on your house's door:
   by distributing the public key, everyone is able to lock the door,
   but only you hold the private key to unlock the house and open it.
   <p style="text-align: center;">
   <img title="Door with lock" src="https://unsplash.com/photos/aBKo5VHJzSA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcxNjk4Njk4&force=true&w=640
   " width=400>
   </p>
3. **Digital Signatures** are closely related to physical seals: Only the
   persons in hold of the seal (which we call the _signing key_) can sign, but
   all other people can verify the auhenticity of a document.
   Digital signatures make it further impossible to modify sealead content
   without the readers notifying it.
   <p style="text-align: center;">
   <img title="Signature" src="https://unsplash.com/photos/pegxjW_1YOU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fHNpZ25hdHVyZXxlbnwwfHx8fDE2NzE2NzA3ODQ&force=true&w=640" width=400>
   </p>

## 🧗The Basics

We outline some basic security measurements.

* CryptPad is [open source](https://ssd.eff.org/glossary/open-source-software)
  software and as such there are [various
  instances](https://cryptpad.org/instances/) running it. While we host the
  [flagship instance](https://cryptpad.fr) you might choose a different one
  depending, e.g., on the jurisdication.
* Ensure that you are connecting to the CryptPad instance over
  [HTTPS](https://ssd.eff.org/module/what-should-i-know-about-encryption#transport-layer-encryption-example-https).
* All security mechanisms are only as strong as your password is.
  If your password is easy guessable, attackers can get full access to all your
  data stored on CryptPad.
  We recommend you to either generate a random password using a [password
  manager](https://ssd.eff.org/module/animated-overview-using-password-managers-stay-safe-online) or to [choose
  mulitple words](https://www.eff.org/dice) in case the password needs to be
  memorizable.
  Use this password only for CryptPad to avoid other services leaking it.
* Log out of CryptPad after each session to require the password to
  access your data on CryptPad. Otherwise, anybody with access to your device
  can also access your data on CryptPad.

## 📄 Documents

* Introduction about CryptPad encryption
* Cryptpad sends the keys to the documents (view or edit depending on what you choose) as part of the link, so it is only as safe as the communication channels used to send these links. If you consider a channel to be unsafe, or if it is publicly accessible, you may want to isolate some some of your documents from it. I have read bad things about Telegram but it may be necessary to reach people. If that is the case you could, for example, limit the sending of edit links to Signal chats with disapearing messages.

### 💨 Self-Destruction


## 🧑 Contacts

* Once someone is your contact on CryptPad, the safest way to share content with them is to use the Contact tab in the Share menu. This way no link is exposed outside of CryptPad's end-to-end encryption. They are then notified via the bell in the toolbar.


* Note that usernames are not unique on CryptPad, we identify people by the combination of username + password. Depending on context, it may be wise to verify contact request through another channel.

## 🧑‍🤝‍🧑 Teams
* Make sure you or the team is set as "owner" when you create documents, this will give you full control including to destroy a document if it contains sensitive information and the link escapes your control.

* Links are not revokable, but you can shut down access to a document using the Access List feature.

## 🕵️ Anonymity

* Use Tor
* Use burner account / use no account

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
