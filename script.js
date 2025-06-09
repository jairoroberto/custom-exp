/*
 ***
 *** Versão Inicial
 ***
 *** Atualizar página
 *** 
 *** HTML:
 *** <a href="#" id="updatePage">Atualizar página</a>
 *** <img src="#" id="updatePageImg">
 *** JS:
 ***    
 *
/*
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

*/

// Versão 01 - Otimizada: FSeletor múltiplo (mais conciso)


// document.querySelectorAll('#updatePage, #updatePageImg').forEach(element => {
//   element.addEventListener('click', (event) => {
//     event.preventDefault();
//     location.reload();
//   });
// });


// Versão 02 - Otimizada: Função reutilizável (mais limpo)
const handleReload = (event) => {
  event.preventDefault();
  location.reload();
};

document.getElementById('updatePage')?.addEventListener('click', handleReload);
document.getElementById('updatePageImg')?.addEventListener('click', handleReload);

/* teste de pegar o ID do Lead/Opp  via JS */

function getRecordSelected() {
  const reg = document.querySelector("td[aria-selected='true']");
  console.log('--- Registro do Lead/Opp Selecionado:: ', reg)
}

