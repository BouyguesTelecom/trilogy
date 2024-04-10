export const initTableExpansion = () => {
    let expandableRows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-expandable-row]');
    for (let i = 0; i < expandableRows.length; i++) {
        let expandableRow: HTMLElement = expandableRows[i];
        let trigger: HTMLElement = expandableRow.querySelector('[data-expandable-trigger]');
        trigger.addEventListener('click', function () {
            expandableRow.classList.toggle('is-expanded');
        });
        expandableRow.setAttribute(`data-tableexpansion-initialized`, 'true')
    }
}
