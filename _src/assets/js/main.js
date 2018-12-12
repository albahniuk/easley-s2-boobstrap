'use strict';
//Crear JSON VACIO

const jason = {
  "palette": 0,
  "typography": 0,
  "name": "",
  "job": "",
  "phone":"",
  "email":"",
  "linkedin": "",
  "github": "",
  "photo": "",
  "skills":[]
};

const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');


nameField.addEventListener('keyup', function(e){
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
  jason.name = nameField.value;
 // localStorage.setItem('name', name.value);
});



puestoField.addEventListener('keyup', (e)=>{
  const preview = e.currentTarget;
  puestoCard.innerHTML = preview.value;
  jason.job = puestoField.value;
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
jason.photo = fr.result;
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
  jason.phone = phoneOrigin.value;
  jason.email = mailOrigin.value;
  jason.linkedin = linkOrigin.value;
  jason.github = gitOrigin.value;
  console.log(jason);
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

//TENEMOS QUE LLAMAR A LA API
//   htmlOrigin.addEventListener('click', (e)=>{
//     const author = e.currentTarget;
//     htmlDest.innerHTML = 'Html';
//   });
//   cssOrigin.addEventListener('click', (e)=>{
//     const author = e.currentTarget;
//     cssDest.innerHTML = 'Css';
//   });
//   reactOrigin.addEventListener('click', (e)=>{
//     const author = e.currentTarget;
//     reactDest.innerHTML = 'React';
//     // jason.skills = .value;
// });

// Llamar a la Api de las Skills
const webApi = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
const skillsCont = document.querySelector('.container__skills');

fetch(webApi)
  .then(response => response.json())
  .then( data =>{
    const resultSkills = data.skills;
    for(let i =0; i<resultSkills.length;i++){
      skillsCont.innerHTML += `<label for="">
      <input id="" type="checkbox" value="" name="" class="form-input-c">${resultSkills[i]}</label>`;
    }
    }
    );



//aplicamos las paletas

const cardContent = document.querySelector('.section__card-content');
// const orangePalette = document.querySelector('.orange-palette');
const porDefecto = document.querySelector('.default');
const orange = document.querySelector('.orange');
const blue = document.querySelector('.blue');

function colorClickO (e){
  const palette = e.target;
    cardContent.classList.add('orange-palette');
    cardContent.classList.remove('default-palette');
    cardContent.classList.remove('blue-palette');
    jason.palette = orange.value;
    console.log(jason);
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

