$(document).ready(function() {
    // Додаємо обробник події submit для форми
    $('form').submit(function(event) {
        // Запобігаємо стандартній відправці форми
        event.preventDefault();
        
        // Отримуємо значення полів
        var name = $('#name').val();
        var email = $('#email').val();
        var question = $('#question').val();
        
        
        // Очищаємо попередні повідомлення про помилки
        $('.error-message').remove();
        $('input, textarea').css('border-color', '');
        
        // Перевірка валідності
        var isValid = true;

        // --- Перевірка імені ---
        if (/^\s|\s$/.test(name)) {
            showError($('#name'), "Ім'я не повинно починатися або закінчуватися пробілом.");
            isValid = false;
        }
        if (/\s{2,}/.test(name)) {
            showError($('#name'), "Ім'я не повинно містити декілька пробілів підряд.");
            isValid = false;
        }
        if (!/^[A-Za-zА-Яа-яЁёіІїЇєЄ' -]+$/.test(name)) {
            showError($('#name'), "Ім'я не повинно містити цифр та сторонніх символів.");
            isValid = false;
        }
        // if (name.length < 2) {
        //     showError($('#name'), "Ім'я повинно містити не менше 2 символів.");
        //     isValid = false;
        // }

        // --- Перевірка email ---
        if (/\s/.test(email)) {
            showError($('#email'), "Електронна адреса не повинна містити пробілів.");
            isValid = false;
        }
        if (/^\s|\s$/.test(email)) {
            showError($('#email'), "Електронна адреса не повинна починатися або закінчуватися пробілом.");
            isValid = false;
        }
        if (/\s{2,}/.test(email)) {
            showError($('#email'), "Електронна адреса не повинна містити декілька пробілів підряд.");
            isValid = false;
        }
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            showError($('#email'), "Будь ласка, введіть правильну електронну пошту.");
            isValid = false;
        }
        // if (email.toLowerCase().endsWith('.ru')) {
        //     showError($('#email'), "Електронні адреси з доменом .ru не приймаються.");
        //     isValid = false;
        // }

        // --- Перевірка питання ---
        if (/^\s|\s$/.test(question)) {
            showError($('#question'), "Питання не повинно починатися або закінчуватися пробілом.");
            isValid = false;
        }
        // if (question.trim() === "") {
        //     showError($('#question'), "Будь ласка, введіть ваше питання.");
        //     isValid = false;
        // }
        if (question.length < 10) {
            showError($('#question'), "Питання повинно містити не менше 10 символів.");
            isValid = false;
        }
        
        // Перевірка на пробіли на початку/кінці та декілька пробілів підряд в імені
        if (/^\s|\s$/.test(name)) {
            showError($('#name'), "Ім'я не повинно починатися або закінчуватися пробілом.");
            isValid = false;
        }
        if (/\s{2,}/.test(name)) {
            showError($('#name'), "Ім'я не повинно містити декілька пробілів підряд.");
            isValid = false;
        }
        // Перевірка на наявність цифр в імені
        // var namePattern = /^[A-Za-zА-Яа-яЁёіІїЇєЄ' -]+$/;
        // if (!namePattern.test(name)) {
        //     showError($('#name'), "Ім'я не повинно містити цифр.");
        //     isValid = false;
        // }
        // Перевірка на мінімальну довжину імені
        if (name.length < 2) {
            showError($('#name'), "Ім'я повинно містити не менше 2 символів.");
            isValid = false;
        }
        
        // Перевірка на пробіли на початку/кінці та декілька пробілів підряд в email
        if (/^\s|\s$/.test(email)) {
            showError($('#email'), "Електронна адреса не повинна починатися або закінчуватися пробілом.");
            isValid = false;
        }
        if (/\s{2,}/.test(email)) {
            showError($('#email'), "Електронна адреса не повинна містити декілька пробілів підряд.");
            isValid = false;
        }
        // Перевірка на правильність формату пошти
        // var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        // if (!emailPattern.test(email)) {
        //     showError($('#email'), "Будь ласка, введіть правильну електронну пошту.");
        //     isValid = false;
        // }
        
        // Перевірка на домен .ru
        if (email.toLowerCase().endsWith('.ru')) {
            showError($('#email'), "Електронні адреси з доменом .ru не приймаються.");
            isValid = false;
        }
        
        // Перевірка на пробіли на початку/кінці питання
        // if (/^\s|\s$/.test(question)) {
        //     showError($('#question'), "Питання не повинно починатися або закінчуватися пробілом.");
        //     isValid = false;
        // }
        // Перевірка, чи питання не складається лише з пробілів
        // if (question.trim() === "") {
        //     showError($('#question'), "Будь ласка, введіть ваше питання.");
        //     isValid = false;
        // }
        
        // Якщо форма валідна, відправляємо її
        if (isValid) {
            alert("Форму успішно відправлено!");
            this.reset();
        }
    });

    // Функція для показу повідомлення про помилку
    function showError(element, message) {
        element.after('<div class="error-message">' + message + '</div>');
        element.css('border-color', 'red');
        element.off('focus.error').on('focus.error', function() {
            $(this).css('border-color', '');
            $(this).next('.error-message').remove();
        });
    }
});
