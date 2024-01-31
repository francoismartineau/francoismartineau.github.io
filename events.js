document.getElementById('dimOverlay').addEventListener('click', function(event) {
    const moreContainer = document.getElementById('moreContainer');
    if (!moreContainer.contains(event.target)) {
        hideMore();
    }
  });
  
document.addEventListener('keydown', function(event) {
if (event.key === 'Escape') {
    hideMore();
}
});