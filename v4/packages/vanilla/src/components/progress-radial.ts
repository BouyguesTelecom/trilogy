export const initProgressRadial = (progressRadial: HTMLElement) => {
    const isInitialized = progressRadial.getAttribute('data-progress-radial-initialized');
    if (!isInitialized) {
        let firstProgressValueMax: number = Number(progressRadial.getAttribute('data-progress-radial-first-value'));
        let secondProgressValueMax: number = Number(progressRadial.getAttribute('data-progress-radial-second-value'));
        let backgroundStyle: string = '';

        let firstProgressCurrentValue: number = 0;
        let secondProgressCurrentValue: number = 0;

        // If second value does not exist
        if (secondProgressValueMax === 0) {
            const animation = setInterval(() => {
                if (firstProgressCurrentValue !== firstProgressValueMax) {
                    firstProgressCurrentValue += 1;
                } else {
                    clearInterval(animation);
                }
                backgroundStyle = `radial-gradient(white 58%, transparent 51%),
                                       conic-gradient(#0C7B91 0deg ${(360 * (firstProgressCurrentValue / 100))}deg, 
                                                  gainsboro ${(360 * (firstProgressCurrentValue / 100))}deg 360deg)`;
                progressRadial.style.background = backgroundStyle;
            }, 13);
        } else {
            secondProgressValueMax += firstProgressValueMax;
            const animation = setInterval(() => {
                if (firstProgressCurrentValue < firstProgressValueMax) {
                    firstProgressCurrentValue += 1;
                }
                if (secondProgressCurrentValue < secondProgressValueMax) {
                    secondProgressCurrentValue += 1;
                } else {
                    clearInterval(animation);
                }
                backgroundStyle = `radial-gradient(white 58%, transparent 51%),
                                       conic-gradient(#0C7B91 0deg ${(360 * (firstProgressCurrentValue / 100))}deg,
                                                   #25465f ${(360 * (firstProgressCurrentValue / 100))}deg ${(360 * (secondProgressCurrentValue / 100))}deg,
                                                   gainsboro ${(360 * (secondProgressCurrentValue / 100))}deg 360deg)`;
                progressRadial.style.background = backgroundStyle;
            }, 13);
        }

        progressRadial.setAttribute('data-progress-radial-initialized', 'true');
    }
};
