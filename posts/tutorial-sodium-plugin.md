---
title: Changing the cryptography library in your CryptPad server
date: 2024-10-03
author: "Fabrice Mouhartem"
cover: /images/salt-mine-turda.jpg
summary: A tutorial to explain why and how to change the backend cryptography library on your cryptpad server
tags:
- tutorials
- administration
- configuration
- performance
- security
---

<figure>

![Cover image: Salt mine of Turda, Romania.](/images/salt-mine-turda.jpg "Cover Image: Salt mine of Turda")
<figcaption>
Salt mine of Turda, Romania. From <a href="https://commons.wikimedia.org/wiki/File:Roumanie_Mine_de_sel_de_Turda_2019_5.jpg">Wikimedia Commons</a>
under CC0 license.
</figcaption>
</figure>

⚠️ This tutorial is intended for system administrators. However, the introduction
can be of interest to anyone who is curious about the inner working of CryptPad.

## 🧑‍🏫 Introduction

When running CryptPad on your server, you may notice that under load, some
CryptPad processes are consuming a lot of computational resources. So far, there
is nothing surprising. However, doing a bit of profiling about these
computations, we noticed that the heavy lifting was done by signature
verifications. The reason being that the server proceeds with data validation
before storage to avoid being spammed by false patches. Even if they won’t
affect the final state of the file as they won’t be displayed with an invalid
signature, they still need to be processed by the clients, potentially allowing
to _denial of service_ attacks.

Well, that’s good, but it doesn’t help us with our load issue.
However, looking at how CryptPad is designed, we remark that both the server and
the client are written in _javascript_.
This allows us to share common libraries between the server and the client·
Thus it guarantees the same behaviour for both for fundamental building blocks.
It also stands true for the cryptographic library that is used to perform those
essential operations for CryptPad.
[TweetNaCl](https://github.com/dchest/tweetnacl-js) has been picked as a
lightweight full-_javascript_ library to ensure browser-portability for the
client.
However, this portability constraint is not relevant for servers, and the
lack of low-level optimisation is actually what cause of the bottleneck we
described previously.

To keep the codebase legible, and as it’s not a problem for small instances, we
decided to address this problem using CryptPad’s plugin system. Then providing
sane defaults for reasonable-sized instances, while making possible to easily
swap the cryptographic library used by the server. The goal of this tutorial is
to show how to do it in practice.

## 🔩 Installing the plugin

1. To install the plugin, the first step is to download it at the right place.
From your CryptPad installation directory:

```bash
cd lib/plugins
git clone https://github.com/cryptpad/cryptpad-sodium-plugin.git sodium
```

2. Then, install its dependencies:

```bash
cd sodium/
npm ci
```

3. Restart your CryptPad server.

And that’s it, your server should use its native implementation of libsodium now.

## 🔧 Use another library?

For signatures, CryptPad uses the EdDSA algorithm over the
[`ed25519`](https://en.wikipedia.org/wiki/EdDSA#Ed25519) curve.
If you want to run another implementation of it, you can make a copy of our
[`cryptpad-sodium-plugin`](https://github.com/cryptpad/cryptpad-sodium-plugin/tree/main)
plugin and edit the
[`index.js`](https://github.com/cryptpad/cryptpad-sodium-plugin/blob/main/index.js)
file to provide another implementation for the `open` (combined mode
verification) and `detachedVerify` (detached mode verification) functions.

Please note that if you do that and run it in production, under the
[AGPL-3](https://www.gnu.org/licenses/agpl-3.0.en.html) licence, you are to make
the source code of the plugin available.
Feel free to contact us at <contact@cryptpad.org> if you want us to advertise
your back-end crypto plugin as a community contribution 🙂
