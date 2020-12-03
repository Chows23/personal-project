
const color = document.getElementById('colorPicker');

const navColor = document.querySelector('.navColor');
const footerColor = document.querySelector('.footerColor');

const deleteBtn = document.querySelector('.delete');
const mottoText = document.querySelector('.mottoText');
const input = document.querySelector('.newMotto');

deleteBtn.addEventListener('click', function(event) {
  console.log("deletebtn");
  input.value = '';
})

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      mottoText.innerHTML = input.value;
      input.value = '';
    }
  }
});

navColor.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color.value;
});

footerColor.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color.value;
});
