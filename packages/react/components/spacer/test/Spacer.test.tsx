import * as React from "react";
import { render } from "@testing-library/react";
import Spacer from "../Spacer";
import { SpacerSize } from "../SpacerEnum";

describe("Spacer component", () => {
  it("renders the spacer with default props", () => {
    const { container } = render(<Spacer size={SpacerSize.HUGE} />);
    expect(container.firstChild).toHaveStyle("marginLeft: 0px");
  });

  it("renders the spacer with horizontal margin", () => {
    const { container } = render(<Spacer horizontal size={SpacerSize.SMALL} />);
    expect(container.firstChild).toHaveStyle("marginLeft: 8px");
    expect(container.firstChild).toHaveStyle("marginTop: 0px");
  });

  it("renders the spacer with vertical margin", () => {
    const { container } = render(<Spacer size={SpacerSize.LARGE} />);
    expect(container.firstChild).toHaveStyle("marginLeft: 0px");
    expect(container.firstChild).toHaveStyle("marginTop: 24px");
  });
});
