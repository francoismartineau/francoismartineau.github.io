fetch('projects.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projectsContainer');
  const row = document.createElement('div');
  row.classList.add('row');
  data.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('col-md-4');
    div.innerHTML = 
    `<div class="card" style="width: 18rem;">
      <img src="${project.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.text}</p>
        <a href="${project.link}" class="btn btn-primary">More</a>
      </div>
    </div>`;    
    row.appendChild(div);
  });
  container.appendChild(row);
})
.catch(error => console.error('Error:', error));