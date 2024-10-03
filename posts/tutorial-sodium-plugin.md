---
title: Changing the cryptography library in CryptPad server
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

![Cover image: Salt mine of Turda, Romania. ](/images/salt-mine-turda.jpg "Salt mine of Turda")
<figcaption>
Salt mine of Turda. From <a href="https://commons.wikimedia.org/wiki/File:Roumanie_Mine_de_sel_de_Turda_2019_5.jpg">Wikimedia Commons</a>
under CC0 license.
</figcaption>
</figure>

⚠️ This tutorial is intended for system administrators. However, the introduction
can be of interest to anyone.

When running CryptPad on your server, you may notice that under load, some
CryptPad processes are consuming a lot of computational resources. So far, there
is nothing surprising. However, doing a bit of profiling about these
computations, we noticed that the heavy lifting was done by signature
verifications. The reason being that the server proceeds with data validation
before storage to avoid being spammed by false patches. Even if they won’t
affect the final state of the file as they won’t be displayed with an invalid
signature, they still need to be processed by the clients. It can thus lead to
_denial of service_ attacks.

Well, that’s good, but it doesn’t help us with our load issue.
However, looking at how CryptPad is designed, we notice that both the server and
the client are written in _javascript_.
This allows us to share common libraries between the server and the client and
thus guaranteeing the same behaviour for both on those fundamental building
blocks.
This is also true for the cryptographic library that is used to perform those
operations.
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
to show how to do it.

## ⚙️ Installing the plugin

1. To install the plugin, the first step is to download it at the right place. From your CryptPad installation directory:

```bash
git clone https://github.com/cryptpad/cryptpad-sodium-plugin.git lib/plugins/sodium
```

2. Then, install its dependencies:


```bash
cd lib/plugins/sodium
npm ci
```

3. Restart your CryptPad server.

And that’s it, your server should use its native implementation of libsodium now.
