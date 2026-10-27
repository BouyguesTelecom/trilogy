type functionToPlayType = (htmlElement: HTMLElement) => void;

export const intersectionObserver = (elementToObserve: HTMLElement, functionToPlay: functionToPlayType) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                functionToPlay(entry.target);
            }
        });
    });

    observer.observe(elementToObserve);
}
