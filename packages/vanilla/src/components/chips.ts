const _resetChips = (chipsList: any) => {
    chipsList.forEach((chips: any) => {
        chips.classList.remove('is-active');
    })
}

export const initChips = () => {
    const allChipsLists = document.querySelectorAll(".chips-list");

    allChipsLists.forEach((chipsList: any) => {
        const isInitialized = chipsList.getAttribute('data-chips-initialized');
        if (!isInitialized) {
            const chips = chipsList.querySelectorAll('.chips');
            const isMultiple = chipsList.classList.contains('is-multiple');
            chips.forEach((chip: HTMLElement) => {
                if (!chip.classList.contains('is-disabled')) {
                    chip.addEventListener("click", function () {
                        if (!isMultiple) {
                            _resetChips(chips);
                        }
                        chip.classList.toggle('is-active');
                    });
                }
            });
            chipsList.setAttribute('data-chips-initialized', 'true');
        }
    });
};
