

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

			 // timer
			 function countTimer(deadline) {

        const timeHours = document.querySelector('#timer-hours'),
            timeMinets = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');
        let idInterval;
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 3600);

            // timeInterval = setInterval(updateClock, 1000);

            return { timeRemaining, hours, minutes, seconds };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }

        }

        function updateClock() {
            const timer = getTimeRemaining();

            timeHours.textContent = getZero(timer.hours);
            timeMinets.textContent = getZero(timer.minutes);
            timeSeconds.textContent = getZero(timer.seconds);

            if (timer.timeRemaining  <= 0) {
                timeHours.textContent = "0";
                timeMinets.textContent = "0";
                timeSeconds.textContent = "0";
                return false;

            }
        }

        if (updateClock() !== false) {
            idInterval = setInterval(updateClock, 1000);
        } else {
            clearInterval(idInterval);
        }
    }

    countTimer('15 march 2021');

    // Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu  = document.querySelector('menu');
  
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', event => { 
            let target = event.target;
            if (target.classList.contains('close-btn')) { 
                handlerMenu();
            } else {
                target = target.closest('ul>li>a');//список меню
                if (target) {
									handlerMenu();
								}
            }
        });

    };

    toggleMenu();

    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = popup.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');

        let count = 0;

        const animationgPopup = () => {

            const animateInterval = requestAnimationFrame(animationgPopup);
            count++;

            if (count < 45) {
                popupContent.style.left = count * 14 + 'px';
            } else {
                count = 0;
                cancelAnimationFrame(animateInterval);
            }

            // if (screen.width < 768) {
            //   popupContent.style.display =  'none';
            // 	}
        };

        // let screen = window.matchMedia('(max-width:768px');

        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    animationgPopup();
                }
            });
        });



        popup.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popup.style.display = 'none';
                }
            }

        });


    };

    togglePopup();


    // tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };


        tabHeader.addEventListener('click', event => {

				 let target = event.target;
				 console.log(target);
            target = target.closest('.service-header-tab');
            console.log(target);

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });


            }


        });

    };


    tabs();
});



