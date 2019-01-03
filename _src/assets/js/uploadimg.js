//IMAGEN
'use strict';

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
  createStorage('image', `url(${fr.result})`);
}

function fakeFileClick() {
  fileField.click();
}

imageBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

function getImgLocalStorage(){
  if(getStorage('image')) {
    let arrayImg = getStorage('image');
    if(arrayImg !== ''){
      profileImage.style.backgroundImage = arrayImg;
      divPreviewImage.style.backgroundImage = arrayImg;
    }
  }
}

getImgLocalStorage();

// function getjob(){
//   if (getStorage(jobJson)) {
//     let arrayJob = getStorage(jobJson);
//     if (arrayJob !== '') {
//       jobCard.innerHTML = arrayJob;
//       jobField.value = arrayJob;
//     }
//   }
// }
// getjob();
