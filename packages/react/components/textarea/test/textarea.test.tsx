import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Textarea from "../Textarea";

describe("Textarea", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<Textarea />);
    const textarea = getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });

  it("renders the placeholder", () => {
    const placeholderText = "Type here";
    const { getByPlaceholderText } = render(
      <Textarea placeholder={placeholderText} />
    );
    const textarea = getByPlaceholderText(placeholderText);
    expect(textarea).toBeInTheDocument();
  });

  it("calls onChange callback with the correct value when user types", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<Textarea onChange={onChangeMock} />);
    const textarea = getByRole("textbox");
    const typedText = "Hello World!";
    fireEvent.change(textarea, { target: { value: typedText } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({
      textareaName: "",
      textareaValue: typedText,
    });
  });

  it("displays the character count when maxLength is provided", () => {
    const maxLength = 10;
    const { getByText, getByRole } = render(<Textarea maxLength={maxLength} />);
    const textarea = getByRole("textbox");
    const typedText = "1234567890A";
    fireEvent.change(textarea, { target: { value: typedText } });
    const counter = getByText(`${typedText.length}/${maxLength}`);
    expect(counter).toBeInTheDocument();
  });

  it("displays the help text", () => {
    const helpText = "This is some help text.";
    const { getByText } = render(<Textarea help={helpText} />);
    const help = getByText(helpText);
    expect(help).toBeInTheDocument();
  });
});
