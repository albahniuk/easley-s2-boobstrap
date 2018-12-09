'use strict';
const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');


nameField.addEventListener('keyup', function(e){
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
});

puestoField.addEventListener('keyup', (e)=>{
  const preview = e.currentTarget;
  puestoCard.innerHTML = preview.value;
});



// Subir fichero imagen
const fr = new FileReader(); 
const imageBtn = document.querySelector('.btn--img');

const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.profile-pic');
const divPreviewImage = document.querySelector('.subirArchivo');

//let files = [];

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
profileImage.style.backgroundImage = `url(${fr.result})`;
divPreviewImage.style.backgroundImage = `url(${fr.result})`;
}

function fakeFileClick() {
  fileField.click(); 
}

imageBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

//Links
const phoneOrigin = document.querySelector ('#phone');
const phoneDest = document.querySelector ('.contact-list__tlf');
const mailOrigin = document.querySelector ('#email');
const mailDest = document.querySelector ('.contact-list__mail');
const linkOrigin = document.querySelector ('#linkedin');
const linkDest = document.querySelector ('.contact-list__linkedin');
const gitOrigin = document.querySelector ('#github');
const gitDest = document.querySelector('.contact-list__github');

function writeMe(e) {
  const author = e.currentTarget.value;
  const destCommon = e.currentTarget.getAttribute('data-common');
  const destIco = e.currentTarget.getAttribute('data-ico');
  const dataDest = e.currentTarget.getAttribute('data-dest');
  document.querySelector(dataDest).innerHTML = `<a href="${destCommon}${author}"><i class="${destIco}"></i></a>`;
}

phoneOrigin.addEventListener('keyup', writeMe);
mailOrigin.addEventListener('keyup', writeMe);
linkOrigin.addEventListener('keyup', writeMe);
gitOrigin.addEventListener('keyup', writeMe);




// phoneField.addEventListener('keyup', function(e){
//   const preview = e.currentTarget;
//   nameCard.innerHTML = preview.value;
// });
// function createLink (e){
//   const text = e.currentTarget.value;
//   const item = `<a href="${e.currentTarget.getAtributte('data-common')+ text}" class= " ${e.currentTarget.getAtributte('data-class')}"></a>`;
//   document.querySelector('.'+ e.currentTarget.getAtributte('data-dest')).innerHTML= item;
// }
//  phoneField.addEventListener('keyup', createLink);
//  phoneCard.addEventListener ('keyup', createLink);

