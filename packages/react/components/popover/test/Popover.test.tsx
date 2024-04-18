// Dependencies
import * as React from "react";
import { getEnumNames } from "../../../helpers/index";
import { is } from "../../../services/index";

// Testing methods
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Component to test
import { Popover } from "../";
import { PopoverArrowPosition, PopoverDirection } from "../PopoverEnum";

describe("Popover component", () => {
  test('should have "popover" className', () => {
    render(<Popover>DEFAULT</Popover>);

    expect(screen.getByText("DEFAULT")).toHaveClass("popover");
  });

  test("should contain toto as text", () => {
    render(<Popover>toto</Popover>);

    expect(screen.getByText("toto")).toBeInTheDocument();
  });

  test("should have a correct direction className", () => {
    getEnumNames(PopoverDirection).forEach((element) => {
      render(<Popover direction={element}>{element}</Popover>);
      expect(screen.getByText(element)).toHaveClass(is(`popover-${element}`));
    });
  });

  test('should have "is-popover-active" className', () => {
    render(<Popover active={true}>POPOVER ACTIVE</Popover>);

    expect(screen.getByText("POPOVER ACTIVE")).toHaveClass(
      is("popover-active")
    );
  });

  test('should not have "is-popover-active" className', () => {
    render(<Popover>DEFAULT</Popover>);
    render(<Popover active={false}>POPOVER ACTIVE</Popover>);

    expect(screen.getByText("DEFAULT")).not.toHaveClass(is("popover-active"));
    expect(screen.getByText("POPOVER ACTIVE")).not.toHaveClass(
      is("popover-active")
    );
  });

  test("should have a correct arrowPosition className", () => {
    getEnumNames(PopoverArrowPosition).forEach((element) => {
      render(<Popover arrowPosition={element}>{element}</Popover>);
      expect(screen.getByText(element)).toHaveClass(is(`arrow-${element}`));
    });
  });

  test('should have "toto" className', () => {
    render(<Popover className="toto">CLASSNAME</Popover>);

    expect(screen.getByText("CLASSNAME")).toHaveClass("toto");
  });

  test('should have "CONTENT" content', () => {
    render(<Popover content="CONTENT">DEFAULT</Popover>);

    expect(screen.getByText("CONTENT")).toHaveClass("popover-content");
    expect(screen.getByText("CONTENT")).toBeInTheDocument();
  });

  test("snapshot", () => {
    const tree = renderer
      .create(
        <Popover
          direction={PopoverDirection.LEFT}
          arrowPosition={PopoverArrowPosition.START}
          active={true}
          content={"content"}
          className={"test"}
        >
          SnapShot
        </Popover>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
