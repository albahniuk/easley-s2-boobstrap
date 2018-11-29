'use strict';
const nameField = document.querySelector('#name');
const nameCard = document.querySelector('.h1-description');
nameField.addEventListener('keyup', function(e){

  const preview = e.currentTarget;

  nameCard.innerHTML = preview.value;

});
