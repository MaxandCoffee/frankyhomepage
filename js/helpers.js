export function randomId() {
     return 'a' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function trapFocus(container, AE) {
   
    document.body.classList.add('using-keyboard');
    if (container && AE) {
        var focusableEls = container.querySelectorAll('button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])');

        focusableEls[0].focus();

        container.addEventListener('keydown', handleTrapFocus);

        function handleTrapFocus(e) {

            var isTabPressed = (e.key === 'Tab' || e.keyCode === 9);


            //esc to close
            if (e.key === 'Escape' || e.keyCode === 27) {
                var iconClose = container.querySelector('.js-closeEditor');
                if (iconClose) {
                    iconClose.click();
                } else {
                    container.display = 'none';
                }
                container.removeEventListener('keydown', handleTrapFocus);
                AE.focus();
            } else if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) {
                if (document.activeElement === focusableEls[0]) {
                    focusableEls[focusableEls.length - 1].focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === focusableEls[focusableEls.length - 1]) {
                    focusableEls[0].focus();
                    e.preventDefault();
                }
            }
        }
    }
    
}
