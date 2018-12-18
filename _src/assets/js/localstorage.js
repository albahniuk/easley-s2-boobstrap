function createStorage(key, value) {
  localStorage.setItem(key, value);
}

function getStorage(key) {
  return localStorage.getItem(key);
}

localStorage.setItem('dataJason', JSON.stringify(jason));
