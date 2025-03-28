// Dependencies
import * as React from "react";

// Testing methods
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { is } from "../../../services";

// Component to test
import { BreadcrumbItem } from "..";

describe("BreadcrumbItem component", () => {
  test("should have a BreadcrumbItem in document", () => {
    render(<BreadcrumbItem />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  test("should contain toto as text", () => {
    render(<BreadcrumbItem>toto</BreadcrumbItem>);

    expect(screen.getByText("toto")).toBeInTheDocument();
  });

  test('should not have "is-active" className', () => {
    render(<BreadcrumbItem active={false} />);

    expect(screen.getByRole("listitem")).not.toHaveClass(is("active"));
  });

  test("should have a href", () => {
    render(<BreadcrumbItem href={"https://www.test.com"}>HREF</BreadcrumbItem>);

    expect(screen.getByText("HREF")).toHaveAttribute(
      "href",
      "https://www.test.com"
    );
  });

  test("should render breadcrumb with router link", () => {
    const { getByTestId } = render(
      <BreadcrumbItem
        testId="breadcrumb"
        routerLink="a"
        to={"https://www.test.com"}
      >
        HREF
      </BreadcrumbItem>
    );
    const breadcrumb = getByTestId("breadcrumb");
    expect(breadcrumb.firstChild?.nodeName).toBe("A");
    expect(breadcrumb.firstChild).toHaveAttribute("to", "https://www.test.com");
    expect(breadcrumb).toBeInTheDocument();
  });

  test("snapshot", () => {
    const tree = renderer
      .create(
        <BreadcrumbItem className={"className"} href={"href"} active>
          toto
        </BreadcrumbItem>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
