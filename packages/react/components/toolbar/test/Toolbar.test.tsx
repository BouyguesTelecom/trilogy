import * as React from "react";
import { render } from "@testing-library/react";
import { TrilogyColor } from "../../../objects";
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSpace } from "../index";

describe("Toolbar", () => {
  it("renders with default props", () => {
    const { container } = render(<Toolbar />);
    expect(container.firstChild).toHaveClass("toolbar");
  });

  it("renders with custom className", () => {
    const { container } = render(<Toolbar className="my-toolbar" />);
    expect(container.firstChild).toHaveClass("toolbar", "my-toolbar");
  });

  it("renders with custom background", () => {
    const { container } = render(<Toolbar />);
    expect(container.firstChild).toHaveClass(
      "toolbar",
      "has-background-primary"
    );
  });

  it("renders with custom background and className", () => {
    const { container } = render(
      <Toolbar background={TrilogyColor.MAIN} className="my-toolbar" />
    );
    expect(container.firstChild).toHaveClass(
      "toolbar",
      "has-background-secondary",
      "my-toolbar"
    );
  });
});

describe("ToolbarGroup", () => {
  it("renders with default props", () => {
    const { getByTestId } = render(
      <ToolbarGroup data-testid="toolbar-group">toto</ToolbarGroup>
    );
    const toolbarGroup = getByTestId("toolbar-group");
    expect(toolbarGroup).toBeInTheDocument();
    expect(toolbarGroup).toHaveClass("toolbar-group");
  });

  it("renders with elastic prop", () => {
    const { getByTestId } = render(
      <ToolbarGroup data-testid="toolbar-group" elastic>
        toto
      </ToolbarGroup>
    );
    const toolbarGroup = getByTestId("toolbar-group");
    expect(toolbarGroup).toHaveClass("toolbar-group");
    expect(toolbarGroup).toHaveClass("is-elastic");
  });

  it("renders with custom className", () => {
    const { getByTestId } = render(
      <ToolbarGroup data-testid="toolbar-group" className="custom-class">
        toto
      </ToolbarGroup>
    );
    const toolbarGroup = getByTestId("toolbar-group");
    expect(toolbarGroup).toHaveClass("toolbar-group");
    expect(toolbarGroup).toHaveClass("custom-class");
  });
});

describe("ToolbarItem component", () => {
  it("renders children", () => {
    const { getByText } = render(<ToolbarItem>Test</ToolbarItem>);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("applies additional class names", () => {
    const { container } = render(
      <ToolbarItem className="test">toto</ToolbarItem>
    );
    expect(container.firstChild).toHaveClass("toolbar-item test");
  });

  it("applies clipped-to-bottom class when clippedToBottom prop is true", () => {
    const { container } = render(
      <ToolbarItem clippedToBottom>toto</ToolbarItem>
    );
    expect(container.firstChild).toHaveClass(
      "toolbar-item is-clipped-to-bottom"
    );
  });

  it("does not apply clipped-to-bottom class when clippedToBottom prop is false", () => {
    const { container } = render(
      <ToolbarItem clippedToBottom={false}>toto</ToolbarItem>
    );
    expect(container.firstChild).toHaveClass("toolbar-item");
    expect(container.firstChild).not.toHaveClass("clipped-to-bottom");
  });
});

describe("ToolbarSpace", () => {
  it("should render with default props", () => {
    const { getByTestId } = render(
      <ToolbarSpace data-testid="toolbar-space" />
    );
    const toolbarSpace = getByTestId("toolbar-space");

    expect(toolbarSpace).toBeInTheDocument();
    expect(toolbarSpace).toHaveClass("toolbar-space");
  });

  it("should render with additional classes", () => {
    const { getByTestId } = render(
      <ToolbarSpace className="my-toolbar-space" data-testid="toolbar-space" />
    );
    const toolbarSpace = getByTestId("toolbar-space");

    expect(toolbarSpace).toBeInTheDocument();
    expect(toolbarSpace).toHaveClass("toolbar-space my-toolbar-space");
  });
});
