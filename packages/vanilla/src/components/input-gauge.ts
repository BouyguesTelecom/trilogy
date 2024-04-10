interface IVerifies {
  [key: string]: { fn: (e: string) => boolean; ref: HTMLElement };
}

export const initInputGauge = () => {
  const pwdInput = document.querySelectorAll<HTMLElement>("[data-has-gauge]");

  if (pwdInput) {
    pwdInput.forEach((htmlElement: HTMLElement) => {
      const green: string = "#007B52";
      const grey: string = "#707070";
      const red: string = "#D42D02";
      const yellow: string = "#FFBB33";

      const input = htmlElement.querySelector("input") as HTMLElement;
      const gauge = htmlElement.querySelector("[data-gauge]") as HTMLElement;
      const min = htmlElement.querySelector("[data-length-min]")?.getAttribute("data-length-min");
      const max = htmlElement.querySelector("[data-length-max]")?.getAttribute("data-length-max");
      const dataVerifies: IVerifies = {};
      let nbVerified = 0;

      const lengthVerify = {
        fn: (e: string) => {
          if (max && !min) {
            return e.length > 0 && e.length <= Number(max);
          }
          if (min && !max) {
            return e.length >= Number(min);
          }
          if (max && min) {
            return e.length >= Number(min) && e.length <= Number(max);
          }
          return false;
        },
        ref: htmlElement.querySelector("[data-security-length]") as HTMLElement,
      };

      const specialCharsverify = {
        fn: (e: string) => /[^\w\*]/.test(e),
        ref: htmlElement.querySelector("[data-security-special-chars]") as HTMLElement,
      };

      const numberVerify = {
        fn: (e: string) => /[0-9]/.test(e),
        ref: htmlElement.querySelector("[data-security-number]") as HTMLElement,
      };

      const uppercaseVerify = {
        fn: (e: string) => /[A-Z]/.test(e),
        ref: htmlElement.querySelector("[data-security-uppercase]") as HTMLElement,
      };

      const lowercaseVerify = {
        fn: (e: string) => /[a-z]/.test(e),
        ref: htmlElement.querySelector("[data-security-lowercase]") as HTMLElement,
      };

      if (numberVerify.ref) Object.assign(dataVerifies, { numberVerify });
      if (lengthVerify.ref) Object.assign(dataVerifies, { lengthVerify });
      if (lowercaseVerify.ref) Object.assign(dataVerifies, { lowercaseVerify });
      if (uppercaseVerify.ref) Object.assign(dataVerifies, { uppercaseVerify });
      if (specialCharsverify.ref) Object.assign(dataVerifies, { specialCharsverify });
      nbVerified = Object.keys(dataVerifies).length;

      const handleChangeIconsVerify = (e: string): number => {
        const verifiesTests: boolean[] = [];

        Object.keys(dataVerifies).map((key: string) => {
          const test = dataVerifies[key].fn(e);
          const icon = dataVerifies[key].ref.querySelector("[data-icon-securities]").querySelector("i");
          verifiesTests.push(test);

          if (test) {
            icon.classList.remove("tri-times-circle");
            icon.classList.add("tri-check-circle", "is-success");
          } else {
            icon.classList.remove("tri-check-circle", "is-success");
            icon.classList.add("tri-times-circle");
          }
        });
        return verifiesTests.filter((item) => item).length;
      };

      const handleChangeGauge = (points: number) => {
        const calc = Number(((points / Object.keys(dataVerifies).length) * 100).toFixed(0));
        if (calc <= 50 && calc > 0) {
          gauge.style.width = "50%";
          gauge.style.backgroundColor = red;
        } else if (calc <= 99 && calc > 50) {
          gauge.style.width = "75%";
          gauge.style.backgroundColor = yellow;
        } else if (calc === 100) {
          gauge.style.width = "100%";
          gauge.style.backgroundColor = green;
        } else {
          gauge.style.width = "0%";
          gauge.style.backgroundColor = grey;
        }
      };

      const onInput = (e: InputEvent) => {
        const value = (e.target as HTMLInputElement).value;
        const points = handleChangeIconsVerify(value);
        handleChangeGauge(points);
      };

      input.addEventListener("input", onInput);
      htmlElement.setAttribute(`data-gauges-initialized`, 'true')
    });
  }
};
