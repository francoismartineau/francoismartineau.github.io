function showMore(video, text) {
  document.getElementById('dimOverlay').style.display = 'block';
  const moreContainer = document.getElementById('moreContainer');
  const components = [];
  if (video) {
    components.push(`<iframe title="vimeo-player" src="${video}" style="width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>`);
  }
  if (text !== 'undefined') {
    components.push(`<p>${text}<\p>`);
  }
  moreContainer.innerHTML = components.join('');
  moreContainer.style.display = 'block';
}

function hideMore() {
  document.getElementById('dimOverlay').style.display = 'none';
  document.getElementById('moreContainer').style.display = 'none';
  document.getElementById('moreContainer').innerHTML = '';
}

fetch('projects.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projectsContainer');
  data.forEach(project => {
    const cardComponents = [];
    if (project.image) {
      cardComponents.push(`<img src="${project.image}" alt="...">`);
    }
    cardComponents.push(`<h5 class="card-title">${project.title}</h5>`);
    cardComponents.push(`<p class="card-text">${project.text}</p>`);
    if (project.repo) {
      cardComponents.push(`<a href="${project.repo}" class="btn btn-primary" target="_blank">Repository</a>`);
    }
    if (project.more) {
      var { video, text, button } = project.more;
      if (!text)
        text = "";
      if (!video)
        video = "";
      cardComponents.push(`<button class="btn btn-primary" onclick="showMore('${video}', '${text}')">${button}</button>`);
    }
    const div = document.createElement('div');
    div.innerHTML = cardComponents.join('');
    div.classList.add('card');
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));


