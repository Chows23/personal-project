
const color = document.getElementById('colorPicker');

const navColor = document.querySelector('.navColor');
const footerColor = document.querySelector('.footerColor');

navColor.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color.value;
});

footerColor.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color.value;
});
