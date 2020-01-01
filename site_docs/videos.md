# Add a single video to a post

1. Include the following file in your post:

```
{% include video.html url="YOUR_URL" title="YOUR TITLE" desc="YOUR_DESCRIPTION" %}
```

Video sources can be YouTube, Vimeo or local:
```
video.mp4
https://www.youtube.com/watch?v=YE7VzlLtp-4
https://vimeo.com/1084537
```

# Add videos to the home page

_Note: all videos in \_data/videos.yml are displayed on the home page._

Add videos in `_data/videos.yml`:
```yml
- title: Jekyll Introduction
  desc: Overview of the most popular static generator
  url: https://youtu.be/T1itpPvFWHI

- title: Creating a post
  desc: Lean how to publish your first post in Jekyll
  url: https://youtu.be/gsYqPL9EFwQ
```


Then add the following to a page to display video lightbox boxes:
{% raw %}
```yaml
{% include videos.html columns="2" title="Video Tutorials" subtitle="Watch screencasts to get you started fast with Jekyll" %}
```
{% endraw %}

```
{% include video.html url="YOUR_URL" title="YOUR TITLE" desc="YOUR_DESCRIPTION" %}
```