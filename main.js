
const color = document.getElementById('colorPicker');

const navColor = document.querySelector('.navColor');

navColor.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color.value;
});

