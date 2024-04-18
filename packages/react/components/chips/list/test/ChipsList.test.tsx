import * as React from "react";
import { render } from "@testing-library/react";
import ChipsList from "../ChipsList";

describe("ChipsList", () => {
  it("should render with correct classes and props", () => {
    const { getByTestId } = render(
      <ChipsList data-testid="chips-list" multiple>
        <div data-testid="test-child">Test Child</div>
      </ChipsList>
    );

    const chipsList = getByTestId("chips-list");
    expect(chipsList).toHaveClass("chips-list");
    expect(chipsList).toHaveClass("is-multiple");

    const child = getByTestId("test-child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Test Child");
  });
});
