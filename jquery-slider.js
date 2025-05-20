$(document).ready(function() {
    // Перевіряємо, чи є слайди на сторінці
    if ($('.mySlides').length === 0) return;
    
    // Спочатку сховаємо всі слайди, крім першого
    $('.mySlides:not(:first)').hide();
    $('.mySlides:first').show(); // Переконуємось, що перший слайд видно
    
    // Змінні для автоматичного перегортання
    let slideIndex = 0;
    const slides = $('.mySlides');
    const slideCount = slides.length;
    let slideTimer;
    let animating = false; // Флаг для запобігання накладанню анімацій
    
    // Функція для показу наступного слайду
    function showNextSlide() {
        if (animating) return; // Якщо анімація вже виконується, не робимо нічого
        animating = true;
        
        slides.eq(slideIndex).fadeOut(400, function() {
            slideIndex = (slideIndex + 1) % slideCount;
            slides.eq(slideIndex).fadeIn(400, function() {
                animating = false; // Анімація завершена
            });
        });
    }
    
    // Функція для показу попереднього слайду
    function showPrevSlide() {
        if (animating) return; // Якщо анімація вже виконується, не робимо нічого
        animating = true;
        
        slides.eq(slideIndex).fadeOut(400, function() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            slides.eq(slideIndex).fadeIn(400, function() {
                animating = false; // Анімація завершена
            });
        });
    }
    
    // Запускаємо автоматичне перегортання
    function startSlideTimer() {
        slideTimer = setInterval(showNextSlide, 3000);
    }
    
    // Зупиняємо автоматичне перегортання при наведенні на слайдер
    $('.slideshow-container').hover(
        function() { clearInterval(slideTimer); },
        function() { startSlideTimer(); }
    );
    
    // Обробники кліків на стрілки
    $('.next').click(function() {
        clearInterval(slideTimer);
        showNextSlide();
        startSlideTimer();
    });
    
    $('.prev').click(function() {
        clearInterval(slideTimer);
        showPrevSlide();
        startSlideTimer();
    });
    
    // Запускаємо таймер
    startSlideTimer();
    
    // Додаємо стилі для стрілок
    $('.prev, .next').css({
        'cursor': 'pointer',
        'position': 'absolute',
        'top': '50%',
        'width': 'auto',
        'margin-top': '-22px',
        'padding': '16px',
        'color': 'white',
        'font-weight': 'bold',
        'font-size': '18px',
        'transition': '0.6s ease',
        'border-radius': '0 3px 3px 0',
        'user-select': 'none',
        'background-color': 'rgba(0,0,0,0.3)'
    });
    
    $('.next').css({
        'right': '10%',
        'border-radius': '3px 0 0 3px'
    });
    
    $('.prev').css({
        'left': '10%'
    });
    
    $('.slideshow-container').css({
        'position': 'relative',
        'margin': 'auto'
    });
});
