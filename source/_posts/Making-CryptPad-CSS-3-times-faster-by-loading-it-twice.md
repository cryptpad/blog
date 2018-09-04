---
title: 'Making CryptPad CSS 3 times faster, by loading it twice'
date: 2018-07-20 12:00:59
author: Caleb James DeLisle
tags:
  - performance
  - css
---

<script src="https://cryptpad.fr/common/media-tag-nacl.min.js"></script>

In CryptPad development, we have always tried to push the limits of the technology. As you might know, we don't minify any of our javascript code and we have no build system, yet CryptPad is still faster than many similar projects which do. In recent profiling, we determined that the biggest cause of slow loading was compilng of less stylesheets.

All of the styles for CryptPad are written in [Less](http://lesscss.org/) CSS templating language and because we don't have a build system, when you load a page on CryptPad, it downloads the less compiler and runs it in your browser. When the less has been compiled the first time, it is cached in the browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so that it doesn't need to be compiled again (until next release). Unfortunately, the way we structured CryptPad Less code led to this taking a long time.

CSS by its nature is very much like object inheritence, a design pattern popular in the 1990s which has [since](https://link.springer.com/chapter/10.1007/1-85233-856-3_23) [been](https://codeburst.io/inheritance-is-evil-stop-using-it-6c4f1caf5117) [discredited](http://neethack.com/2017/04/Why-inheritance-is-bad/). In a bid to keep our styles under control, we decided to make heavy use of Less [mixins](http://lesscss.org/features/#mixins-feature). The idea was that we didn't want our CSS code to "speak until it was spoken to".

Something like the following would be very problematic if it were dumped on the global scope, but it is never output until it is called:

```
.example_header() {
    a {
        color: red;
    }
}
```


So then the code which uses it can invoke it only in the exact place where it ought to be used.

```
@include "example.less";
.cp-app-pad {
    .cp-padheader {
        .cp-padheader-left {
            .example_header();
        }
    }
}
```

If you're a CSS purist, you're probably pulling your hair out now, because *the right way* is to use html classes. The thing is, we do, but because CryptPad is made up of many different pieces of open source software, we cannot control all of the HTML and sometimes things [aren't so simple](https://github.com/xwiki-labs/cryptpad/blob/2.4.0/customize.dist/src/less2/include/ckeditor-fix.less). Using mixins gave us an extra layer of safety and allowed us to write CSS feeling quite confident that it would not end up changing things where it wasn't supposed to.

<img src="/images/Strip-CSS-respect-650-finalenglish1.jpg">

<center data-yeah-i-know-a-center-tag="so sue me">*Cascading works great, until you include one CSS file that was written by this guy.*</center>

## Parameterized mixins

An excellent feature of Less is parameterized mixins, that is, templates with arguments. One of our biggest templates is called `.toolbar_main()` and this builds the toolbar at the top of CryptPad as well as the user-list on the lefthand side. In order to make the customizable colors with the same HTML structure, we opted to use a parameterized mixin like this:

```
.toolbar_main (
    @color: @colortheme_default-color, // Color of the text for the toolbar
    @bg-color: @colortheme_default-bg, // color of the toolbar background
    @warn-color: @colortheme_default-warn, // color of the warning text in the toolbar
    @barWidth: 600px // width of the toolbar
) {
/// a lot of code here, using colors based on the parameters,
/// but lightened or darkened using less functions.
};
```

Then each app would call `.toolbar_main()` with its own color parameters, and get a nice toolbar, customized to that app's color theme. Again, this is not the only way to do it, but having the ability to generate CSS with highly specific color rules proved to be extremely useful for overriding leaked styles coming from the software that we integrate.

## State explosion

What we didn't think about at that time was the effect that the proliferation of CryptPad Apps would have on the amount of CSS being generated. We started with just a few styles and just a few apps to apply those styles on.

<media-tag src="https://files.cryptpad.fr/blob/ba/baf60fc13e35117c60337bbd93ee1dd43ede9280fe5aa583" data-crypto-key="cryptpad:9nEx58X4nrmTYmi5i8K8bb6DvTRemmYubZbU1J1dDa0="></media-tag>

But as we added more and more CryptPad apps, the same CSS was being generated and applied over and over...

<media-tag src="https://files.cryptpad.fr/blob/1b/1b5e6189a55efb7ea30ff1cc128597ce76b158fd659d6f45" data-crypto-key="cryptpad:tvxTuU3P5nqqQ75TMRsjehvOjljlkSGzpZTgrfhgGSg="></media-tag>

Then as our styles become more complex, the CSS which was being copy/pasted by less compiler became bigger and bigger

<media-tag src="https://files.cryptpad.fr/blob/83/8398106a4ee0109630793846cabfdecaa8ee80313cca7e37" data-crypto-key="cryptpad:qy+1nKYU8sQiQR88IgqyxAfspxZiEN8Q3NkBI2qpPOA="></media-tag>

The total of all our less code in the entire project was only 235k, and it was compiling to over **1.3 megabytes of CSS**. We cache the compiled CSS by placing it in [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage), but still, every time a new version of CryptPad was released, the CSS needed to be recompiled and this was dominating the loading time.

## Building a Linker for CSS

If you have experience with C/C++, you might recognize this problem. It is as if there was no linker and the only way to reuse code was to use preprocessor `#include` over and over again.

Since by this point, we had a significant amount of Less which was designed this way, rewriting it was not an option, so we started looking for ways to *link* it rather than copy/pasting it over and over again. Fortunately most of the bigger mixins only applied rules to specific classes, so moving them up to the root level would not cause trouble, though to be safe, we wanted to only load the styles that were necessary.

If we would indicate to the javascript code which loaded the Less that a particular Less file was needed, it could be compiled, cached and included *separately*, and thus it could be reused across apps. In order to keep the Less API as close to the same as possible, we decided to put that indication inside of the `.<filename>_main()` mixin.

So `.dropdown_main()` went from this:

```
.dropdown_main () {
    // all the code here
}
```

To this:

```
.dropdown_main () {
    --LessLoader_require: LessLoader_currentFile();
};
& {
    // all the code here
}
```

Two important things to note: firstly `LessLoader_currentFile()` is a function which we created (as the name implies, it's defined in `LessLoader.js`), it simply expands to the current function name. Secondly, when a less file is included with the `reference` flag (e.g. `@include (reference) "./dropdown.less";`) the content is not output but the mixins are made available, so moving the code down to the bottom of `dropdown.less` would cause it not to end up in the compilation of `app-pad.less`.

The resulting CSS from this contains something like this:

```
--LessLoader_require: "/customize/src/less/include/dropdown.less";
```

LessLoader would then simply scan for `--LessLoader_require:` and trigger loading of those files, which are still parsed by Less, but are the same for every CryptPad app.

### Parameters with CSS variables

In this example, I intentionally left out the parameterized mixins. Solving this was slightly more complicated and in order to do it, we made use of a reasonably new feature in web browsers: [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). 

Today, one can write in CSS the following:

```
:root {
    --color-should-be: brown;
}

// potentially much later...
.element {
    color: var(--color-should-be);
}
```

and the element text will be brown. Discovering this was a breakthrough because it meant that the arguments could be turned into variables in `app-pad.less` and then made use of in `toolbar.less`. However, there are limitations to what you can do with CSS variables. For example, this doesn't work:

```
:root {
    --hack-boolean: 1;
}

// later on...

@media screen and (max-width: calc(var(--hack-boolean) * 100000000)) {
    // HAHAHA I MADE AN IF STATEMENT
    :root { --lets-define-another-variable: "lol"; }
}
```
<center>*If this worked, I'd probably be using it*</center>

<br>

#### Scoped CSS variables

What does work, however, is specifying different values of the same variable at different scopes, so this does work:

```
.my-button { --button-color: red; }
.my-popup-window .my-button { --button-color: blue; }

// later on...

.my-button {
    background-color: var(--button-color);
}
```

But possible uses/abuses of this feature were not investigated.

#### Making it work

Following the general principle of [keeping the variable definition close to the usage](https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/), we put the variable definitions inside of the `.<filename>_main()` mixin and the usages below in the same file. In order to avoid namespace collisons, we prefixed all variables with the name of the file. A simplified version of avatar.less looks like this:

```
.avatar_main(@width) {
    --LessLoader_require: LessLoader_currentFile();
    --avatar-width: @width;
}
& {
    &.cp-avatar {
        ...
        .cp-avatar-default, media-tag {
            width: var(--avatar-width);
```

In some cases, we needed to introduce additional variables because of the use of Less functions such as [lighten() and darken()](http://lesscss.org/functions/#color-operations), which obviously cannot work on CSS variables. So we used the following pattern in many places:

```
.help_main (@color, @bg-color) {
    --LessLoader_require: LessLoader_currentFile();
    @help-bg-color-l15: lighten(@bg-color, 15%);
    @help-text-color: contrast(@help-bg-color-l15, #fff, #000); //@color;
    @help-link-color: contrast(@help-bg-color-l15, lighten(spin(@bg-color, 180), 10%), darken(spin(@bg-color, 180), 10%));

    --help-bg-color-l15: @help-bg-color-l15;
    --help-text-color: @help-text-color;
    --help-link-color: @help-link-color;
};
```

### Results

After carefully planning and studying solutions, we managed a fairly non-invasive refactoring of the styles which took Less compile time down from almost 3 seconds to around 900ms. For simplistic pages like the front page, the number dropped to around 200ms.

The key result is that a person who has never seen CryptPad before will see the main page right away instead of waiting 3 or more seconds to compile all the less for the entire project.

## But wait, what about Internet Explorer ?

This question is the bane of many web developers' existance. In this case, the problem is that [Internet Explorer has no CSS variables](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/csscustompropertiesakacssvariables/). Last week we changed CryptPad so that when you use it, your browser will let us know if it doesn't support CSS variables. This is done using the [feedback mechanism](https://blog.cryptpad.fr/2017/07/07/cryptpad-analytics-what-we-cant-know-what-we-must-know-what-we-want-to-know/#What-we-collect-because-we-want-to-know) which is an opt-out collection of information such as how often particular features are used and whether certain things are supported by the browsers of people using CryptPad.

What we found is that in the past week, we saw about 50 unique users who are running browsers which don't support CSS variables. With our approximately 4500 unique users per week, this is a little over 1%.

### Making an acceptable fallback

The One Percent jokes asside, it's hard to justify making CryptPad 300% slower for everyone who tries it for the first time, just to satisfy about 1% of the userbase. But at the same time, it's sad to drop support for a browser which at the current moment does work with CryptPad.

The solution we devised was to specify default values and then override them.

For example:

```
    .cp-markdown-toolbar {
        ...
        button {
            // IE sees this (variable compiled by less)
            color: @toolbar-color;
            
            // everyone else sees this
            color: var(--toolbar-color);
```

The only question remaining was how to specify the defaults in a way that was simple for us when we worked on the less files. Most of our `.<filemane>_main()` parameterized mixins already had default values in case they were called without parameters, so we already knew what sane defaults would be. What we decided to do was create a new mixin called `.<filename>_vars()`, which would assign a set of Less variables based on the arguments.

The final result looked like this:

```
.help_vars (
    @color: @colortheme_default-color,
    @bg-color: @colortheme_default-bg
) {
    @help-bg-color-l15: lighten(@bg-color, 15%);
    @help-text-color: contrast(@help-bg-color-l15, #fff, #000); //@color;
    @help-link-color: contrast(@help-bg-color-l15, lighten(spin(@bg-color, 180), 10%), darken(spin(@bg-color, 180), 10%));
}
.help_main (@color, @bg-color) {
    --LessLoader_require: LessLoader_currentFile();
    .help_vars(@color, @bg-color);
    --help-bg-color-l15: @help-bg-color-l15;
    --help-text-color: @help-text-color;
    --help-link-color: @help-link-color;
};
& {
    .help_vars();
    .cp-help-container {

        position: relative;
        background-color: @help-bg-color-l15;
        background-color: var(--help-bg-color-l15);
```

Going through it step-by-step, the `.help_vars()` mixin takes parameters but it defines default values, then it creates some Less variables which are accessed after it is used. `.help_main()` calls `.help_vars()` and passes it arguments, then takes it's results and assigns them to CSS variables. Then the main block of the Less file also calls `.help_vars()` but without any arguments, so the defaults are used. Then in the main block, each usage of a CSS variable also has the usage of the less variable. The less variable provides the default value, the one which IE will see, and then the CSS variable provides the specified value, the one which will be different per CryptPad application.

## There you have it

Every Less file now gets loaded twice, first it is loaded by the `@include (reference)` call, where it is parsed in order to expose the `.<filename>_main()` mixin, then it is loaded a second time as an independent file. Importantly, however, once it is compiled it is stored into localStorage and the toolbar CSS which is compiled when you go to the Rich Text app is the exact same CSS which will be used when you go to the Code/Markdown app. This feature is available in the `staging` branch of the CryptPad project and will be on CryptPad.fr in the next release.

We could make it even faster, by separating the main content of the Less files from the `.<filename>_vars()` and `.<filename>_main()` mixins, essentially making header files, in C/C++ parlance. And if we find in future profiling that less compiling remains a signficant performance penalty, there's a good chance that we will.
