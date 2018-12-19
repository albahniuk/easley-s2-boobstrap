//LINKS MEDIA

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

}

phoneOrigin.addEventListener('keyup', writeMe);
mailOrigin.addEventListener('keyup', writeMe);
linkOrigin.addEventListener('keyup', writeMe);
gitOrigin.addEventListener('keyup', writeMe);
