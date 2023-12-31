# MWeb

<img src="https://i.imgflip.com/7ytoq2.jpg">

It's (mostly) [@material/web](https://github.com/material-components/material-web), but with **no dependencies** and comes gift-wrapped in an impossibly small **??kb CDN bundle**. 

**To get started...**

copy this
```html
<link href="https://unpkg.com/materialweb@0.0.1/dist/mw-.css" rel="stylesheet">
<script src="https://unpkg.com/materialweb@0.0.1/dist/mw-.js" defer></script>
```
into here
```html
<head>
  <!-- here -->
</head>
```
and start coding
```html
<mw-badge count="1"></mw-badge>
```

Documentation is coming soon.

## About
Mweb was created because Material Web is not and will not be available to developers as a complete dependency-free package over CDN. Each component file has to be included individually or imported with JavaScript and bundled with a tool like Webpack. This falls short of the promise of Web Components.

There are other differences here too relating to Mweb's adherence to the [TAC methodology](https://jordanbrennan.hashnode.dev/tac-a-new-css-methodology), which, among other things, means Mweb leverages existing HTML elements when possible. In contrast, Material Web creates its own Custom Elements abstractions for fundamental HTML elements like `<button>`, `<input>`, and `<dialog>`. That pattern has several consequences:
- It separates the developer from native HTML. This means common HTML knowledge is no longer useful, or at least not immediately useful...
- The developer now has to stop and learn if native HTML features like button's `type="reset"` or input's `autofocus` are available in Material, and if so, how to use them. 
- The answer from libraries that do this is almost always that it's same interface as HTML, i.e. `<md-button>` defines `type="reset"` too and the implementation is often just a pass-through. Laaaaaame.
  - This is extremely wasteful for developers having to relearn and build trust with these mostly-the-same interfaces, e.g. unlike HTML where `submit` is button's default type, the Shoelace design system surprisingly sets `button` as the default. We should not have to relearn buttons on the web!
  - It's a huge waste of effort in source code development and testing. Material's button alone is 41 files of source code and tests - over 1,000 lines of code. That's not including many more files from internal dependencies for things like focus, ARIA, classes, and more.
- Worst of all, this pattern requires the library to receive _pro-active maintenance alongside new web specs forever_. If button gets a new type, you can't use it until Material adds support. That support may come early, it may come late, or it may never come at all. It is a fool's errand! Similarly-flawed projects like React, even with its massive funding and active contributions, [still fail to stay up-to-date with HTML](https://github.com/facebook/react/issues/17157). This is a repeat of the IE dilemma where developers couldn't use new web features or at best had to implement hacks to get them to work. Libraries that do this put themselves in a position where they effectively require their own column on caniuse.com. That's terrible. This is the worst frontend anti-pattern!

## Roadmap

We're gonna try to build all of it.
-   ❌ Not started
-   🟡 In progress
-   ✅ Complete

Component                     | Beta | Stable
----------------------------- | :--: | :----:
Button                        | 🟡    | ❌
FAB                           | 🟡    | ❌
Icon button                   | 🟡    | ❌
Checkbox                      | ❌    | ❌
Chips                         | 🟡    | ❌
Dialog                        | 🟡    | ❌
Divider                       | ❌    | ❌
Elevation                     | ❌    | ❌
Focus ring                    | ❌    | ❌
Field                         | ❌    | ❌
Icon                          | 🟡    | ❌
List                          | 🟡    | ❌
Menu                          | ❌    | ❌
Progress indicator (circular) | ❌    | ❌
Progress indicator (linear)   | ❌    | ❌
Radio button                  | 🟡    | ❌
Ripple                        | ❌    | ❌
Select                        | ❌    | ❌
Slider                        | ❌    | ❌
Switch                        | ❌    | ❌
Tabs                          | 🟡    | ❌
Text field                    | ❌    | ❌
Autocomplete                  | ❌    | ❌
Badge                         | 🟡    | ❌
Banner                        | ❌    | ❌
Bottom app bar                | ❌    | ❌
Bottom sheet                  | ❌    | ❌
Segmented button              | ❌    | ❌
Card                          | 🟡    | ❌
Data table                    | 🟡    | ❌
Date picker                   | ❌    | ❌
Navigation bar                | ❌    | ❌
Navigation drawer             | ❌    | ❌
Navigation rail               | ❌    | ❌
Search                        | ❌    | ❌
Snackbar                      | ❌    | ❌
Time picker                   | ❌    | ❌
Tooltip                       | ❌    | ❌
Top app bar                   | ❌    | ❌

## Browser support
This project aims to support the latest two major versions of browsers at the time of each release.
