// Auto Text Changer Functionality

const textTyper = document.querySelector('.textTyper');

const autoTextChanger = () => {

    setTimeout(() => {
        textTyper.innerHTML = "Analista De Suporte";
    }, 0);

    setTimeout(() => {
        textTyper.innerHTML = "Estudande de Redes de Computadores";
    }, 5000);

    setTimeout(() => {
        textTyper.innerHTML = "DevOps Jr";
    }, 10000);
}

autoTextChanger();
setInterval(autoTextChanger, 20000);

// Theme Changing Functionality
const theme_btn = document.querySelector('.theme_btn');
const themeBtnToggle = document.querySelector('.themeBtnToggle');
const themeIcon = document.querySelector('.themeIcon');
const logoImg = document.querySelector('.logoImg');

theme_btn.onclick = () => {

    themeBtnToggle.classList.toggle('active');

    if(themeBtnToggle.classList.contains('active')) {

        logoImg.src = 'img/logo-jc-trasnp.png';
        themeIcon.src = 'img/moon.png';
        document.body.classList.add('active');
    }else {

        logoImg.src = 'img/logo-jc-trasnp.png';
        themeIcon.src = 'img/sun.png';
        document.body.classList.remove('active');
    }
}



// Rsponsive Menu Sliding Functionality
const toggleMenu = document.querySelector('.toggleMenu');
const all_line = document.querySelectorAll('.line');

const nav_right = document.querySelector('.nav_right');

toggleMenu.onclick = () => {

    all_line.forEach(forAllLines => {

        forAllLines.classList.toggle('active');

        if(forAllLines.classList.contains('active')) {

            nav_right.classList.add('active');
        }else {

            nav_right.classList.remove('active');
        }
    })

}

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});
