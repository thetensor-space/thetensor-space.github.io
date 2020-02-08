---
# Uses this html: "_layout/post.html" as a template.
layout: post 
title:  Post Template
tags: featured
---

## Contents
* [Create an Article, Event, or other post](#create-post)
* [Use KaTex](#use-katex)
* [Add a Video](#add-video)
* [Add a image](#add-image)
* [Edit a non-post page](#edit-page)
* [Popular / Featured posts](#featured-posts)
* [More Documentation](#more-docs)
* [Contributing & run the site](#how-to-contribute)

## Create an Article, Event, or other post
<span id="create-post"></span>

Posts for Articles and Events are kept in the following directories (as of writing this):

* `_posts` -> Articles Page
* `_events` -> Events Page

To create a new post, add a file with the markdown file extension (`.md`). Jekyll uses [Kramdown](https://kramdown.gettalong.org/documentation.html) for processing these files. **It is important** that you follow Jekyll's naming conventions for a post as follows: `YYYY-MM-DD-YOUR_POST_NAME.md`. This is how Jekyll organizes and sorts your posts correctly.

For example, this is how you create a new _post_ for the _Articles_ page:

1. Create a file named `2019-12-21-tensors-rock.md` in the `_posts` directory.
2. Insure you have the proper _Front Matter_ for your post. An _Article_ has the following Front Matter:
   
   ```
   ---
   # Uses this html: "_layout/post.html" as a template.
   layout: post 
   title:  Post Template
   # (Optional) Used to sort posts, not supported as of writing this.
   categories: [ Workshops ]
   ---
   ```
3. Write your article. Use this post template or [Kramdown's documentation](https://kramdown.gettalong.org/documentation.html) for any markdown questions / issues you have.
4. Confirm your article shows up on the site.


## Use KaTex
<span id="use-katex"></span>

Use [KaTex](https://katex.org/docs/supported.html) to draw Math formulas directly in `Markdown`. KaTex uses `LaTeX` and `TeX` macros to parse math formulas. [See the Katex docs](https://katex.org/docs/supported.html) for a full list of `LaTeX` and `TeX` macros. Below is a simple example of using Katex:

**Note:** There are new lines _before_ and _after_ **display mode** (aka centered katex) formulas.

```
_Today we'll go over the Pythagorean Theorem..._

$$
a^{2} + b^{2} = c^{2}
$$

# Inline mode:

$
a^{2} + b^{2} = c^{2}  
$
```

...Which results in the following output:

_Today we'll go over the Pythagorean Theorem..._


$$
a^{2} + b^{2} = c^{2}
$$

$
a^{2} + b^{2} = c^{2}
$

**Trouble Shooting KaTex**

Because this is a markdown file and not a latex file there are some competing symbols that can at times cause some problems.
 1. `*` is used in markdown to introudce bold.  If used within math mode as a symbol it mostly works, but sometimes the viewer will find two copies `*` followed by stuff and a later `*` and missunderstand these to mean bold.  The math mode looses.  Solutions include using `\(...\)` instead of `$...$` or changing the symbol to a latex one like `\star` or `\circ` as those never conflict with Markdown.
 2. Another one is `|` which markdown uses to make walls of a table and at times within KaTex the use of `|` can get confused.  Try latex `\mid` if you find trouble -- it may not be your preferred spacing but notice this is getting math on the internet so what are you complaining about?  
 3. Keep in mind that `$$...$$` will only center the display mode if there si a new line before and after.

## Add a Video
<span id="add-video"></span>

* Get the _source_ of a video. For Vimeo videos, you can get the source of the video by clicking _share_ then copying the _link_ shown in the popup. For YouTube, right-click a video and choose _copy video url_.
   
   * You can also add videos to the site in the `/uploads/videos` directory, but it is not recommended to keep videos in your code repository.

![Vimeo video example](/uploads/images/vimeo_src_example.png)

* Once you have the _source_ of a video, use the code below as a template:

```
{% raw %}
  {% 
    include video.html
    src="https://vimeo.com/379509939"
    title="Tensors & Operators -- James B. Wilson"
    desc="Introduction to Tensors, Tensor Spaces, and Transverse Operators. TACA 2019. For more visit https://TheTensor.Space/. Creative Commons 2.0 CC-BY 2019 James B. Wilson"
  %}
{% endraw %}
```

...which will result in the following output:

{% 
  include video.html
  src="https://vimeo.com/379509939"
  title="Tensors & Operators -- James B. Wilson"
  desc="Introduction to Tensors, Tensor Spaces, and Transverse Operators. Creative Commons 2.0 CC-BY 2019 James B. Wilson"
%}

### Direct Embed
Directly embedding a video can avoid issues caused by the theme and / or video provider.

To directly embed a video, it's recommended to follow these instructions:

1. Get the a video's **embed** `src` (often, clicking "share", then "embed" or "iframe" will lead you here).
2. Use the following component:

```
{%
  include iframe.html
  src="https://sms.cam.ac.uk/media/3155105/embed"
%}
```

...to render this output:

{%
  include iframe.html
  src="https://sms.cam.ac.uk/media/3155105/embed"
%}

You can also copy and paste an `iframe` directly onto a page, but using this component will make the iframe fit to the page nicely.

## Add an image
<span id="add-image"></span>

It is not recommended to keep images in your code repository, but at a small scale it is acceptable (this is because _Git_ tracks _every_ image and slows down version control and for other reasons).

Use the following markdown as a template to add an image to a post:

```
{% raw %}
  Use an image in the /uploads/images directory:

  ![Vimeo video example](/uploads/images/vimeo_src_example.png)

  Or, use an external image (Be sure the image won't be removed in the future):

  ![Text that is shown if the image fails to load](https://URL_TO_YOUR_IMAGE)

{% endraw %}
```

## Edit a non-post page
<span id="edit-page"></span>

All non-post pages are mostly located in the root directory. For example, _About_, _Home_, and _Contact_ pages can be found in the root directory as `about.md`, `index.md`, and `contact.md`.

## Popular / Featured articles
<span id="featured-posts"></span>

To make a post a **featured** post and show up on the home page, add `tags: featured` to a post. For example:

```
---
layout: post 
title:  Post Template
# The "featured" tag will make this post appear on the home page.
tags: featured
---
```

## Documentation
<span id="more-docs"></span>

A full list of documentation for the site can be found on the [documentation page](/docs/tensors).

## Contributing
<span id="how-to-contribute"></span>
When you'd like to contribute to the website, you'll need to follow these steps:

1. [Fork](https://guides.github.com/activities/forking/) our repository, [thetensor-space/thetensor-space.github.io](https://github.com/thetensor-space/thetensor-space.github.io).
1. Clone your fork onto your local machine with [Git](https://guides.github.com/introduction/git-handbook/).
1. Create a new branch with a descriptive name like `article-squid-membranes`.
1. Run the site locally:
    1. Open a `terminal` and navigate inside your cloned project.
    1. Use [Docker](https://docs.docker.com/install/) (Recommended, Free for linux):
       ```
       docker run --rm \
          --volume="$PWD:/srv/jekyll" \
          -p 4000:4000 \
          -it jekyll/jekyll \
          jekyll serve
       ```
       OR... [install Jekyll manually](https://jekyllrb.com/docs/installation/).

       Then, run `jekyll serve` or `bundle exec jekyll serve` to run the site.
    1. Now the site is available at `http://localhost:4000` it will _automagically_ reload every time a file is saved.
1. Create new changes (Add an article, update the navbar, etc.).
    * Instructions for common changes are described in the rest of this post.
1. Push your new branch to _your fork_.
1. Create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to `master` on [thetensor-space/thetensor-space.github.io](https://github.com/thetensor-space/thetensor-space.github.io).
1. We will review your pull request and either request changes or _approve it_ and merge your changes to `master`.
1. The site will automatically refresh with any new changes within a few minutes.
