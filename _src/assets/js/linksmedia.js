//LINKS MEDIA
'use strict';

const phoneOrigin = document.querySelector('#phone');
const phoneDest = document.querySelector('.contact-list__tlf');
const mailOrigin = document.querySelector('#email');
const mailDest = document.querySelector('.contact-list__mail');
const linkOrigin = document.querySelector('#linkedin');
const linkDest = document.querySelector('.contact-list__linkedin');
const gitOrigin = document.querySelector('#github');
const gitDest = document.querySelector('.contact-list__github');

function writeMe(e) {
  const author = e.currentTarget.value;
  const destCommon = e.currentTarget.getAttribute('data-common');
  const destIco = e.currentTarget.getAttribute('data-ico');
  const dataDest = e.currentTarget.getAttribute('data-dest');
  document.querySelector(dataDest).innerHTML = `<a class="link-media" href="${destCommon}${author}"><i class="${destIco}"></i></a>`;
  jason.phone = phoneOrigin.value;
  jason.email = mailOrigin.value;
  jason.linkedin = linkOrigin.value;
  jason.github = gitOrigin.value;
  createStorage('phone', phoneOrigin.value);
  createStorage('email', mailOrigin.value);
  createStorage('linkedin', linkOrigin.value);
  createStorage('github', gitOrigin.value);

}

phoneOrigin.addEventListener('keyup', writeMe);
mailOrigin.addEventListener('keyup', writeMe);
linkOrigin.addEventListener('keyup', writeMe);
gitOrigin.addEventListener('keyup', writeMe);

//SE IMPRIME EN LA TARJETA PERO ENTERO
// function getPhone(){
//   if (getStorage('phone')) {
//     let arrayPhone = getStorage('phone');
//     if (arrayPhone !== '') {
//       phoneDest.innerHTML = arrayPhone;
//     }
//   }
// }
// getPhone();


// function getEmail(){
//   if (getStorage('email')) {
//     let arrayEmail = getStorage('email');
//     if (arrayEmail !== '') {
//       mailDest.innerHTML = arrayEmail;
//     }
//   }
// }
// getEmail();

// function getGithub(){
//   if (getStorage('github')) {
//     let arrayGithub = getStorage('github');
//     if (arrayGithub !== '') {
//       gitDest.innerHTML = arrayGithub;
//     }
//   }
// }
// getGithub();

// function getLinkedin(){
//   if (getStorage('linkedin')) {
//     let arrayLinkedin = getStorage('linkedin');
//     if (arrayLinkedin !== '') {
//       linkDest.innerHTML = arrayLinkedin;
//     }
//   }
// }
// getLinkedin();
