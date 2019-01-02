'use strict';
//NOMBRE Y PUESTO
const nameField = document.querySelector('#name');
const jobField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const jobCard = document.querySelector('.text-description');
const nameJson = 'name';
const jobJson = 'job';


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
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
  jason.name = nameField.value;
  createStorage(nameJson, nameField.value);
}

function getjob(){
  if (getStorage(jobJson)) {
    let arrayJob = getStorage(jobJson);
    if (arrayJob !== '') {
      jobCard.innerHTML = arrayJob;
    }
  }
}
getjob();

function changeJob (e){
  const preview = e.currentTarget;
  jobCard.innerHTML = preview.value;
  jason.job = jobField.value;
  createStorage(jobJson, jobField.value);
}

nameField.addEventListener('keyup', changeName);
jobField.addEventListener('keyup', changeJob);
