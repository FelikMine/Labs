const input = document.getElementById('newTask')
input.addEventListener("change", updateValue);

const newTask = document.querySelector('.main__list__task p')
// console.log(newTask);

function updateValue(v) {
  newTask.textContent = v.target.value;
}
