'use strict';
const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');

nameField.addEventListener('keyup', function(e){
  const autor = e.currentTarget;
  nameCard.innerHTML = autor.value;
});

puestoField.addEventListener('keyup', (e)=>{
  const autor = e.currentTarget;
  puestoCard.innerHTML = autor.value;
});



//Subir fichero
// const fr = new FileReader(); 
// const imageBtn = document.querySelector('.btn--img');

// const fileField = document.querySelector('#img-selector');
// const profileImage = document.querySelector('.profile-image__item');

// function getImage(e){
//   const myFile = e.currentTarget.files[0];
//   fr.addEventListener('load', writeImage);
//   fr.readAsDataURL(myFile);
// }

// function writeImage() {
//   profileImage.src= fr.result;
// }

// function fakeFileClick() {
//   fileField.click(); 
// }

// fileField.addEventListener('change', getImage);
// imageBtn.addEventListener('click', fakeFileClick);
