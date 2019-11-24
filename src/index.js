import './scss/base.scss';
import axialslider from './utils/axialslider';

let menu_is_open = false;

if ( !window.requestAnimationFrame ) {
	window.requestAnimationFrame = ( function() {
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
			window.setTimeout( callback, 1000 / 60 );
		};
	} )();
}

window.openMenu = async function (event) {
    event.preventDefault();
    if (menu_is_open) {
        document.querySelector('.side-menu').classList.add('side-menu_closing');
        await new Promise(resolve => setTimeout(resolve, 800));
        document.querySelector('.side-menu').classList.remove('side-menu_closing');
        document.querySelector('.side-menu').classList.remove('side-menu_active');
    } else {
        document.querySelector('.side-menu').classList.add('side-menu_active');
    }
    menu_is_open = !menu_is_open;
};

window.openPopup = async function (event) {
    event.preventDefault();

    let els = document.querySelectorAll('.header__button_active');
    if (els.length > 0) {
        els[0].classList.add('header__button_closing');
        await new Promise(resolve => setTimeout(resolve, 400));
        els[0].classList.remove('header__button_active');
        els[0].classList.remove('header__button_closing');
    }

    let targetElement = event.target.nextSibling.nextSibling;
    targetElement.classList.add('header__button_active');
}

window.addEventListener('load', function () {
    axialslider({class: 'wd-slider'});
});