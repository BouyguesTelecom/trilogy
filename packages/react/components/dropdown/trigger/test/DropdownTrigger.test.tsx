import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropdownTrigger from "../DropdownTrigger";

describe("DropdownTrigger", () => {
  it("should render a trigger with a label", () => {
    const label = "Trigger Label";
    const { getByText } = render(<DropdownTrigger label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it("should toggle the triggered state on click", () => {
    const { getByRole } = render(<DropdownTrigger />);
    const trigger = getByRole("button");
    fireEvent.click(trigger);
    expect(trigger).toHaveClass("dropdown-trigger");
  });

  it("should call the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DropdownTrigger onClick={handleClick} />);
    const trigger = getByRole("button");
    fireEvent.click(trigger);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith({ active: true });
    fireEvent.click(trigger);
    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).toHaveBeenCalledWith({ active: false });
  });
});
