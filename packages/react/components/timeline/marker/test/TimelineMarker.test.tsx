import * as React from "react";
import { render } from "@testing-library/react";
import TimelineMarker from "../TimelineMarker";
import { IconName } from "../../../icon";

describe("TimelineMarker component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <TimelineMarker
        iconName={IconName.EXCLAMATION_CIRCLE}
        data-testid={"timeline-marker"}
      />
    );
    expect(getByTestId("timeline-marker")).toBeInTheDocument();
  });

  it("should render with additional CSS classes", () => {
    const { getByTestId } = render(
      <TimelineMarker
        iconName={IconName.EXCLAMATION_CIRCLE}
        className="my-custom-class"
        data-testid={"timeline-marker"}
      />
    );
    expect(getByTestId("timeline-marker")).toHaveClass("my-custom-class");
  });

  it("should render an icon", () => {
    const { getByTestId } = render(
      <TimelineMarker
        iconName={IconName.EXCLAMATION_CIRCLE}
        data-testid={"timeline-marker-icon"}
      />
    );
    expect(getByTestId("timeline-marker-icon")).toHaveClass(
      "timeline-marker is-icon"
    );
  });
});
