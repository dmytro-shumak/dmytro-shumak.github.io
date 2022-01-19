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

