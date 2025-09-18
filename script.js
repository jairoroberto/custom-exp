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
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o link que contém "s/contactsupport" no href pela ancora
  var contactSupportLink = document.querySelector('.contactSupport a')
  //var contactSupportLink = document.querySelector('a[href*="s/contactsupport"]');

  // Verifica se o link foi encontrado
  if (contactSupportLink) {
    // Altera o comportamento do link para abrir em uma nova aba
    contactSupportLink.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      window.open('https://honda.service-now.com/pitstop?source=ihs', '_blank'); // Abre a nova URL em uma nova aba
    });
  }
});

// change text

