
import * as components from './components.js';

let elements;
let windowHeight;

function init() {
    elements = document.querySelectorAll('[class*="maxcan_animate"]');
    windowHeight = window.innerHeight;
    
    addListeners();
}

function checkPosition() {
    let timeout = 0;
    if (elements) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const positionFromTop = elements[i].getBoundingClientRect().top;

            timeout += 250;

            if (positionFromTop - windowHeight <= 0) {
                if (element.classList.contains('maxcan_animate-opacity-slideLeft')){
                    setTimeout(function(){
                        element.classList.add('w3-animate-opacity');
                        element.classList.add('w3-animate-left');
                    }, timeout);
                } else if (element.classList.contains('maxcan_animate-slideBottom')){
                    timeout -= 100;
                    setTimeout(function(){
                        element.classList.add('w3-animate-bottom');
                    }, timeout);
                } else if (element.classList.contains('maxcan_animate-opacity-slideRight')) {
                    setTimeout(function(){
                        element.classList.add('w3-animate-opacity');
                        element.classList.add('w3-animate-right');
                    }, timeout);
                }

            }
        }
    }  
}

function addListeners() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
}

setTimeout(function(){
    init();
    checkPosition();
}, 200);

export function reinit(){
    setTimeout(function(){
        init();
        checkPosition();
    }, 200);
}


    

