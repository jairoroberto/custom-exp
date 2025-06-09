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
/* a.laockTrigger */

/*
function getRecordSelected() {
  const reg = document.querySelectorAll("tr[aria-selected='true'] th a")

  if (reg) {
    let regId = reg.getAttribute('data-recordid');
    console.log('--- Registro do Lead/Opp Selecionado:: ', regId)
  }
  else {
    console.log('Nenhum Registro foi Selecionado!')
  }
}

*/

function getRecordSelected() {
  const regList = document.querySelectorAll("tr[aria-selected='true'] th a");

  const idSel = document.getElementById('idSel');

  if (regList.length > 0) {
    regList.forEach((reg, index) => {
      let regId = reg.getAttribute('data-recordid');
      idSel.textContent += `${regId}, `;
      console.log(`--- Registro ${index + 1} Selected: `, regId);
    });
  } else {
    console.log('Nenhum Registro foi Selecionado!');
  }
}

// const changeOwner = document.getElementById('changeOwner');
// changeOwner.addEventListener('click', getRecordSelected) 

function initializeEventListener() {
  const changeOwner = document.getElementById('changeOwner');

  if (changeOwner) {
    changeOwner.addEventListener('click', getRecordSelected);
    //changeOwner.style.backgroundColor = '#ffffff'
    console.log('Event listener adicionado com sucesso!');
  } //changeOwner.style.backgroundColor = '#cccccc'
  setTimeout(initializeEventListener, 1000);
}
}

// Chame esta função quando apropriado
initializeEventListener();