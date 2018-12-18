//collapsible

const buttonCollapsible = document.querySelectorAll('.collapsible__clickable');
const designContent = document.querySelector('.collapsible__content-design');
const fillContent = document.querySelector('.collapsible__content-fill');
const shareContent = document.querySelector('.collapsible__content-share');

function collapsible(event) {
  const clickableSection = event.currentTarget;
  if (clickableSection.classList.contains('collapsible__design') === true) {
    designContent.classList.toggle('hidden');
  } else if (clickableSection.classList.contains('collapsible__fill') === true) {
    fillContent.classList.toggle('hidden');
  } else {
    shareContent.classList.toggle('hidden');
  }
}
for (let i = 0; i < buttonCollapsible.length; i++) {
  buttonCollapsible[i].addEventListener('click', collapsible);
}
