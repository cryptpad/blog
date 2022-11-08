---
title: Signing CryptPad
date: 2018-06-15 12:07:05
author: Caleb James DeLisle
tags:
- signing
- subresource integrity
- chain of trust
summary: CryptPad was designed with a view that privacy should be default and cryptography should be invisible. In order to do this, we made use of the web-app model so people could just go to cryptpad.fr and immediately begin using the app, no installation necessary. However, this model has a known flaw...
---

CryptPad was designed with a view that privacy should be default and cryptography should be invisible. In order to do this, we made use of the web-app model so people could just go to cryptpad.fr and immediately begin using the app, no installation necessary. However, this model has a known flaw, the server can decide what client-side code it will send to any given user, allowing a compromized server to serve code with a back-door vulnerability.

Recently, I did an experiment to make CryptPad more secure against these types of attacks by signing the code. CryptPad is a unique webapp, even without considering the encryption aspect. There is no build system, the code we write is exactly the same as what your web browser runs. All of the CryptPad html, javascript and resources are static files which are served by a plain old web server. The data persistance is managed by an API server which the web browser communicates with using an HTML5 WebSocket. Finally, in order to add a layer of security against possible Cross Site Scripting attacks, CryptPad makes use of a [cross domain iframe](https://blog.cryptpad.fr/2017/08/30/CryptPad-s-new-Secure-Cross-Domain-Iframe/), protecting your encryption keys from the majority of the CryptPad code in the same way that your online bank is protected from that sketchy porn site open in another tab.

Since CryptPad has no build system, there are many small javascript files which must be loaded. To do this, CryptPad uses [RequireJS](http://requirejs.org/). While many small files are generally considered to be bad for website performance, RequireJS uses the HTML5 [async attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) to tell the browser not to block loading of other things while waiting for the scripts to load. Secondly, RequireJS also allows version numbers to be added to the script URLs which allows us to cache almost everything in the browser. Finally, we use the [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) protocol to serve resources because it allows multiple requests to be sent at the same time, while HTTP/2 is incompatible with WebSocket, this is ok because the web-app is served from a different server from the API server.

## Chain of Trust

Just one corrupted script is enough to render the security of an entire web-app useless, so in CryptPad we needed the signing to cover all javascript files. Fortunately there is a new HTML5 technology called [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) which allows putting the hash of a script in a script tag attribute and makes the browser verify the script before executing it.

Insecure, some.website can serve you anything:

```
<script
  src="https://some.website/path/to/script.js"
></script>
```

Secure, only one possible script can be sent by some.website or else the web browser will throw an error and refuse to run the script:

```
<script
  src="https://some.website/path/to/script.js"
  integrity="sha256-G1KwaJYUEDsA1SD/6Wt4z0laskKzIwgqgs5cYH0CW/o="
></script>
```

So rather than signing every script, I only needed to make a list of hashes of every script, and sign that. What I needed was a way to generate a *manifest*, and so I developed a small program which could hash all of the javascript files in CryptPad and generate a manifest file. The content of the manifest looks something like this:

```
"files": {
  "assert": {
    "frame": {
      "frame.js": "BrN2JNnK4QJCztw3PyRRPAsEwSq5lczTBrRkzdLAFow=",
      "respond.js": "yO0KFMHiCdE1fXFWPVaFB+Mmh37OCl/UNPpXrYtWF7A="
    },
    "main.js": "ABf3uhmYVHWaHX6vhK8K2jAUY8XqRjjMJ2FqXVGLZE0=",
    "translations": {
      "main.js": "50Ami2eghyXcGKGYTaDK1vUeEuAEG7kcpvUoCKbUaUU="
```

It contains a JSON tree which mirrors the files that are part of the CryptPad codebase and the hashes of the files for the Subresource Integrity check. Once the `manifest.js` file was created, then I needed a javascript file which would load and verify it. Since the manifest is different every time a new release is made, the verification of the manifest needed to be via *signing*. The manifest hash was signed along with a version number and those were placed in a file called `version.txt` and `version.txt` is loaded using a file called `sboot.js`. The hash of `sboot.js` was included directly into the html files which are cached, so `sboot.js` can never be changed at all.

## Loading process

### index.html
First, the browser loads the html file, the html file contains a single script tag loading `sboot.js`

```
<script
  async
  data-bootload="/customize/template.js"
  src="/common/sboot.js?ver=8IaxCUqjpzoP7AEPEk%2B%2BVQ%2BBk83mRdXx4dK%2BXvSNPcI%3D"
  integrity="sha256-8IaxCUqjpzoP7AEPEk++VQ+Bk83mRdXx4dK+XvSNPcI="
></script>
```

There is a custom attribute called `data-bootload` which indicates which javascript file should be loaded for that `html` file.

### sboot.js

When `sboot.js` gets loaded, it downloads and then verifies `version.txt` which is a signed message containing the CryptPad version number and the hash of `manifest.js`. The content that is signed looks something like this:

```
[85,"h+tOXVmYBWMmiVDylXvnRq28LWRVs6xy+goBwNEELZk="]
```

The version number (85) is not the CryptPad version but rather an auto-incrementing number which is stored in the browser localStorage and prevents the server from downgrading the version of CryptPad. After the signature/version check completes successfully, `sboot.js` loads `manifest.js` like the following:

```
<script
  async
  src="/customize/manifest.js?ver=h%2BtOXVmYBWMmiVDylXvnRq28LWRVs6xy%2BgoBwNEELZk%3D"
  integrity="sha256-h+tOXVmYBWMmiVDylXvnRq28LWRVs6xy+goBwNEELZk="
></script>
```

You will notice that the hash is used also in the URL of `manifest.js`, this allows the server to signal that the files are immutable and can be cached by the browser forever which makes CryptPad load faster next time.

After `manifest.js` loads, `sboot.js` finds the hash of `require.js` in the manifest and then manually loads `require.js` in the same way. Once `require.js` is loaded, `sboot.js` configures require to use the hashes from the manifest for every file it loads, then it uses require to load `boot2.js`.

### boot2.js

This file is not needed for security, but unlike `sboot.js`, it can easily be changed from release to release and it contains any code which should be run before the main CryptPad code. Things such as additional requirejs configuration and shims for missing browser APIs are placed here. After `boot2.js` is complete, it reads the `data-bootload` attribute from the html file and invokes require to load that.

## Further development

While this system provides excellent security, it is still not perfect. If the root html file is compromized then it can alter the chain of trust, or scrap it completely. With a very long cache header, the browser will store the html file essentially forever, but if the user triggers a hard reload with the F5 key, then the cache will be flushed.

The root html file can be signed using pgp and then verified using the [signed pages](https://github.com/tasn/webext-signed-pages) chrome extension. But signed pages is not able to prevent the loading of the website even if the signature is invalid and it only takes 1 second for the keys in localStorage to be leaked.

If the root html file was *generated* by the server each load, it could contain a secret key which is used to encrypt the keys in the localStorage, thus rendering them unusable if the html file is re-loaded, and meaning that the user must re-enter their password and would then be able to see that the signature on the html file is invalid, however unless signed pages can ignore the key inside of the html file when verifying the signature, it would have to be re-signed every time, pushing the pgp key onto the server, which we are worried about being compromized.

There are also a number of configuration files in the CryptPad project which are in fact javascript files and would thus be signed by the release manager, preventing anyone hosting CryptPad from changing them so it may be a long time before this project is merged into CryptPad mainline, however it is available and you can experiment with it by checking out the [code-integrity](https://github.com/xwiki-labs/cryptpad/tree/code-integrity) branch of the CryptPad project.