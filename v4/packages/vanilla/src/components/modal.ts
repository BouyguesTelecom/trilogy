export const initModals = () => {

    let modalContexts: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal-context]');

    for (let i = 0; i < modalContexts.length; i++) {
        let modalContext: HTMLElement = modalContexts[i];

        let modalOpenButtons: NodeListOf<HTMLElement> = modalContext.querySelectorAll('[data-modal-open]');
        let modalElement: HTMLElement = modalContext.querySelector('[data-modal]');
        let modalCloseButtons: NodeListOf<HTMLElement> = modalContext.querySelectorAll('[data-modal-close]');
        let modalVideos: NodeListOf<HTMLVideoElement> = modalContext.querySelectorAll('iframe[src*="www.youtube.com"], iframe[src*="player.vimeo.com"], video');

        for (let j = 0; j < modalOpenButtons.length; j++) {
            let modalOpenButton = modalOpenButtons[j];
            let modalVideo: HTMLVideoElement = modalVideos[j];

            modalOpenButton.addEventListener('click', function () {
                makeModalActive(modalElement);
                if (!modalVideo) {
                    return;
                } else {
                    if (modalVideo.tagName.toLowerCase() === 'video') {
                        modalVideo.play();
                        return;
                    }
                    modalVideo.src = modalVideo.src + (modalVideo.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1';
                }
            });
        }

        for (let j = 0; j < modalCloseButtons.length; j++) {
            let modalCloseButton = modalCloseButtons[j];
            modalCloseButton.addEventListener('click', function () {
                makeModalInactive(modalElement);
            });
        }

        initClosingListeners(modalElement);

        // TODO: supprimer en 1.0.0
        // rétrocompatibilité : fermeture de la modal en cliquant n'importe où
        const background: HTMLElement = modalContext.querySelector('.modal-background');
        if (background) {
            background.onclick = function () {
                makeModalInactive(modalElement);
            }
        }
        modalContext.setAttribute(`data-modal-initialized`, 'true')
    }

    /**
     * Initialise l'écoute des événements permettant de fermer une modale
     */
    function initClosingListeners(modalElement: HTMLElement) {
        document.addEventListener('keyup', function (e: any) {
            e = e || window.event;
            var isEscape = false;
            if ('key' in e) {
                isEscape = (e.key === 'Escape' || e.key === 'Esc');
            } else {
                isEscape = (e.keyCode === 27);
            }
            if (isEscape) {
                makeModalInactive(modalElement);
            }
        });

        document.addEventListener('click', function (e: MouseEvent) {
            const target = e.target as HTMLInputElement
            let modalContent = target.closest('[data-modal-content]');
            let isModal = target.classList.contains('modal');
            if (modalContent === null && isModal == true) {
                makeModalInactive(modalElement);
            }
        });
    }

    /**
     * Make an element active
     * @param { Element } modalElementToMakeActive element to be made active
     */
    const makeModalActive = (modalElementToMakeActive: HTMLElement) => {
        modalElementToMakeActive.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    };

    /**
     * Make an element inactive
     * @param { Element } modalElementToMakeInactive element to be made inactive
     */
    const makeModalInactive = (modalElementToMakeInactive: HTMLElement) => {
        let video: HTMLVideoElement = modalElementToMakeInactive.querySelector('iframe[src*="youtube"], iframe[src*="vimeo"], video');
        if (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
                return;
            }
            video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '');
        }
        modalElementToMakeInactive.classList.remove('is-active');
        document.body.style.overflow = null;
    };

};
