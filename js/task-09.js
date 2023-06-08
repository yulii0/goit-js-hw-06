const colorText = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click',onClick);
function onClick(evt){
  const randomColor = getRandomHexColor();
  colorText.textContent = `${randomColor}`
  document.body.style.backgroundColor = `${randomColor}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




