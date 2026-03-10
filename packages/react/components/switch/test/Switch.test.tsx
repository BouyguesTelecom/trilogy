import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Switch from "../Switch";

describe("Switch", () => {
  it("renders the label text", () => {
    const labelText = "My Switch";
    const { getByTestId } = render(<Switch testId="switch" label={labelText} />);
    expect(getByTestId("switch")).toBeInTheDocument();
  });

  it("calls onChange function when clicked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Switch label="My Switch" onChange={onChange} />
    );
    const checkbox = getByLabelText("My Switch");
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
