document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

 
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageTextarea.value = message;
  }


  form.addEventListener('input', function () {
    const data = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  });


  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

    
    if (email && message) {
      console.log({ email, message }); 
      localStorage.removeItem('feedback-form-state'); 
      form.reset(); 
    }
  });
});
