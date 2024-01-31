function openVideo(videoSrc) {
  document.getElementById('dimOverlay').style.display = 'block';
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.style.display = 'block';
  videoContainer.innerHTML = `<iframe title="vimeo-player" src="${videoSrc}" style="width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>`;
}

function closeVideo() {
  document.getElementById('dimOverlay').style.display = 'none';
  document.getElementById('videoContainer').style.display = 'none';
  document.getElementById('videoContainer').innerHTML = '';
}

document.getElementById('dimOverlay').addEventListener('click', function(event) {
  const videoContainer = document.getElementById('videoContainer');
  if (!videoContainer.contains(event.target)) {
      closeVideo();
  }
});

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
    if (project.video) {
      cardComponents.push(`<button class="btn btn-primary" onclick="openVideo('${project.video}')">Video</button>`);
    }
    const div = document.createElement('div');
    div.innerHTML = cardComponents.join('');
    div.classList.add('card');
    container.appendChild(div);
  });
})
.catch(error => console.error('Error:', error));


