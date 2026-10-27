export const initInputIcon = () => {
  const iconsShowPwd = document.querySelectorAll<HTMLElement>("[data-show-pwd]");

  if (iconsShowPwd) {
    iconsShowPwd.forEach((htmlElement: HTMLElement) => {
      const changeIcon = (icon: HTMLElement) => {
        if (icon.classList.contains("tri-eye")) {
          icon.classList.remove("tri-eye");
          icon.classList.add("tri-eye-slash");
        } else {
          icon.classList.remove("tri-eye-slash");
          icon.classList.add("tri-eye");
        }
      };

      const changeTypeInput = (icon: HTMLElement) => {
        const parent = icon.parentNode.parentNode;
        let input = parent.querySelector("input");
        if (!input) input = parent.parentNode.querySelector("input");
        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }
      };

      const handleClickIcon = (e: Event) => {
        const target = e.target as HTMLElement;
        changeIcon(target);
        changeTypeInput(target);
      };
      htmlElement.addEventListener("click", handleClickIcon);
      htmlElement.setAttribute(`data-iconsShowPwd-initialized`, 'true')
    });
  }
};
