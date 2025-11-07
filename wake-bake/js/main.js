(function () {
    // Бургер
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

    // Модалка
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

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
        });
    }

    // Табы
    function initTabs() {
        const tabControls = document.querySelector('.tab-controls');
        if (!tabControls) return;

        tabControls.addEventListener('click', toggleTab);

        function toggleTab(e) {
            const tabControl = e.target.closest('.tab-controls__link');
            if (!tabControl) return;

            e.preventDefault();

            if (tabControl.classList.contains('tab-controls__link--active')) return;

            const tabContentID = tabControl.getAttribute('href');
            const tabContent = document.querySelector(tabContentID);
            const activeControl = document.querySelector('.tab-controls__link--active');
            const activeContent = document.querySelector('.tab-content--show');

            if (activeControl) {
                activeControl.classList.remove('tab-controls__link--active');
            }
            if (activeContent) {
                activeContent.classList.remove('tab-content--show');
            }

            tabControl.classList.add('tab-controls__link--active');
            tabContent.classList.add('tab-content--show');
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initModal();
        initTabs();
    });

    // Аккордион

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {
            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;


            if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
                const openedContent = accordionOpenedItem.querySelector('.accordion-list__content');
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                openedContent.style.maxHeight = '';
            }


            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '';
            }
        });
    });

    // Слайдер-галерея

    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    // Слайдер-отзывы

    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        }, 

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }

    });

})();