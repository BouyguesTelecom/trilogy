// Dependencies
import * as React from "react";

// Testing methods
import { render, screen } from "@testing-library/react";
// @ts-ignore
import renderer from "react-test-renderer";
import { is } from "../../../services"; // Component to test
import { Divider } from "..";

describe("Divider component", () => {
  test("should have a separator in document", () => {
    render(<Divider />);

    expect(screen.getByTestId("separator")).toBeInTheDocument();
    expect(screen.getByTestId("separator")).toHaveClass("divider");
  });

  test('should have "is-unboxed" className', () => {
    render(<Divider unboxed={true} />);

    expect(screen.getByTestId("separator")).toHaveClass(is("unboxed"));
  });

  test('should not have "is-unboxed" className', () => {
    render(<Divider unboxed={false} />);

    expect(screen.getByTestId("separator")).not.toHaveClass(is("unboxed"));
  });

  test("snapshot", () => {
    const tree = renderer
      .create(
        <Divider
          className={"className"}
          content={"content"}
          unboxed={true}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
