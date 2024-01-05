fetch('projects.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projectsContainer');
  data.forEach(project => {
    const div = document.createElement('div');
    div.innerHTML = 
    `<div class="card" style="width: 18rem;">
      <img src="${project.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.text}</p>
        <a href="${project.link}" class="btn btn-primary">Repository</a>
      </div>
    </div>`;    
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));