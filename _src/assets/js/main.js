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
const divPreviewImage = document.querySelector('.uploadFile');

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

//aplicamos las paletas

const cardContent = document.querySelector('.section__card-content');
const orangePalette = document.querySelector('.orange-palette');
const porDefecto = document.querySelector('.default');
const orange = document.querySelector('.orange');
const blue = document.querySelector('.blue');

function colorClickO (e){
  const palette = e.target;
  cardContent.classList.add('orange-palette');
  cardContent.classList.remove('default-palette');
  cardContent.classList.remove('blue-palette');
}
orange.addEventListener('click', colorClickO);

function colorClickD (e){
  const palette = e.target;
    cardContent.classList.remove('orange-palette');
    cardContent.classList.add('default-palette');
    cardContent.classList.remove('blue-palette');
}

porDefecto.addEventListener('click', colorClickD);

function colorClickB (e){
  const palette = e.target;
    cardContent.classList.remove('orange-palette');
    cardContent.classList.remove('default-palette');
    cardContent.classList.add('blue-palette');
}
blue.addEventListener('click', colorClickB);
