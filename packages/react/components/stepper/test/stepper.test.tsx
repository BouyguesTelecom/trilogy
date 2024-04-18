import * as React from "react";
import { render } from "@testing-library/react";
import Stepper from "../Stepper";
import StepperStep from "../step";

describe("Stepper", () => {
  it("should render without error", () => {
    const { getByTestId } = render(
      <Stepper data-testid="test-stepper">
        <StepperStep data-testid="test-step-1">Step 1</StepperStep>
        <StepperStep data-testid="test-step-2">Step 2</StepperStep>
        <StepperStep data-testid="test-step-3">Step 3</StepperStep>
      </Stepper>
    );
    const stepper = getByTestId("test-stepper");
    const step1 = getByTestId("test-step-1");
    const step2 = getByTestId("test-step-2");
    const step3 = getByTestId("test-step-3");
    expect(stepper).toBeInTheDocument();
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  it("should display the current step number", () => {
    const { getByText } = render(
      <Stepper centered>
        <StepperStep current step={1}>
          Step 1
        </StepperStep>
        <StepperStep step={2}>Step 2</StepperStep>
        <StepperStep step={3}>Step 3</StepperStep>
      </Stepper>
    );
    const stepCount = getByText("1/3");
    expect(stepCount).toBeInTheDocument();
  });

  it("should center the stepper if `centered` prop is true", () => {
    const { getByTestId } = render(
      <Stepper centered data-testid="test-stepper">
        <StepperStep>Step 1</StepperStep>
        <StepperStep>Step 2</StepperStep>
        <StepperStep>Step 3</StepperStep>
      </Stepper>
    );
    const stepper = getByTestId("test-stepper");
    expect(stepper).toHaveClass("stepper-wrapper");
  });
});
