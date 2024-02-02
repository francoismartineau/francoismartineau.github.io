var MORE_SHOWN;

function showMore(index) {
  document.getElementById('dimOverlay').style.display = 'block';
  const data = PROJECTS[index].more;
  const moreContainer = document.getElementById('moreContainer');
  const components = [];
  components.push(`<h4 class="card-title">${data.title}</h4>`);
  if (data.video) {
    components.push(`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${data.video}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`);
  }
  if (data.image) {
    components.push(`<img src="${data.image}"></img>`)
  }
  if (data.text) {
    components.push(`<p>${data.text}<\p>`);
  }
  moreContainer.innerHTML = components.join('');
  moreContainer.style.display = 'block';

  history.pushState(null, "", "#more");
  MORE_SHOWN = true;
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