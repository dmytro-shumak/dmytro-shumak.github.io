const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  menuLink = document.querySelectorAll(".menu__link"),
  closeMenu = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

const percents = document.querySelectorAll(".percent"),
  lines = document.querySelectorAll(".range__filled");

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

(function ($) {
  $(function () {
    $(".modal__close").on("click", function () {
      $(".overlay, #thanks").fadeOut("slow");
    });
    $("form").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        // text: "required",
        email: {
          required: true,
          email: true,
        },
        check: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please, enter your name",
          minlength: jQuery.validator.format("Enter {0} characters!"),
        },
        email: {
          required: "Please, enter your email",
          email: "Email address entered incorrectly",
        },
        check: {
          required: "Need to accept agreement",
        },
      },
    });
    $("form").submit(function (e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize(),
      }).done(function () {
        $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        $(".overlay, #thanks").fadeIn("slow");

        $("form").trigger("reset");
      });
      return false;
    });

    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      }
    });
  });
  if (!("ontouchstart" in window)) {
    window.addEventListener("scroll", () => {
      const sidePanel = document.querySelector(".sidepanel");
      const self = document.querySelector(".self");
      console.log(sidePanel.getBoundingClientRect());
      if (
        self.getBoundingClientRect().y - sidePanel.getBoundingClientRect().top <
        0
      ) {
        sidePanel.classList.add("dark");
      } else {
        sidePanel.classList.remove("dark");
      }
    });
  }
})(jQuery);
