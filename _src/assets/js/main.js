'use strict';
const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');
const phoneField = document.querySelector ('#phone');
const phoneCard = document.querySelector ('.contact-list__tlf');

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

phoneField.addEventListener('keyup', function(e){
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
});
// function createLink (e){
//   const text = e.currentTarget.value;
//   const item = `<a href="${e.currentTarget.getAtributte('data-common')+ text}" class= " ${e.currentTarget.getAtributte('data-class')}"></a>`;
//   document.querySelector('.'+ e.currentTarget.getAtributte('data-dest')).innerHTML= item;
// }
//  phoneField.addEventListener('keyup', createLink);
//  phoneCard.addEventListener ('keyup', createLink);
