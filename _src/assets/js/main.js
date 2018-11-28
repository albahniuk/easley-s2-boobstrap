'use strict';
const nameField = document.querySelector('#name');
const nameCard = document.querySelector('.h1-description');
nameField.addEventListener('keyup', function(e){

  const autor = e.currentTarget;

  nameCard.innerHTML = autor.value;

});
