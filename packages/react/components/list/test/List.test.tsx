import * as React from "react";
import { render } from "@testing-library/react";
import List from "../List";
import { ListItem, ListItemDescription } from "../item";

describe("List", () => {
  test("renders without errors", () => {
    const { getByTestId } = render(<List data-testid="list" />);
    expect(getByTestId("list")).toBeInTheDocument();
  });

  test("applies icon class when hasIcon prop is true", () => {
    const { container } = render(<List hasIcon />);
    expect(container.firstChild).toHaveClass("icon-list");
  });

  test("applies additional classes when className prop is provided", () => {
    const { container } = render(<List className="my-list" />);
    expect(container.firstChild).toHaveClass("list my-list");
  });

  test("renders children", () => {
    const { getByText } = render(
      <List>
        <ListItem>
          <ListItemDescription>Item 1</ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemDescription>Item 2</ListItemDescription>
        </ListItem>
      </List>
    );

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });
});
