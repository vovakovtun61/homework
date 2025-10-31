(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
            
        }




    }

})()
/* ========================================================================== */


function initModal() {
    const modal = document.querySelector('.modal');
    const openButtons = document.querySelectorAll('.about__img-button');
    const closeButton = document.querySelector('.modal__cancel');
    
    if (!modal) return;
    
    function openModal(e) {
        if (e) e.preventDefault();
        modal.style.display = 'flex';
        document.body.classList.add('body--opened-modal');
        setTimeout(() => modal.style.opacity = '1', 10);
    }
    
    function closeModal(e) {
        if (e) e.preventDefault();
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('body--opened-modal');
        }, 600);
    }
    
    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });
}

document.addEventListener('DOMContentLoaded', initModal);