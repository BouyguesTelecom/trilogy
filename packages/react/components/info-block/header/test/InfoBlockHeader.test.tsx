import * as React from "react";
import { render } from "@testing-library/react";
import InfoBlockHeader from "../InfoBlockHeader";
import { InfoBlockHeaderProps } from "../InfoBlockHeaderProps";

describe("InfoBlockHeader", () => {
  const defaultProps: InfoBlockHeaderProps = {
    children: "Header title content",
  };

  it("should render with the title", () => {
    const { getByText } = render(<InfoBlockHeader {...defaultProps} />);
    expect(getByText("Header title content")).toBeInTheDocument();
  });

  it("should render with a custom className", () => {
    const { getByTestId } = render(
      <InfoBlockHeader
        {...defaultProps}
        className="custom-class"
        data-testid="header"
      />
    );
    expect(getByTestId("header")).toHaveClass("custom-class");
  });
});
