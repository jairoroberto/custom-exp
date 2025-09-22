console.log('--- Test External Script JS by Jairo');

const updateLink = document.querySelector(".subheader-listview p a[id*='updatePageImg']");
// reload when click
// updateLink.href = 'https://example.com/new-link';

updateLink.addEventListener('click', (event) => {
  event.preventDefault();
  // do something
  window.location.href = updateLink.href;
  console.log('clicked update link');
});


// Aguarda o carregamento completo do DOM
/* Try Redirect
document.addEventListener('DOMContentLoaded', function () {
  var contactSupportLink = document.querySelector('.contactSupport a')
  if (contactSupportLink) {
    contactSupportLink.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      window.open('https://honda.service-now.com/pitstop?source=ihs', '_blank'); // Abre a nova URL em uma nova aba
    });
  }
});
*/
// change text

