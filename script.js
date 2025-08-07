console.log('--- Test External Script JS by Jairo');

const updateLink = document.querySelector('.subheader-listview[*] p a');
// reload when click
// updateLink.href = 'https://example.com/new-link';

updateLink.addEventListener('click', (event) => {
  event.preventDefault();
  // do something
  window.location.href = updateLink.href;
});
