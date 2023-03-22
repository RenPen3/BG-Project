const ham = document.querySelector('.fa-bars');
const menu = document.querySelector('.mobile-container');
const x = document.querySelector('.fa-x');
const bars = document.querySelector('.fa-bars');

ham.addEventListener('click', () => {
    menu.classList.toggle('active');
    x.style.display = 'flex';
    bars.style.display = 'none';
});

x.addEventListener('click', () => {
    menu.classList.toggle('active');
    x.style.display = 'none';
    bars.style.display = 'flex';
})