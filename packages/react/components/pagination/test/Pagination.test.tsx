import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

describe("Pagination component", () => {
  it("should render with default props", () => {
    const { getByRole, getByLabelText } = render(<Pagination count={100} />);

    // Check if the pagination component renders correctly
    expect(getByRole("navigation")).toBeInTheDocument();

    // Check if the first page link is present
    expect(getByLabelText("Aller à la page 1")).toBeInTheDocument();
  });

  it("should update the current page when a link is clicked", () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(
      <Pagination count={100} onClick={handleClick} />
    );

    // Click on the second page link
    fireEvent.click(getByLabelText("Aller à la page 2"));

    // Check if the onClick prop has been called with the correct pager object
    expect(handleClick).toHaveBeenCalledWith({
      currentPage: 2,
      pageSize: 10,
      totalPages: 10,
      endPage: 4,
      pages: [1, 2, 3, 4],
    });
  });

  it("should render the correct href when href prop is provided", () => {
    const { getByLabelText } = render(
      <Pagination count={100} href={(page) => `?page=${page}`} />
    );

    // Check if the first page link has the correct href attribute
    expect(getByLabelText("Aller à la page 1").getAttribute("href")).toBe(
      "?page=1"
    );

    // Check if the third page link has the correct href attribute
    expect(getByLabelText("Aller à la page 3").getAttribute("href")).toBe(
      "?page=3"
    );
  });
});
