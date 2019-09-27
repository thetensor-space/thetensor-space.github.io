---
layout: post
title:  Software / Tools
categories: [ Tools ]
permalink: /softwaretools
---
Learn more about our software and tools:

<div id="software_and_tools">
  Loading Software and Tools...
</div>

<script src="/uploads/js/axios.min.js"></script>
<script>
  let softwareListElem = document.getElementById("software_and_tools");
  axios.get("https://api.github.com/orgs/thetensor-space/repos")
    .then(({ data }) => {
      console.log(data);
      softwareListElem.innerHTML = data.map(repo => {
        return `
          <h3><a href="${repo.html_url}" rel="noopener noreferer" target="_blank"> ${repo.name}</a></h3>
          <p>${repo.description}</p>
        `;
      }).join("");
    })
    .catch(err => {
      softwareListElem.innerHTML = "Failed to GET thetensor-space repositories. Please reload page.";
    });
</script>