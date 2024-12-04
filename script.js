let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function validateForm() {
  // Отримуємо значення полів
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var question = document.getElementById('question').value;
  
  // Перевірка на наявність цифр в імені
  var namePattern = /^[A-Za-zА-Яа-яЁёіІїЇєЄ' -]+$/;
  if (!namePattern.test(name)) {
      alert("Ім'я не повинно містити цифр.");
      return false;
  }

  // Перевірка на правильність формату пошти
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Будь ласка, введіть правильну електронну пошту.");
      return false;
  }

  // Перевірка, чи введено питання
  if (question.trim() === "") {
      alert("Будь ласка, введіть ваше питання.");
      return false;
  }

  return true; // форма валідна
}