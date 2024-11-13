import * as React from "react";
import { render } from "@testing-library/react";
import Rows from "../Rows";
import Row from "../row";

describe("Rows", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Rows>
        <Row>Child 1</Row>
        <Row>Child 2</Row>
      </Rows>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("adds className to component", () => {
    const { container } = render(<Rows className="test-class" />);
    expect(container.firstChild).toHaveClass(" rows test-class");
  });
});
