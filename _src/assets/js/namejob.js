//NOMBRE Y PUESTO
const nameField = document.querySelector('#name');
const puestoField = document.querySelector('#puesto');
const nameCard = document.querySelector('.h1-description');
const puestoCard = document.querySelector('.text-description');
const nameJson = 'name';
const jobJson = 'job';

nameField.addEventListener('keyup', function (e) {
  const preview = e.currentTarget;
  nameCard.innerHTML = preview.value;
  jason.name = nameField.value;
  createStorage(nameJson, nameField.value);
});

puestoField.addEventListener('keyup', (e) => {
  const preview = e.currentTarget;
  puestoCard.innerHTML = preview.value;
  jason.job = puestoField.value;
  createStorage(jobJson, puestoField.value);
});