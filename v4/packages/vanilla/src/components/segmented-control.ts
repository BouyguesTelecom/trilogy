export const initSegmentedControl = () => {
  const HTMLButtons = document.querySelectorAll(".segmented-control-item");

  HTMLButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", function () {
      this.parentElement
        .querySelector(".is-active")
        .classList.remove("is-active");

      if (!button.classList.contains("is-active")) {
        button.classList.add("is-active");
      }
    });
    button.setAttribute(`data-segmentedControl-initialized`, 'true')
  });
};
