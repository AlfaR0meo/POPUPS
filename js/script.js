const body = document.body;
const popups = document.querySelectorAll('[data-popup]');
const POPUP_OPEN_CLASS = 'popup--open';
const BODY_LOCK_CLASS = 'body--lock'
const ESC_KEY_EVENT_TYPE = 'keydown';

if (popups.length) {
    popups.forEach(popup => {
        const popupOpenBtn = document.querySelector(`[data-popup-open-btn="${popup.dataset.popup}"]`);
        const popupCloseBtn = popup.querySelector('[data-popup-close-btn]');
    
        function escapePressListener(e) {
            if (e.key === 'Escape') {
                popup.classList.remove(POPUP_OPEN_CLASS);
                body.classList.remove(BODY_LOCK_CLASS);
                window.removeEventListener(ESC_KEY_EVENT_TYPE, escapePressListener);
            }
        }
    
        popupOpenBtn.addEventListener('click', () => {
            popup.classList.add(POPUP_OPEN_CLASS);
            body.classList.add(BODY_LOCK_CLASS);
            window.addEventListener(ESC_KEY_EVENT_TYPE, escapePressListener);
        });
    
        popup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__body')) {
                popup.classList.remove(POPUP_OPEN_CLASS);
                body.classList.remove(BODY_LOCK_CLASS);
                window.removeEventListener(ESC_KEY_EVENT_TYPE, escapePressListener);
            }
            if (e.target === popupCloseBtn) {
                popup.classList.remove(POPUP_OPEN_CLASS);
                body.classList.remove(BODY_LOCK_CLASS);
                window.removeEventListener(ESC_KEY_EVENT_TYPE, escapePressListener);
            }
        });
    });
}