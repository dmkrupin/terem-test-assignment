const formElement = document.querySelector('.form');

const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formElement);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    displayFormData(json);
};

function displayFormData (json) {
    const formDataElement = document.createElement('p');
    formDataElement.classList.add('lead');
    formDataElement.textContent = json;
    formElement.insertAdjacentElement('beforeend', formDataElement);
    // formElement.removeEventListener('submit', onFormSubmit);
};

formElement.addEventListener('submit', onFormSubmit);

fetch('server.js')
  .then(response => {
      if (response.ok) {
          alert('response is ok!');
      }
  })
  .catch((err) => console.log(err));
