var MORE_SHOWN;

function showMore(title, video, text) {
  document.getElementById('dimOverlay').style.display = 'block';
  
  const moreContainer = document.getElementById('moreContainer');
  const components = [];
  components.push(`<h4 class="card-title">${title}</h4>`);
  if (video) {
    components.push(`<iframe title="vimeo-player" src="${video}" style="width: 100%;" frameborder="0" allowfullscreen></iframe>`);
  }
  if (text !== 'undefined') {
    components.push(`<p>${text}<\p>`);
  }
  moreContainer.innerHTML = components.join('');
  moreContainer.style.display = 'flex';

  history.pushState(null, "", "more");
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