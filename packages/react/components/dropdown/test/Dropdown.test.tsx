import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import DropdownItem from "../item";
import { DropdownDivider } from "../index";

describe("Dropdown", () => {
  it("should renders children", () => {
    render(<Dropdown>Dropdown Content</Dropdown>);
    expect(screen.getByText("Dropdown Content")).toBeInTheDocument();
  });

  it("should toggles display of dropdown", () => {
    render(<Dropdown>Dropdown Content</Dropdown>);
    const dropdown = screen.getByText("Dropdown Content");
    expect(dropdown).not.toHaveClass("is-active");
    fireEvent.click(dropdown);
    expect(dropdown).toHaveClass("is-active");
    fireEvent.click(dropdown);
    expect(dropdown).not.toHaveClass("is-active");
  });

  it("should render correctly with a label and a Checkbox", () => {
    const { getByLabelText } = render(<DropdownItem label="Option 1" />);

    expect(getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("should render correctly with children", () => {
    const { getByText } = render(<DropdownItem>Option 1</DropdownItem>);

    expect(getByText("Option 1")).toBeInTheDocument();
  });

  it("renders a DropdownDivider", () => {
    const { getByRole } = render(<DropdownDivider />);
    const divider = getByRole("separator");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("dropdown-divider");
    expect(divider).toHaveClass("is-divider");
  });
});
