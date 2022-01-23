const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu__link'),
    closeMenu = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('active');
});

menuLink.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
})

const percents = document.querySelectorAll('.percent'),
    lines = document.querySelectorAll('.range__filled');

percents.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
});



(function($) {
    $(function() {
      $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
      });
        $('form').validate({
            rules:{
                name:  {
                  required: true,
                  minlength: 2
                },
                // text: "required",
                email: {
                  required: true,
                  email: true
                },
                check: {
                    required: true
                }
            },
            messages: {
              name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              },
              check: {
                required: "Нужно дать согласия",
              }
            }
            });
        $('form').submit(function(e) {
            e.preventDefault();
      
            if(!$(this).valid()) {
              return;
            }
      
            $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: $(this).serialize()
            }).done(function() {
              $(this).find("input").val("");
              // $('#consultation, #order').fadeOut();
              $('.overlay, #thanks').fadeIn('slow');
              
              $('form').trigger('reset');
            });
            return false;
          });
          
          $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              const hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            }
          });
});
})(jQuery);

