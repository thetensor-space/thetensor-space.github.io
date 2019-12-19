---
layout: post
title:  Post Template
---
This example post can be used as a template for future posts.

All files with the `.md` file extension will be treated as markdown, more specifically, [Kramdown](https://kramdown.gettalong.org/documentation.html). Markdown files in the root directory are treated as `pages`. Markdown files in the blog posts, packages, etc. directories are treated as `posts`. Below is a typical workflow when you create a post:

* Use `Git` to create a new `branch` with a descriptive name.
* Choose a "category" or "collection" to put your post in. For example, if you create a markdown file in `_packages`, your post will appear on the "packages" page on the website.
* (Recommended) Use an existing file in your desired directory as a template. The `frontmatter` of a post (example below) should be updated for each new post. This is important if in the future, we want to organize / sort the posts by category, title, layout, etc.

```
---
layout: post
title: Some title
categories: [ Workshops ]
---
```
* Add _content_ to your post with your own unique **spice**.
* Make a pull request with your changes.
* Request for someone to review your work, then merge your pull request into master.
* Once merged to `master`, the site will `automagically` update with your new post.

### Use KaTex
Use [KaTex](https://katex.org/docs/supported.html) to draw Math formulas directly in `Markdown`. Katex "has its own language" for mathematicians to showcase formulas in the browser. Below is a simple example of using Katex:
```
_Today we'll go over the Pythagorean Theorem..._

$$
a^{2} = b^{2} c^{2}
$$
```

...Which results in the following:

_Today we'll go over the Pythagorean Theorem..._


$$
a^{2} = b^{2} + c^{2}
$$

### Add a Video
* Get the _source_ of a video. For Vimeo videos, you can get the source of the video by clicking `share` then copying the `src` attribute of the `iframe` shown in the popup.
    * You can also add videos to the site in the `/uploads/videos` directory, but it is not recommended to keep videos in your code repository.

![Vimeo video example](/uploads/images/vimeo_src_example.png)

* Once you have the _source_ of a video, use the code below as a template:

```
{% raw %}
  {% 
    include video.html
    src="https://player.vimeo.com/video/379509939"
    title="Tensors & Operators -- James B. Wilson"
    desc="Introduction to Tensors, Tensor Spaces, and Transverse Operators. TACA 2019. For more visit https://TheTensor.Space/. Creative Commons 2.0 CC-BY 2019 James B. Wilson"
  %}
{% endraw %}
```

...which will result in the following output:

{% 
  include video.html
  src="https://player.vimeo.com/video/379509939"
  title="Tensors & Operators -- James B. Wilson"
  desc="Introduction to Tensors, Tensor Spaces, and Transverse Operators. TACA 2019. For more visit https://TheTensor.Space/. Creative Commons 2.0 CC-BY 2019 James B. Wilson"
%}

### Documentation
A full list of documentation for the site can be found on the [documentation page](/docs/Tensors).

### Additional questions?
If you have additional questions, feel free to reach out to a maintainer / contributor on the [contact page](/contact).
