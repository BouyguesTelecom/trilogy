export const initSticky = () => {
    const navbar = document.querySelector('.navbar');

    const myObserverCallback: any = (event: any) => {
        navbar.classList.toggle('enable-transition', event.intersectionRatio < 1);
        setTimeout(() => {
            event.target.parentNode.classList.toggle('is-sticky', event.intersectionRatio < 1)
        }, 100);
    };

    let observer = new IntersectionObserver(myObserverCallback, { threshold: 1 });
    observer.observe(navbar);

};
