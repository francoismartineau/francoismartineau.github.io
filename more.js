var MORE_SHOWN;

function showMore(index) {
  document.getElementById('dimOverlay').style.display = 'block';
  const more = PROJECTS[index].more;
  const moreContainer = document.getElementById('moreContainer');
  const components = [];
  components.push(`<h4 class="card-title">${PROJECTS[index].title}</h4>`);
  if (more.video) {
    components.push(`<div id="moreVideo" style="padding:56.25% 0 0 0;position:relative;"><iframe src="${more.video}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`);
  }
  if (more.images) {
    addCarousel(components, more.images);
  }
  if (more.text) {
    components.push(`<p>${more.text}</p>`);
  }
  if (more.repo) {
    components.push(`<a href="${more.repo}" class="btn btn-dark btn-sm" target="_blank">Repository</a>`);
  }
  moreContainer.innerHTML = components.join('');
  moreContainer.style.display = 'block';

  history.pushState(null, "", "#more");
  MORE_SHOWN = true;
}

function addCarousel(components, images)
{
  const carouselId = "moreCarousel";
  components.push(`<div id="${carouselId}" class="img carousel carousel-dark slide" data-bs-ride="false" data-bs-interval="false" style="heigth: 100%;">`);
  components.push(`<div class="carousel-inner">`);
  images.forEach((image, index) => {
    components.push(`<div class="carousel-item ${index == 0 ? 'active': ''}">`);
    components.push(`<img src="${image}" class="d-block w-100" alt="carousel${index}">`);
    components.push(`</div>`);
  });
  components.push(`</div>`);
  components.push(`<button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>`);
  components.push(`<button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>`);
  components.push(`</div>`);
}

function hideMore() {
  document.getElementById('dimOverlay').style.display = 'none';
  document.getElementById('moreContainer').style.display = 'none';
  document.getElementById('moreContainer').innerHTML = '';
  MORE_SHOWN = false;
}

// -- events ----
window.onpopstate = function(_) {
    hideMore();
};
  
document.getElementById('dimOverlay').addEventListener('click', function(event) {
    const moreContainer = document.getElementById('moreContainer');
    if (MORE_SHOWN && !moreContainer.contains(event.target)) {
        history.back();
    }
});

document.addEventListener('keydown', function(event) {
    if (MORE_SHOWN && event.key === 'Escape') {
        history.back();
    }
});
// --