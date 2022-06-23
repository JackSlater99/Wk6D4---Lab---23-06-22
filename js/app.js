document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector("#delete-all");
  deleteButton.addEventListener('click', handleButtonClick)
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const result = document.createElement('li');
  result.innerText = `${this.title.value} \n
  ${this.author.value} \n
  ${this.category.value}
  `
  const list = document.querySelector("#reading-list");
  list.appendChild(result)
  this.reset();
};

const handleButtonClick = function () {
  const list = document.querySelector("#reading-list");
  list.innerHTML = "";
}