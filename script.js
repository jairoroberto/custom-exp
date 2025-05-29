// <a href="#" onclick="location.reload(); return false;">atualizando sua página</a>

const linkReload = document.getElementById('updatePage');

linkReload.addEventListener('click', (event) => {
  event.preventDefault();
  location.reload();
});
