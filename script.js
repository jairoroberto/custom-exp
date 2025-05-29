
const linkReload = document.getElementById('updatePage');
const linkReloadImg = document.getElementById('updatePageImg');


linkReload.addEventListener('click', (event) => {
  event.preventDefault();
  location.reload();
});
linkReloadImg.addEventListener('click', (event) => {
  event.preventDefault();
  location.reload();
});


// const elementsToReload = [document.getElementById('updatePage'), document.getElementById('updatePageImg')];

// elementsToReload.forEach(element => {
//   element.addEventListener('click', (event) => {
//     event.preventDefault();
//     location.reload();
//   });
// });
