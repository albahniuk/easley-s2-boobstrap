//IMAGEN

const fr = new FileReader();
const imageBtn = document.querySelector('.btn--img');
const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.profile-pic');
const divPreviewImage = document.querySelector('.uploadFile');

function getImage(e) {
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
