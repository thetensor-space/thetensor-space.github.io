# KaTex
## Use KaTex in a post

_Note: KaTex is a JavaScript library for rendering Math formulas._

Using KaTex directly in markdown is very straight-forward. Follow these steps:

1. Open a `markdown` file.
2. Type a [KaTex formula](https://katex.org/docs/supported.html) between configured [delimiters](https://katex.org/docs/autorender.html#api).

Below are two examples of valid KaTex (default delimiters):

```
$$
c = \pm\sqrt{a^2 + b^2}
$$

\\(
c = \pm\sqrt{a^2 + b^2}
\\)
```

See the docs for a [list of supported functions](https://katex.org/docs/supported.html).

## Custom delimiters

The following are the default `delimiters` KaTex uses ([See docs](https://katex.org/docs/autorender.html)):

```
[
  {left: "$$", right: "$$", display: true},
  {left: "\\(", right: "\\)", display: false},
  {left: "\\[", right: "\\]", display: true}
]
```

`display: true` means the expression will be centered with 100% width. `display: false` means that an element will be `inline`, or render like text in a paragraph.

### Create your own delimiters

It is not recommended to create your own delimiters. This is because we use KaTex's [auto-render]() function to **search every piece of text on the page** for KaTex delimiters. With this method, it is possible to get a **mismatch**. It is also best practice to be as consistent as possible by using the default delimiters.

However, if you'd like to create your own delimiter, open the following file:

`/_includes/hook-pre-closing-body.html`

The contents should look like so:

```html
<script defer src="/uploads/lib/katex/katex.min.js"></script>
<script defer src="/uploads/lib/katex/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body)"></script>
```

Add a second argument to `renderMathInElement` to add your custom delimitiers. For example, your file might look like so:

_Note: The single quotes surrounding the delimiter values are REQUIRED in order for the `<script>` to render properly._

```html
<script defer src="/uploads/lib/katex/katex.min.js"></script>
<script defer src="/uploads/lib/katex/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
    ]
  })"></script>
```

## Update KaTex

1. Download the zip package from the official docs
2. Unzip the package on your computer
3. Add the folder and it's contents to /uploads/lib/katex

_Note: future releases of KaTex may move some files around. Be sure to include `katex.min.js` and `auto-render.min.js` in `_includes/hook-pre-closing-body.html` simmilar to the example above._

See the [official KaTex docs](https://katex.org/docs/api.html) if you have additional questions.