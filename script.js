fetch('projects.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projectsContainer');
  // const row = document.createElement('div');
  // row.classList.add('row');
  // row.classList.add('row-cols-auto');
  data.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = 
    `${project.image ? `<img src="${project.image}" alt="...">` : ''}
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.text}</p>
        ${project.link ? `<a href="${project.link}" class="btn btn-primary">Repository</a>` : ''}`;    
      container.appendChild(div);
  });
  // container.appendChild(row);
})
.catch(error => console.error('Error:', error));