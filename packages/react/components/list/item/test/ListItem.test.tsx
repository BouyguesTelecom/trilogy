import * as React from "react";
import { render } from "@testing-library/react";
import ListItem from "../ListItem";
import { ListIconStatus } from "../ListItemProps";

describe("ListItem", () => {

  it("should render correctly with title and description", () => {
    const { container } = render(
      <ListItem title="Title">Hello World</ListItem>
    );
    expect(container.firstChild).toContainHTML("<b>Title</b>");
    expect(container.firstChild).toContainHTML(`<li class="is-white"><div class="list-item_content"><div><b>Title</b>Hello World</div></div></li>`);
  });

  it("should apply status class", () => {
    const { container } = render(
      <ListItem status={ListIconStatus.SUCCESS}>Hello World</ListItem>
    );
    expect(container.firstChild).toHaveClass("is-success");
  });

  it("should apply custom class name", () => {
    const { container } = render(
      <ListItem className="custom-class">Hello World</ListItem>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
