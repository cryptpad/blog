---
title: The Most Secure Way To Use CryptPad
date: 2022-12-24 # TODO
author: Theo von Arx
lang: en
summary: We show you in which scenario CryptPad is secure, and give you ideas for concrete actions for a safe CryptPad usage.
cover: /images/swallow_key.png
tags:
- security
- tutorials
- privacy
---

You're looking for a privacy-focused collaboration tool?
Well, you already found it!
But what does privacy in this context actually mean?
And how is it technically enforced?
Are there any additional precautiousness needed for an extra-safe usage of
CryptPad?

In this blog post we will answer these and other questions.
We will show you in which scenario CryptPad is secure, and give you ideas for
concrete actions for a safe CryptPad usage.
While we do the most possible to make CryptPad secure, the security also depends
on how you use it.

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

The first assumption about the adversarial capabilities follows directly from
CryptPad's architecture.
CryptPad is a web application: you visit the website of your
[instance](https://docs.cryptpad.org/en/user_guide/instances.html) (e.g.
<https://cryptpad.fr>) and automatically download the client code that will be
executed locally on your computer.
If you receive bogus code from this server, you cannot establish any security,
as this bogus code may, e.g., send all your documents in plaintext to the
server.
Hence, you must trust the server to not run any _active_
[attacks](https://ssd.eff.org/glossary/attack) (i.e., not to run
a modified CryptPad server software).

We nevertheless defend against a _honest-but-curious_ (i.e., passive) server.
The section assumption is thus that the server plays according to the
rules, but could try to interfere sensitive data by simply sniffing on all
received data.
This scenario includes the possibility that a third-party gets access to the
server and can see all data and logs.
CryptPad already defended against such an adversary in the past when
[an instance server was seized by the police](https://newsrnd.com/tech/2022-06-24-data-confiscated-from-pirate-party-servers.SJxeH5I79q.html).
We therefore consider this scenario to be highly realistic.

Lastly, we assume the attackers to have network capability. This would be the case
for, e.g., the system administrator managing the network in your office, your [internet service
provider](https://en.wikipedia.org/wiki/Internet_service_provider), or secret
services. The attackers may even use active network capabilities, that is they
can sniff your web traffic, and also replay, drop or modify data sent over the
network.

<!-- ### 🔎 Security and Privacy -->

<!-- The notions of _security_ and _privacy_ are often mixed, however they do not -->
<!-- refer to the same concept. -->
<!-- In the context of CryptPad, the two notions can be differentiated as follows: -->

<!-- * **Security:** An adversary cannot read or modify your documents, your -->
<!--   messages, or the teams your belonging to. -->
<!-- * **Privacy:** An adversary cannot link your activity to other profiles, your -->
<!--   name or to any of your sensitive data. -->

<!-- CryptPad aims to give you both. -->
<!-- However, as any other website you're visiting, the server can see your -->
<!-- [IP address](https://ssd.eff.org/glossary/ip-address) and your ["user -->
<!-- agent"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) -->
<!-- (browser and [operating system](https://ssd.eff.org/glossary/operating-system)). -->

### 🔑 Encryption

One of the key features of CryptPad is [end-to-end
encryption](https://ssd.eff.org/glossary/end-to-end-encryption).
Let us give you a rough idea of what encryption is.
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

For CryptPad, we use all of these building blocks to achieve different goals.
We will explain the usage below in the section about Documents.

## 🧗 The Basics

We outline some basic measurements that allow you to significantly increase the
security of your CryptPad usage:

* CryptPad is [open source](https://ssd.eff.org/glossary/open-source-software)
  software and as such there are [various
  instances](https://cryptpad.org/instances/) running it. While we host the
  [flagship instance](https://cryptpad.fr) you might choose a different one
  depending on, e.g., the jurisdication.
* Ensure that you are connecting to the chosen CryptPad instance over
  [HTTPS](https://ssd.eff.org/module/what-should-i-know-about-encryption#transport-layer-encryption-example-https).
* All security mechanisms are only as strong as your password is.
  If your password is easily guessable, attackers can get full access to all your
  data stored on CryptPad.
  We recommend you to either generate a random password using a [password
  manager](https://ssd.eff.org/module/animated-overview-using-password-managers-stay-safe-online) or to [choose
  mulitple words](https://www.eff.org/dice) in case the password needs to be
  memorizable.
  Use this password only for CryptPad to avoid other services leaking it.
* Log out of CryptPad after each session to require the password to
  access your data on CryptPad. Otherwise, anybody with access to your device
  can also access your data on CryptPad.

## 🧑 Contacts

As we will show below, adding your peers as CryptPad contacts lets you more
easily and safely share documents.
You can moreover restrict access of a document to specific contacts and exchange
text messages with them.

The easiest way to add someone to your contacts is to [share the link to your
profile](https://docs.cryptpad.org/en/user_guide/collaboration.html#add-a-contact)
over a secure communication to your peer and request to add each other as
contacts.

⚠️  Note that usernames are not unique on CryptPad.
Depending on context, it may be wise to verify a received contact request
through another secure channel.

## 📄 Documents

CryptPad uses symmetrical encryption with a per-document secret key to make
your documents unreadable for anyone who has no access to the corresponding
keys. CryptPad also allows you to differentiate between read-only and write
access to a document. For that, anyone who wants to modify a document needs to
prove that they own the private signing key linked to the document. For this,
they sign their modifications and other people working on the same document can
verify that the modification was indeed done by an authorized person.

### ♻ Sharing
CryptPad keeps these technical details "under the hood" and provides a simple
interface to [share
documents](https://docs.cryptpad.org/en/user_guide/share_and_access.html#sharing-a-link)
via links. Such a link essentially contains the symmetric key for encryption and
decryption, for verifying signatures as well as the one for creating signatures
(in case of read/write access).


<p style="text-align: center;">
<img title="Share via link" src="https://docs.cryptpad.org/en/_images/modal-share-link.png">
</p>


⚠️ This implies that the document is only as safe as the communication channels
used to send these links.
If you consider a channel to be unsafe, or if it is publicly accessible, you
may want to isolate some of your documents from it, e.g., limit the sending
of edit links to Signal chats with disapearing messages.

Another possibility to safely share the access is to [send it over CryptPad's
mailbox system to your
contacts](https://docs.cryptpad.org/en/user_guide/share_and_access.html#sharing-with-contacts).
This way, you do not have to use a secondary (potentially insecure) communication
channel.

<p style="text-align: center;">
<img title="Share with contacts" src="https://docs.cryptpad.org/en/_images/modal-share-contacts.png">
</p>

### ⛔ Restricting Access

As CryptPad operates with static keys, the shared access is not revokable.
This means that by default anyone who was granted access will forever be able to
read (and modify) a document.
To prevent this, you can shut down access to a document using the
Access List feature.

<p style="text-align: center;">
<img title="Access List" src="https://docs.cryptpad.org/en/_images/modal-access-list.png">
</p>

This way, only the selected persons have access to the document, independently
of who has received the sharing link.

Also make sure you or your [team](https://docs.cryptpad.org/en/user_guide/collaboration.html#teams)
is set as "owner" when you create documents.
This will give you full control including the possibility to destroy a document
if it contains sensitive information or the link escapes your control.

### 🔒 Per-Document Passwords

For additional safety, you can [protect a document with a
password](https://docs.cryptpad.org/en/user_guide/share_and_access.html#access-tab).
The document is then only available if you have both, the sharing link and the
password.
This is especially useful for the case where you do not have a secure
communication channel to share the link, as you can send the link and the
password over two _distinct_ channels (e.g., text messaging and email).
This way, the attacker has to sniff on both channels at the same time which
makes it a lot more difficult.

When you share documents with your contacts directly on CryptPad, communications
are encrypted, and we assume that you want to give them access.
Therefore, the password is remembered and sent with the document when you share
it.
The recipient, or yourself, are not asked for it when opening the document.

### 💨 Self-Destruction

CryptPad allows you to make [self-destructing
documents](https://docs.cryptpad.org/en/user_guide/security.html#self-destructing-documents)
which will be destroyed either after the set expiration time or after the shared
document was opened the first time.

This feature is especially useful if you have to share sensitive data that
should not be accessible for ever.
You could, e.g., use it to share a password to a peer.

## 🕵️ Anonymity

CryptPad does only provide a weak form of anonymity and does not hide your
[IP address](https://ssd.eff.org/glossary/ip-address) or your ["user
agent"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)
(browser and [operating system](https://ssd.eff.org/glossary/operating-system)).
The server can furthermore theoretically link IP addresses of people who are often colaborating on the same documents.
Of course, we do not run these analytics for our flagship instance, but we want
you to have to trust us as little as possible.
You may want therefore use the following tools and techniques:

* The [Tor browser](https://www.torproject.org/download/) to connect to
CryptPad and hide your IP address.
* A burner account that is only used for specific high-risk actions such as
  working on a small set of documents or publishing sensitive information to
  prevent the possibility of linking IP addresses of colaborating people.
* [Tails](https://tails.boum.org/) for leaving no traces on your local device.

## 💡 Other Tools

CryptPad is designed to be a general, easy-to-use office suite.
As such it may not always fit your specific needs.
We redirect you to other tools and services that are not affiliated to CryptPad
for the following actions:

* A [password
  manager](https://ssd.eff.org/module/animated-overview-using-password-managers-stay-safe-online)
  to have control over your passwords.
* [Secure Drop](https://securedrop.org/) for whistleblowing.
* [Signal](https://signal.org/) for secure real-time messaging.

## 📚 References

About CryptPad:

* The [security section](https://docs.cryptpad.org/en/user_guide/security.html)
  in our user guide explains the use of CryptPad's security features.
* The talk ["Living on the Edge with CryptPad: privacy, distributed
  computation, and architectures of
  resilience"](https://peertube.xwiki.com/w/jAP48FTXpi9CpJnb8SSVDh) is an
  extended explanition about the concepts behind CryptPad.
* We have published a [white paper](https://cryptpad.org/TODO) describing the
  securty mechanism and the cryptography used in CryptPad. This paper is
  targeted to people who are already familiar with cryptography.

More general:
* The [surveillance self-defense guide](https://ssd.eff.org/) by the Electronic
  Frontier Foundation (EFF)

## 🙋 Questions?

We are happy to help you and answer your questions regarding this blog post.
You can reach us on [our forum](https://forum.cryptpad.org/),
[Matrix](https://matrix.to/#/#cryptpad:matrix.xwiki.com),
[Mastodon](https://fosstodon.org/@cryptpad), or
[Email](mailto:contact@cryptpad.fr).
