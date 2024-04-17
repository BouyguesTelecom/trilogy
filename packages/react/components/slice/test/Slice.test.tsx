import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import Slice from "../Slice";
import SliceCta from "../cta";
import SliceBody from "../body";
import SliceIcon from "../icon";
import { IconName } from "../../icon";
import { SliceContent } from "../index";
import SliceList from "../list";
import SliceImage from "../image";

describe("Slice", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Slice>Hello World!</Slice>);
    expect(getByText("Hello World!")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Slice onClick={handleClick}>Click Me</Slice>);
    fireEvent.click(getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled class when disabled prop is true", () => {
    const { getByText } = render(<Slice disabled>Disabled</Slice>);
    expect(getByText("Disabled")).toHaveClass("slice is-disabled");
  });

  it("applies cta children", () => {
    const { getByText } = render(
      <Slice>
        <SliceCta>Long CTA</SliceCta>
      </Slice>
    );
    expect(getByText("Long CTA")).toHaveClass("slice-call-to-action");
  });

  it("applies body children", () => {
    const { getByText } = render(
      <Slice>
        <SliceBody>Custom Class </SliceBody>
      </Slice>
    );
    expect(getByText("Custom Class")).toHaveClass("slice-body");
  });

  it("applies content children", () => {
    const { getByText } = render(
      <Slice>
        <SliceBody>
          <SliceContent>Content of my slice</SliceContent>
        </SliceBody>
      </Slice>
    );
    expect(getByText("Content of my slice")).toBeInTheDocument();
  });

  it("applies icon children", () => {
    const { getByTestId } = render(
      <Slice>
        <SliceBody>
          <SliceIcon data-testid="with-icon" iconName={IconName.CHECK_CIRCLE} />
        </SliceBody>
      </Slice>
    );
    expect(getByTestId("with-icon")).toHaveClass("slice-icon");
  });

  it("renders children without error", () => {
    const { getByText } = render(
      <SliceList>
        <div>Child 1</div>
        <div>Child 2</div>
      </SliceList>
    );
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("applies transparent and selectable classes when props are provided", () => {
    const { container } = render(
      <SliceList transparent selectable>
        <div>Child 1</div>
      </SliceList>
    );
    expect(container.firstChild).toHaveClass("slices");
    expect(container.firstChild).toHaveClass("is-transparent");
    expect(container.firstChild).toHaveClass("slice-select");
  });

  it("should render an image with the given source and alt text", () => {
    const src = "https://example.com/image.jpg";
    const alt = "Example image";
    const { getByAltText } = render(<SliceImage src={src} alt={alt} />);
    const image = getByAltText(alt);
    expect(image).toHaveAttribute("src", src);
  });
});
