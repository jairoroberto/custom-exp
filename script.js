console.log('External Script JS');

const updateLink = document.querySelector('.subheader-listview a');
// reload when click
// updateLink.href = 'https://example.com/new-link';

updateLink.addEventListener('click', (event) => {
  event.preventDefault();
  // do something
  window.location.href = updateLink.href;
});
