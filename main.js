const ham = document.querySelector('.fa-bars');
const menu = document.querySelector('.mobile-container');
const x = document.querySelector('.fa-x');
const bars = document.querySelector('.fa-bars');

ham.addEventListener('click', () => {
    menu.classList.toggle('active');
    x.style.display = 'flex';
    x.style.color = '#00d3d7'
    bars.style.display = 'none';
});

x.addEventListener('click', () => {
    menu.classList.toggle('active');
    x.style.display = 'none';
    bars.style.display = 'flex';
})