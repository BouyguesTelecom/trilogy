import * as React from "react";
import { render } from "@testing-library/react";
import Progress from "../Progress";
import ProgressItem from "../item";
import { AlertState } from "../../../objects";
import ProgressRadial from "../radial";

describe("Progress", () => {
  it("renders correctly with percent value", () => {
    const { getByTestId } = render(
      <Progress percent={50} data-testid="progress-bar" />
    );
    const progressBar = getByTestId("progress-bar");
    expect(progressBar).toHaveAttribute("value", "50");
  });

  it("renders correctly with maxPercent value", () => {
    const { getByTestId } = render(
      <Progress percent={25} maxPercent={50} data-testid="progress-bar" />
    );
    const progressBar = getByTestId("progress-bar");
    expect(progressBar).toHaveAttribute("max", "50");
  });

  it("renders correctly with unique legend", () => {
    const { getByText } = render(
      <Progress percent={50} uniqueLegend="50%" data-testid="progress-bar" />
    );
    const legend = getByText("50%");
    expect(legend).toBeInTheDocument();
  });
});

describe("ProgressItem", () => {
  it("should render with default props", () => {
    const { getByRole } = render(<ProgressItem percent={50} />);
    expect(getByRole("progressbar")).toBeInTheDocument();
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuenow", "50");
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuemin", "0");
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuemax", "100");
  });

  it("should render with custom props", () => {
    const { getByRole } = render(
      <ProgressItem
        percent={50}
        minPercent={0}
        maxPercent={200}
        alert={AlertState.SUCCESS}
        accessibilityLabel="Loading progress"
      />
    );
    expect(getByRole("progressbar")).toBeInTheDocument();
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuenow", "50");
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuemin", "0");
    expect(getByRole("progressbar")).toHaveAttribute("aria-valuemax", "200");
    expect(getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      "Loading progress"
    );
    expect(getByRole("progressbar")).toHaveClass("progress-bar", "is-success");
  });
});

describe("ProgressRadial", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <ProgressRadial
        percent={50}
        label="Test Label"
        description="Test Description"
        data-testid="progress-radial"
      />
    );
    expect(getByTestId("progress-radial")).toBeInTheDocument();
  });

  it("renders label and description", () => {
    const { getByText } = render(
      <ProgressRadial
        percent={50}
        label="Test Label"
        description="Test Description"
      />
    );
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
  });

  it("renders skeleton", () => {
    const { getByTestId } = render(
      <ProgressRadial skeleton data-testid="progress-radial" />
    );
    expect(getByTestId("progress-radial")).toHaveClass("is-loading");
  });
});
