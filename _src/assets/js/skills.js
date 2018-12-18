//SKILLS
// Llamar a la Api de las Skills + añadir a la local storage
const webApi = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
const skillsCont = document.querySelector('.container__skills');
const keyStorage = 'skills';

function writeList(skillsCont, arraySkills) {
  for (let i = 0; i < arraySkills.length; i++) {
    skillsCont.innerHTML += `<label for="${arraySkills[i]}" class= "input-skills"> <input class="maxCheck" id="${arraySkills[i]}" type="checkbox"  value="${arraySkills[i]}" name="skills">${arraySkills[i]}</label>`;
  }
}

function getList() {
  if (getStorage(keyStorage)) {
    let arraySkills = JSON.parse(getStorage(keyStorage));
    writeList(skillsCont, arraySkills);
  } else {
    fetch(webApi)
      .then(response => response.json())
      .then(data => {
        let arraySkills = data.skills;
        writeList(skillsCont, arraySkills);
        createStorage(keyStorage, JSON.stringify(arraySkills));
      }
      );
  }
}

function createStorage(key, value) {
  localStorage.setItem(key, value);
}

function getStorage(key) {
  return localStorage.getItem(key);
}

getList(webApi);

//Aqui viene lo chungo: que se pinten en la tarjeta solo una vez y se
// quite sin rechistar
const skillDest = document.querySelector('.skills__list');
const skillOrigin = document.querySelectorAll('.input-skills');

for (const s of skillOrigin) {
  s.addEventListener('change', checkInputs);
}

// Funcion manejadora del evento click de cada input
// que deshabilita y habilita los checkboxes en función del número de checkboxes checked.
function checkInputs(event) {
  //aqui se crea la lista de la Card
  let cardList = document.createElement('li');
  cardList.className = `skill list__item--${this.innerText}`;
  let cardElement = document.createTextNode(`${this.innerText}`);
  cardList.appendChild(cardElement);
  let cardElementSpecific = document.querySelector(`.list__item--${this.innerText}`);

  //Empieza la fiesta
  if (jason.skills.length < 3 && event.target.checked === true) {
    console.log('Se ha añadido correctamente');
    skillDest.appendChild(cardList);
    jason.skills.push(event.currentTarget.innerText);
    console.log(jason.skills);

  } else {
    console.log('Se ha borrado correctamente');
    event.target.checked = false;

    //AQUI MIRAMOS SI ESTABA DENTRO DE LA LISTA DE LA CARD Y LO BORRAMOS
    if (cardElementSpecific) {
      skillDest.removeChild(cardElementSpecific);
      jason.skills.splice(jason.skills.indexOf(event.target.innerText), 1);
    }
  }
  console.log(jason.skills);

  //Si la lista de inputs seleccionados es igual o mayor a 3, tenemos que deshabilitar los inputs no seleccionados y sino,
  //habilitamos los inputs no seleccionados.
  if (jason.skills.length >= 3) {
    for (let i = 0; i < jason.skills.length; i++) {
      skillOrigin[i].disabled = true;
    }
  } else { //habilito otra vez todos los inputs porque ya no tengo 3 opciones seleccionadas
    for (let i = 0; i < jason.skills.length; i++) {
      skillOrigin[i].disabled = false;
    }
  }
}
