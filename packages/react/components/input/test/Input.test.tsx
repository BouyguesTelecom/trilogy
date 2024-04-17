import { fireEvent, render } from "@testing-library/react";
import Input from "../Input";
import { InputStatus, InputType } from "../InputEnum";
import * as React from "react";
import { IconName } from "../../icon";
import { Link } from "../../link";
import { getEnumNames } from "../../../helpers";
import { TrilogyColor } from "../../../objects";

describe("Input", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(
      <Input
        testId="input"
        hasIcon
        defaultValue="Input, sans placeholder (et sans padding en haut)"
        help="N'affiche pas de padding supérieur quand il n'y a pas de placeholder"
        type={InputType.TEXT}
      />
    );
    const input = getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  it("should have correctly classes", () => {
    const { getByTestId } = render(
      <Input
        hovered
        status="warning"
        testId="input"
        hasIcon
        defaultValue="Input, sans placeholder (et sans padding en haut)"
        help="N'affiche pas de padding supérieur quand il n'y a pas de placeholder"
        type={InputType.TEXT}
      />
    );
    const input = getByTestId("input");
    expect(input).toHaveClass("input", "is-warning", "is-hovered");
  });

  it("should have aria label", () => {
    const { getByTestId } = render(
      <Input accessibilityLabel="input" testId="input" hasIcon />
    );
    const input = getByTestId("input");
    expect(input).toHaveAttribute("aria-label", "input");
  });

  it("should render right type input", () => {
    getEnumNames(InputType).forEach((type) => {
      const { getByTestId } = render(
        <Input
          accessibilityLabel="input"
          testId={`input${type}`}
          hasIcon
          type={type}
        />
      );
      const input = getByTestId(`input${type}`);
      expect(input).toHaveAttribute("type", type);
    });
  });

  it("should have default value", () => {
    const { getByTestId } = render(
      <Input
        accessibilityLabel="input"
        testId="input"
        hasIcon
        defaultValue="dflt"
      />
    );
    const input = getByTestId("input");
    expect(input).toHaveValue("dflt");
  });

  it("should have correctly value", () => {
    const { getByTestId } = render(
      <Input accessibilityLabel="input" testId="input" hasIcon value="value" />
    );
    const input = getByTestId("input");
    expect(input).toHaveValue("value");
  });

  it("should execute onSubmit event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onSubmit={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.submit(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute onclick event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onClick={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.click(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute keyup event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onKeyUp={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.keyUp(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute focus event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onFocus={mockCallBack}
        focused
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.focus(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute blur event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onBlur={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.blur(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute mousenter event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onMouseEnter={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.mouseEnter(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute mouseleave event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onMouseLeave={mockCallBack}
        accessibilityLabel="input"
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    fireEvent.mouseLeave(input);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute keypress event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        testId="input"
        onKeyPress={mockCallBack}
        hasIcon
        defaultValue="Input, sans placeholder (et sans padding en haut)"
        help="N'affiche pas de padding supérieur quand il n'y a pas de placeholder"
        type={InputType.TEXT}
      />
    );
    const input = getByTestId("input");
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    const { getByTestId } = render(
      <Input
        accessibilityLabel="input"
        disabled
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    expect(input).toBeDisabled();
  });

  it("should have min max length", () => {
    const { getByTestId } = render(
      <Input
        minLength={12}
        maxLength={14}
        accessibilityLabel="input"
        disabled
        testId="input"
        hasIcon
        value="value"
      />
    );
    const input = getByTestId("input");
    expect(input).toHaveAttribute("maxLength", "14");
    expect(input).toHaveAttribute("minLength", "12");
  });

  it("should have label", () => {
    const { getByTestId } = render(
      <Input placeholder="bonjour" testId="input" />
    );
    const input = getByTestId("input");
    expect(input.nextElementSibling?.nodeName).toBe("LABEL");
  });

  it("should have status icon with click event", () => {
    const mockCallBack = jest.fn();

    const status = [
      {
        status: InputStatus.SUCCESS,
        icon: IconName.CHECK_CIRCLE,
      },
      {
        status: InputStatus.WARNING,
        icon: IconName.EXCLAMATION_CIRCLE,
      },
      {
        status: InputStatus.ERROR,
        icon: IconName.EXCLAMATION_CIRCLE,
      },
    ];

    status.forEach((status, i) => {
      const { getByTestId } = render(
        <Input
          onIconClick={mockCallBack}
          status={status.status}
          hasIcon
          testId={`input-${i}`}
        />
      );
      const input = getByTestId(`input-${i}`);
      expect(input.nextElementSibling?.firstChild).toHaveClass("icon");
      expect(input.nextElementSibling?.firstChild?.firstChild).toHaveClass(
        status.icon
      );
      fireEvent.click(input?.nextElementSibling as HTMLElement);
      expect(mockCallBack).toHaveBeenCalled();
    });
  });

  it("should have custom icon with click event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onIconClick={mockCallBack}
        customIcon={IconName.BELL}
        testId="input"
      />
    );
    const input = getByTestId("input");
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should have custom icon left with click event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onIconClick={mockCallBack}
        customIconLeft={IconName.BELL}
        testId="input"
      />
    );
    const input = getByTestId("input");
    expect(input.nextElementSibling?.firstChild).toHaveClass("icon");
    expect(input.nextElementSibling?.firstChild?.firstChild).toHaveClass(
      "tri-bell"
    );
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should have custom icon right with click event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        onIconClick={mockCallBack}
        customIconRight={IconName.BELL}
        testId="input"
      />
    );
    const input = getByTestId("input");
    expect(input.nextElementSibling?.firstChild).toHaveClass("icon");
    expect(input.nextElementSibling?.firstChild?.firstChild).toHaveClass(
      "tri-bell"
    );
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should have icon pwd right with click event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input onIconClick={mockCallBack} type="password" testId="input" />
    );
    const input = getByTestId("input");
    expect(input.nextElementSibling).toHaveAttribute("data-show-pwd", "true");
    expect(input.nextElementSibling?.firstChild).toHaveClass("icon");
    expect(input.nextElementSibling?.firstChild?.firstChild).toHaveClass(
      "tri-eye"
    );
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(input).toHaveAttribute("type", "text");
    expect(mockCallBack).toHaveBeenCalled();
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(input).toHaveAttribute("type", "password");
  });

  it("should have icon search right with click event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input onIconClick={mockCallBack} search testId="input" />
    );
    const input = getByTestId("input");
    expect(input.nextElementSibling?.firstChild).toHaveClass("icon");
    expect(input.nextElementSibling?.firstChild?.firstChild).toHaveClass(
      "tri-search"
    );
    fireEvent.click(input?.nextElementSibling as HTMLElement);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should execute onchange event", () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input
        securityGauge
        testId="input"
        onChange={mockCallBack}
        hovered
        hasIcon
        defaultValue="Input, sans placeholder (et sans padding en haut)"
        help="N'affiche pas de padding supérieur quand il n'y a pas de placeholder"
        type={InputType.PASSWORD}
      />
    );
    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "a" } });
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should render security gauge input", () => {
    const { getByTestId } = render(
      <Input
        testId="input"
        type="password"
        hasIcon
        customIconLeft={IconName.ALERT}
        securityGauge
        help={<Link>1ère connexion / Mot de passe oublié ?</Link>}
        placeholder="this is my placeholder"
        minLength={8}
        maxLength={15}
        validationRules={{
          lowercase: true,
          uppercase: true,
          number: true,
          specialChars: true,
          length: { max: 15, min: 8 },
        }}
      />
    );
    const input = getByTestId("input");
    const containerGauge = getByTestId("security-gauge");
    const gauge = input.parentNode?.parentNode?.querySelector("[data-gauge]");
    const lowercase = containerGauge.querySelector("[data-security-lowercase]");
    const uppercase = containerGauge.querySelector("[data-security-uppercase]");
    const number = containerGauge.querySelector("[data-security-number]");
    const specialChars = containerGauge.querySelector(
      "[data-security-special-chars]"
    );
    const length = containerGauge.querySelector("[data-security-length]");

    expect(gauge).toHaveStyle("width: 0%");
    expect(gauge).toHaveStyle("backgroundColor: '#D1D1D1'");

    expect(input).toBeInTheDocument();
    expect(containerGauge).toBeInTheDocument();
    expect(lowercase).toBeInTheDocument();
    expect(uppercase).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(specialChars).toBeInTheDocument();
    expect(length).toBeInTheDocument();
  });

  it("should execute onchange event on security gauge input", () => {
    const tests = [
      { value: "Bana7aSplit@", bckground: TrilogyColor.SUCCESS, width: "100%" },
      { value: "Bana7aSplit", bckground: TrilogyColor.WARNING, width: "75%" },
      { value: "banane", bckground: TrilogyColor.ERROR, width: "50%" },
    ];

    tests.forEach((test, i) => {
      const { getByTestId } = render(
        <Input
          testId={`input-${i}`}
          type="password"
          hasIcon
          customIconLeft={IconName.ALERT}
          securityGauge
          help={<Link>1ère connexion / Mot de passe oublié ?</Link>}
          placeholder="this is my placeholder"
          minLength={8}
          maxLength={15}
          validationRules={{
            lowercase: true,
            uppercase: true,
            number: true,
            specialChars: true,
            length: { max: 20, min: 8 },
          }}
        />
      );
      const input = getByTestId(`input-${i}`);
      const gauge = input.parentNode?.parentNode?.querySelector("[data-gauge]");
      fireEvent.change(input, { target: { value: test.value } });
      expect(gauge).toHaveStyle(`width: ${test.width}`);
      expect(gauge).toHaveStyle(`backgroundColor: '${test.bckground}'`);
    });
  });
});
