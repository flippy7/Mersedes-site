// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
function validateForm() {
  // Отримуємо значення полів
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var question = document.getElementById('question').value;
  
  // Очищаємо попередні помилки
  clearErrors();
  
  // Прапорець валідності форми
  var isValid = true;
  
  // --- Валідація імені ---
  if (name.trim() === "") {
    showError('name', "Будь ласка, введіть ваше ім'я");
    isValid = false;
  } else if (name.length < 2) {
    showError('name', "Ім'я повинно містити щонайменше 2 символи");
    isValid = false;
  } else if (!/^[A-Za-zА-Яа-яЁёіІїЇєЄ' -]+$/.test(name)) {
    showError('name', "Ім'я повинно містити лише літери, апостроф, дефіс та пробіли");
    isValid = false;
  } else if (/\s{2,}/.test(name)) {
    showError('name', "Ім'я не повинно містити декілька пробілів підряд");
    isValid = false;
  }
  
  // --- Валідація електронної пошти ---
  if (email.trim() === "") {
    showError('email', "Будь ласка, введіть вашу електронну пошту");
    isValid = false;
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
    showError('email', "Будь ласка, введіть коректну електронну пошту");
    isValid = false;
  } else if (email.toLowerCase().endsWith('.ru')) {
    showError('email', "Електронні адреси з доменом .ru не приймаються");
    isValid = false;
  }
  
  // --- Валідація питання ---
  if (question.trim() === "") {
    showError('question', "Будь ласка, введіть ваше питання");
    isValid = false;
  } else if (question.length < 10) {
    showError('question', "Питання повинно містити щонайменше 10 символів");
    isValid = false;
  } else if (question.length > 500) {
    showError('question', "Питання не повинно перевищувати 500 символів");
    isValid = false;
  }
  
  // Якщо форма валідна, показуємо повідомлення про успіх
  if (isValid) {
    // Імітуємо відправку форми
    showSuccessMessage();
    // Очищаємо форму
    document.getElementById('contactForm').reset();
  }
  
  return isValid;
}

// Функція для показу повідомлення про помилку
function showError(fieldId, message) {
  var field = document.getElementById(fieldId);
  
  // Додаємо червону рамку до поля
  field.style.borderColor = '#ff3333';
  
  // Створюємо елемент з повідомленням про помилку
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  
  // Вставляємо повідомлення після поля
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
  
  // Додаємо обробник події focus для очищення помилки при фокусі на полі
  field.addEventListener('focus', function() {
    this.style.borderColor = '';
    if (this.nextSibling && this.nextSibling.className === 'error-message') {
      this.parentNode.removeChild(this.nextSibling);
    }
  });
}

// Функція для очищення всіх помилок
function clearErrors() {
  // Очищаємо червоні рамки
  var inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.borderColor = '';
  }
  
  // Видаляємо повідомлення про помилки
  var errorMessages = document.querySelectorAll('.error-message');
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].parentNode.removeChild(errorMessages[i]);
  }
}

// Функція для показу повідомлення про успішну відправку
function showSuccessMessage() {
  // Створюємо елемент повідомлення
  var successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
  successDiv.style.color = 'white';
  successDiv.style.padding = '15px';
  successDiv.style.borderRadius = '5px';
  successDiv.style.marginTop = '20px';
  successDiv.style.textAlign = 'center';
  successDiv.textContent = 'Дякуємо! Ваше повідомлення успішно відправлено.';
  
  // Вставляємо повідомлення після форми
  var form = document.getElementById('contactForm');
  form.parentNode.insertBefore(successDiv, form.nextSibling);
  
  // Видаляємо повідомлення через 5 секунд
  setTimeout(function() {
    if (successDiv.parentNode) {
      successDiv.parentNode.removeChild(successDiv);
    }
  }, 5000);
}