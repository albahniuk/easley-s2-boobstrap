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

//Skills 
const htmlOrigin = document.querySelector('#html');
const cssOrigin = document.querySelector('#css');
const reactOrigin = document.querySelector('#react');
const htmlDest = document.querySelector('.list__item--html');
const cssDest = document.querySelector('.list__item--css');
const reactDest = document.querySelector('.list__item--react');


  htmlOrigin.addEventListener('click', (e)=>{
    const author = e.currentTarget;
    htmlDest.innerHTML = 'Html';
  }); 
  cssOrigin.addEventListener('click', (e)=>{
    const author = e.currentTarget;
    cssDest.innerHTML = 'Css';
  }); 
  reactOrigin.addEventListener('click', (e)=>{
    const author = e.currentTarget;
    reactDest.innerHTML = 'React';
  }); 

  
// const htmlOrigin = document.querySelector('#html');
// const cssOrigin = document.querySelector('#css');
// const reactOrigin = document.querySelector('#react');
// const skillDest = document.querySelector('.skills__list');




// function clickMe (e){
//   const author = e.target.value;
//   console.log(author);
//   // const skill = input;
//   // console.log(skill);
//   skillDest.innerHTML = `<li class="skill">${author}</li>`;

// }
// htmlOrigin.addEventListener('click',clickMe);
// cssOrigin.addEventListener('click',clickMe);
// reactOrigin.addEventListener('click',clickMe);




