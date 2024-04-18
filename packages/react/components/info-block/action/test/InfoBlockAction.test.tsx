import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import InfoBlockAction from "../InfoBlockAction";

describe("InfoBlockAction", () => {
  it("renders button text", () => {
    const buttonText = "Click me!";
    const { getByText } = render(
      <InfoBlockAction>{buttonText}</InfoBlockAction>
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <InfoBlockAction onClick={handleClick}>Click me!</InfoBlockAction>
    );
    const button = getByText("Click me!");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders non-string children", () => {
    const { getByTestId } = render(
      <InfoBlockAction>
        <span data-testid="child-element">I am a child element</span>
      </InfoBlockAction>
    );
    expect(getByTestId("child-element")).toBeInTheDocument();
  });

  it("adds custom CSS classnames", () => {
    const { container } = render(<InfoBlockAction className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
