import * as React from "react";
import { render } from "@testing-library/react";
import Range from "../Range";

describe("Range component", () => {
  test("renders with default values", () => {
    const { getByTestId } = render(
      <Range min={0} max={100} label="Test Range" testId="range" />
    );
    const range = getByTestId("range");
    expect(range).toBeInTheDocument();
  });
});
