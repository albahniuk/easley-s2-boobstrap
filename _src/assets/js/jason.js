'use strict';

//Crear JSON VACIO
const jason = {
  "palette": 0,
  "typography": 0,
  "name": "",
  "job": "",
  "phone": "",
  "email": "",
  "linkedin": "",
  "github": "",
  "photo": "",
  "skills": []
};

//Enviar el JSON y devuelve Card
const paintURL = document.querySelector('.getURL');
const btnCrearTarjeta = document.querySelector('.collapsible__content-button');

function send() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(jason),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(urlResponse => urlResponse.json())
    .then(url => {
      paintURL.innerHTML =
        `<p class="twitter-text">La tarjeta ha sido creada:</p>
      <a class="card-link" href="${url.cardURL}" target="_blank">${url.cardURL}</a>
      <a class="link-twitter" href="https://twitter.com/home?status=${url.cardURL}" target="_blank">
      <button class="btn-twitter" type="button"><i class="fab fa-twitter"></i>Compartir en twitter</button></a>`;
      btnCrearTarjeta.style.backgroundColor = '#d5d5d5';
    });
};
btnCrearTarjeta.addEventListener('click', send);

