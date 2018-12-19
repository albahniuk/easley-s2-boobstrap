'use strict';
//NOMBRE Y PUESTO
const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');
const nameJson = 'name';
const jobJson = 'job';

nameField.addEventListener('keyup', changeName);


function getname() {
  if (getStorage(nameJson)) {
    let arrayName = getStorage(nameJson);
    if (arrayName !== '') {
      nameCard.innerHTML = arrayName;
    }
  }
}
getname();

function changeName(e) {
  getname();
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
  jason.name = nameField.value;
  createStorage(nameJson, nameField.value);
}

function getjob(){
  if (getStorage(jobJson)) {
    let arrayJob = getStorage(jobJson);
    if (arrayJob !== '') {
      puestoCard.innerHTML = arrayJob;
    }
  }
}
getjob();

function changeJob (e){
  getjob();
  const preview = e.currentTarget;
  puestoCard.innerHTML = preview.value;
  jason.job = puestoField.value;
  createStorage(jobJson, puestoField.value);
}

puestoField.addEventListener('keyup', changeJob);
