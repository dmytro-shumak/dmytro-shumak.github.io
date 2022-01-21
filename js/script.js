const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('active');
});

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
});
})(jQuery);

