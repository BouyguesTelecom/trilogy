import * as React from "react";
import { render } from "@testing-library/react";
import DropdownMenu from "../DropdownMenu";
import DropdownItem from "../../item";

describe("DropdownMenu component", () => {
  it("renders children inside dropdown content", () => {
    const { getByText } = render(
      <DropdownMenu>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
      </DropdownMenu>
    );

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("applies additional class name to dropdown menu", () => {
    const { container } = render(<DropdownMenu className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
