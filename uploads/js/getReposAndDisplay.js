// Gets The Tensor Space repos and displays cards for those repos.
// Used for /softwaretools page.
let softwareListElem = document.getElementById("software_and_tools");

let getRepos = () => {
  axios.get("https://api.github.com/orgs/thetensor-space/repos")
    .then(({ data }) => {
      softwareListElem.innerHTML = data.map((repo, id) => {
        return `
          <div class="uk-card uk-card-default uk-box-shadow-small uk-box-shadow-hover-medium card-post uk-inline border-radius-medium border-xlight uk-width-1-1 uk-margin id="${repo.name}-${id}">
            <a class="uk-position-cover" href="${repo.html_url}#readme" rel="noreferer noopener" style="border-bottom: 0" target="_blank"></a>
            <div class="uk-card-header">
              <h3 class="uk-card-title">${repo.name}</h3>
              <div class="custom-icon-row" id="${repo.name}-${id}-contributors-list">
              </div>
            </div>
            <div class="uk-card-body" id="${repo.name}-${id}-description">
              ${repo.description}...
            </div>
            <div class="uk-card-footer">
              <span class="uk-button uk-button-text">Read more --></span>
            </div>
          </div>
        `;
      }).join("");

      data.forEach((repo, id) => {
        getRepoReadmeSnippet(repo, id);
        getRepoContributors(repo, id);
      });
    })
    .catch(() => {
      softwareListElem.innerHTML = "Failed to GET thetensor-space repositories. Please reload page.";
    });
}

let getRepoReadmeSnippet = (repo, id) => {
  let repoElem = document.getElementById(`${repo.name}-${id}-description`);

  axios.get(`https://raw.githubusercontent.com/${repo.full_name}/master/README.md`)
    .then(({ data }) => {
      repoElem.innerHTML = data
        .replace(/\!\[.*\]\(.*\)/gi, "")
        .replace(/\[.*\]\(.*\)/gi, "")
        .replace(/_/gi, "")
        .replace(/\*/gi, "")
        .replace(/\#/gi, "")
        .substring(0, 200) + "... ";
    })
}

let getRepoContributors = (repo, id) => {
  let contributorsElem = document.getElementById(`${repo.name}-${id}-contributors-list`);

  axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contributors`)
    .then(({ data }) => {
      const MAX_CONTRIBUTORS = 5;
      let myData = data.slice(0, MAX_CONTRIBUTORS);

      let contributorsHTML = myData.map(user => {
        return `
          <img class="uk-border-circle" src="${user.avatar_url}" alt="${user.login} avatar" title="${user.author}"></img>
        `;
      }).join("");

      contributorsElem.innerHTML = contributorsHTML;
    })
};

getRepos();