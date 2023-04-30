import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  messageTextarea: document.querySelector('textarea'),
};

const formData = {};
downloadPage();

refs.form.addEventListener('input', throttle(onFormInput, 1000));
refs.form.addEventListener('submit', onFormSubmit);

function downloadPage() {
  const savedMassege = localStorage.getItem('feedback-form-state');

  if (savedMassege) {
    const parceObject = JSON.parse(savedMassege);
    refs.emailInput.value = parceObject.email;
    refs.messageTextarea.value = parceObject.message;
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  const sentData = {
    email,
    message,
  };
  console.log(sentData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
