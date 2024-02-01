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
      cardComponents.push(`<a href="${project.repo}" class="btn btn-dark" target="_blank">Repository</a>`);
    }
    if (project.more) {
      var { video, text, button } = project.more;
      if (!text)
        text = "";
      if (!video)
        video = "";
      cardComponents.push(`<button class="btn btn-dark" onclick="showMore('${project.title}', '${video}', '${text}')">${button}</button>`);
    }
    const div = document.createElement('div');
    div.innerHTML = cardComponents.join('');
    div.classList.add('card');
    div.classList.add('project');
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));
