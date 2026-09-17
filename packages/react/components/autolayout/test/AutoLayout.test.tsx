import * as React from "react";
import { render } from "@testing-library/react";
import AutoLayout from "@/components/autolayout/AutoLayout";
import AutoLayoutWrapper from "@/components/autolayout/AutoLayoutWrapper";

describe("AutoLayout component", () => {
  it("should render its children", () => {
    const { getByText } = render(
      <AutoLayoutWrapper autolayout={false}>
        <AutoLayout>
          <div>Hello world!</div>
        </AutoLayout>
      </AutoLayoutWrapper>
    );

    expect(getByText("Hello world!")).toBeInTheDocument();
  });
});
