import * as React from "react";
import { render } from "@testing-library/react";
import Range from "../Range";

describe("Range component", () => {
  test("renders with default values", () => {
    const { getByText } = render(
      <Range min={0} max={100} label="Test Range" />
    );
    const range = getByText("Test Range");
    expect(range).toBeInTheDocument();
  });
});
