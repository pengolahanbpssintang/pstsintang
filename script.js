document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', function () {
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('show');
    });

    // Close burger menu when a nav link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            burger.setAttribute('aria-expanded', false);
        });
    });
});
