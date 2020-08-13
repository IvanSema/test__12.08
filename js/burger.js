const burger = document.querySelector('.menu__burger'),
wrapper = document.querySelector('.burger-menu__wrapper');

burger.addEventListener('click', () => {
    wrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
})

wrapper.addEventListener('click', (event) => {
    const target = event.target;
    
    if(target.classList.contains('burger-menu__wrapper')){
        wrapper.classList.remove('active')
        document.body.style.overflow = '';
    }
})