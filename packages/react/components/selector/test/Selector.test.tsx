import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Selector from "../Selector";
import SelectorItem from "../item";

describe("Selector component", () => {
  const options = [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" },
  ];

  it("renders options correctly", () => {
    const { getByText } = render(
      <Selector>
        {options.map((opt) => (
          <SelectorItem key={opt.value}>{opt.label}</SelectorItem>
        ))}
      </Selector>
    );
    options.forEach((opt) => {
      const option = getByText(opt.label);
      expect(option).toBeInTheDocument();
    });
  });

  it("handles clicks correctly", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Selector onClick={handleClick}>
        {options.map((opt) => (
          <SelectorItem key={opt.value}>{opt.label}</SelectorItem>
        ))}
      </Selector>
    );

    const option2 = getByText(options[1].label);
    fireEvent.click(option2);
    expect(handleClick).toHaveBeenCalled();
  });
});
