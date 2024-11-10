// Dependencies
import * as React from "react";
import { is } from "../../../services/";

// Testing methods
import { fireEvent, render, screen } from "@testing-library/react";
// @ts-ignore
import renderer from "react-test-renderer";

// Component to test
import { Image } from "../";

describe("Image component", () => {
  test('should have "image" className', () => {
    render(<Image src={"https://www.test.com"} />);

    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toHaveClass("image");
  });

  test("should have correct lib attribute", () => {
    render(<Image src={"https://www.test.com"} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://www.test.com"
    );
  });

  test("should have correct alt attribute", () => {
    render(<Image alt={"test"} src={"https://www.test.com"} />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "test");
  });

  test('should have "is-circled" className', () => {
    render(<Image circled={true} src={"https://www.test.com"} />);

    expect(screen.getByRole("img")).toHaveClass(is("circled"));
  });

  test('should not have "is-circled" className', () => {
    render(<Image circled={false} src={"https://www.test.com"} />);

    expect(screen.getByRole("img")).not.toHaveClass(is("circled"));
  });

  test("should onClick attribut work", () => {
    const mockCallBack = jest.fn();
    render(<Image onClick={mockCallBack} src={"https://www.test.com"} />);

    fireEvent.click(screen.getByRole("img"));
    expect(mockCallBack).toHaveBeenCalled();
  });

  test("snapshot", () => {
    const tree = renderer
      .create(
        <Image
          src={"https://www.test.com"}
          alt={"test"}
          circled={true}
          width={400}
          height={200}
          onClick={jest.fn()}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
