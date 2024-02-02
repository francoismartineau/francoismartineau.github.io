var PROJECTS;

fetch('projects.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projectsContainer');
  PROJECTS = data;
  PROJECTS.forEach((project, index) => {
    const cardComponents = [];
    if (project.image) {
      cardComponents.push(`<img src="${project.image}" alt="...">`);
    }
    cardComponents.push(`<h5 class="card-title">${project.title}</h5>`);
    cardComponents.push(`<p class="card-text">${project.text}</p>`);
    if (project.repo) {
      cardComponents.push(`<a href="${project.repo}" class="btn btn-dark btn-sm" target="_blank">Repository</a>`);
    }
    if (project.more) {
      cardComponents.push(`<button class="btn btn-dark btn-sm" onclick="showMore('${index}')">${project.more.button}</button>`);
    }
    const div = document.createElement('div');
    div.innerHTML = cardComponents.join('');
    div.classList.add('card');
    div.classList.add('project');
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));
