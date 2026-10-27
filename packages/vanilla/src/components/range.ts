export const initRange = (rangeContainer: HTMLElement) => {

    let HTMLInputRangeMin: HTMLInputElement = rangeContainer.querySelector(".range-cursor-min");
    let HTMLInputRangeMax: HTMLInputElement = rangeContainer.querySelector(".range-cursor-max");
    let track: HTMLDivElement = rangeContainer.querySelector(".range-track");
    let valueMin: HTMLHtmlElement = rangeContainer.querySelector(".range-value-min");
    let valueMax: HTMLHtmlElement = rangeContainer.querySelector(".range-value-max");

    let maxValue = HTMLInputRangeMin.max;
    let gap = 0;

    const setColor = () => {
        let percent1 =
            (Number(HTMLInputRangeMin.value) / Number(maxValue)) * 100;
        let percent2 =
            (Number(HTMLInputRangeMax.value) / Number(maxValue)) * 100;
        track.style.background = `linear-gradient(to right, #E1E1E1 ${percent1}% , #0C7B91 ${percent1}% , #0C7B91 ${percent2}%, #E1E1E1 ${percent2}%) `;
    };

    setColor();

    HTMLInputRangeMin.addEventListener("input", (e: InputEvent) => {
        const event = e.target as HTMLInputElement;
        if (Number(event.value) < Number(HTMLInputRangeMax.value) - gap) {
            HTMLInputRangeMin.value = event.value;
        } else {
            HTMLInputRangeMin.value = String(
                Number(HTMLInputRangeMax.value) - gap
            );
        }
        valueMin.textContent = event.value;
        setColor();
    });

    HTMLInputRangeMax.addEventListener("input", (e: InputEvent) => {
        const event = e.target as HTMLInputElement;
        if (Number(event.value) > Number(HTMLInputRangeMin.value) + gap) {
            HTMLInputRangeMax.value = event.value;
        } else {
            HTMLInputRangeMax.value = String(
                Number(HTMLInputRangeMin.value) + gap
            );
        }
        valueMax.textContent = event.value;
        setColor();
    });
    rangeContainer.setAttribute(`data-ranges-initialized`, 'true')
};
