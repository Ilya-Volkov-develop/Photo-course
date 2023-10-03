//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menyBody = document.querySelector('.menu__body');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        // document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menyBody.classList.toggle('_active');
    })
}

//Прокрутка при клике на меню
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuLimkClick);
    });

    function onMenuLimkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if(iconMenu.classList.contains('_active')){
                iconMenu.classList.remove('_active');
                menyBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.perventDefalt();
        } else {
            if(iconMenu.classList.contains('_active')){
                iconMenu.classList.remove('_active');
                menyBody.classList.remove('_active');
            }
        }
    }
}

//Обработка нажатия на кропку "записаться"
function buttonClick(){
    var span_Text = document.querySelector('.email-footer__button > span');
    var email = document.querySelector('.email-footer__input').value;
    console.log(email)
    if (email != ''){
        span_Text.innerHTML = "Спасибо!"
    }
    
}