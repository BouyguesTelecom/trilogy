export const initTextarea = () => {
    const textareaWrappers = document.querySelectorAll(".textarea-wrapper");
    textareaWrappers.forEach((textareaWrapper: HTMLElement) => {
        const isInitialized = textareaWrapper.getAttribute('data-textarea-initialized');
        if(!isInitialized) {
            const textarea: HTMLTextAreaElement = textareaWrapper.querySelector('textarea.textarea');

            const counterMaxLength = textarea.getAttribute('maxlength');
            if (counterMaxLength) {
                var currentLength = 0;
                const counter = document.createElement('div');
                counter.classList.add('counter');
                counter.innerHTML = `${currentLength}/${counterMaxLength}`;
                textareaWrapper.appendChild(counter);

                textarea.addEventListener("input", function (e) {
                    currentLength = this.value.length;
                    counter.innerHTML = `${currentLength}/${counterMaxLength}`;
                    if(currentLength === 10) {
                        e.preventDefault();
                    }
                });
            }
            textareaWrapper.setAttribute('data-textarea-initialized', 'true');
        }
    });
};
