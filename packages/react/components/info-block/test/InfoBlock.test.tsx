import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import InfoBlock from "../InfoBlock";

describe("InfoBlock", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<InfoBlock>Test Info Block</InfoBlock>);
    expect(getByText("Test Info Block")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <InfoBlock onClick={handleClick}>Clickable Info Block</InfoBlock>
    );
    fireEvent.click(getByText("Clickable Info Block"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders as a boxed block when the `boxed` prop is true", () => {
    const { container } = render(<InfoBlock boxed>Boxed Info Block</InfoBlock>);
    expect(container.firstChild).toHaveClass("box");
  });
});
