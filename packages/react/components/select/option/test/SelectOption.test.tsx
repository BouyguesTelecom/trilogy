import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import Select from "../../Select";
import SelectOption from "../SelectOption";
import { IconName } from "../../../icon";

describe("SELECT OPTION WEB", () => {
  const props = {
    name: "Option",
    label: "Label",
    id: "id",
    testId: "testId",
  };

  it("should be selected", () => {
    const { getByTestId } = render(
      <>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`;
          return (
            <SelectOption
              key={i}
              id={value}
              value={value}
              label={value}
              testId={value}
            >
              {`option ${i}`}
            </SelectOption>
          );
        })}
      </>
    );

    const option = getByTestId(`opt_2`);
    expect(option).toHaveAttribute("aria-selected", "true");
    expect(option).toHaveAttribute("role", "option");
    expect(option).toHaveAttribute("data-option-name", "option 2");
    expect(option).toHaveAttribute("data-option-value", "opt_2");
  });

  it("should change selected option", () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`;
          return (
            <SelectOption
              key={i}
              id={value}
              value={value}
              label={value}
              testId={value}
            >
              {`option ${i}`}
            </SelectOption>
          );
        })}
      </Select>
    );
    const select = getByTestId("testId");
    fireEvent.click(select);
    const option = getByTestId(`opt_2`);
    expect(option).toHaveAttribute("aria-selected", "false");
    fireEvent.click(option);
    expect(option).toHaveAttribute("aria-selected", "true");
  });

  it("should be disabled", () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`;
          return (
            <SelectOption
              key={i}
              id={value}
              value={value}
              label={value}
              testId={value}
              disabled={value === "opt_2"}
            >
              {`option ${i}`}
            </SelectOption>
          );
        })}
      </Select>
    );
    const option = getByTestId(`opt_2`);
    expect(option).toHaveAttribute("aria-disabled", "true");
  });

  it("should have icon", () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`;
          return (
            <SelectOption
              key={i}
              id={value}
              value={value}
              label={value}
              testId={value}
              iconName={IconName.INFOS_CIRCLE}
            >
              {`option ${i}`}
            </SelectOption>
          );
        })}
      </Select>
    );
    const option = getByTestId(`opt_2`);
    expect(option.firstElementChild?.firstChild?.firstChild).toHaveClass(
      IconName.INFOS_CIRCLE
    );
  });
});
