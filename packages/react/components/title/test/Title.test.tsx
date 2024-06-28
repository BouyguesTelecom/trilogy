// Dependencies
import * as React from "react";
import { getEnumNames } from "../../../helpers/index";
import { is } from "../../../services/index";

// Testing methods
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Component to test
import { Title, TitleLevels } from "../";
import {
  TypographyAlign,
  TypographyBold,
  TypographyColor,
  TypographyTransform,
} from "../../..";

import {TitleMarkup } from "../TitleEnum";


describe("Title component", () => {
  test("should have a correct html tag", () => {
    render(<Title>DEFAULT</Title>);
    expect(screen.getByText("DEFAULT")).toBeTruthy();

    getEnumNames(TitleMarkup).forEach((element) => {
      render(<Title markup={element}>{element}</Title>);
      expect(screen.getByText(element)).toBeTruthy();
    });
  });

  test("should contain toto as text", () => {
    render(<Title>toto</Title>);

    expect(screen.getByText("toto")).toBeInTheDocument();
  });

  test('should have "is-inverted" className', () => {
    render(<Title inverted={true}>INVERTED</Title>);

    expect(screen.getByText("INVERTED")).toHaveClass(is("inverted"));
  });

  test('should not have "is-inverted" className', () => {
    render(<Title>DEFAULT</Title>);
    render(<Title inverted={false}>INVERTED</Title>);

    expect(screen.getByText("DEFAULT")).not.toHaveClass(is("inverted"));
    expect(screen.getByText("INVERTED")).not.toHaveClass(is("inverted"));
  });

  test("should have a correct typo className", () => {
    getEnumNames(TypographyColor).forEach((element) => {
      render(<Title typo={element}>{element}</Title>);
      expect(screen.getByText(element)).toHaveClass(element);
    });

    getEnumNames(TypographyTransform).forEach((element) => {
      render(<Title typo={element}>{element}</Title>);
      expect(screen.getByText(element)).toHaveClass(element);
    });

    getEnumNames(TypographyBold).forEach((element) => {
      render(<Title typo={element}>{element}</Title>);
      expect(screen.getByText(element)).toHaveClass(element);
    });

    getEnumNames(TypographyAlign).forEach((element) => {
      render(<Title typo={element}>{element}</Title>);
      expect(screen.getByText(element)).toHaveClass(element);
    });
  });

  test('should have "toto" className', () => {
    render(<Title className="toto">CLASSNAME</Title>);

    expect(screen.getByText("CLASSNAME")).toHaveClass("toto");
  });

  test('should have "is-loading" className', () => {
    render(<Title skeleton={true}>DEFAULT</Title>);

    expect(screen.getByText("DEFAULT")).toHaveClass(is("loading"));
    expect(screen.getByText("DEFAULT")).not.toHaveClass(is("loaded"));
  });

  test('should have "is-loaded" className', () => {
    render(<Title>DEFAULT</Title>);
    render(<Title skeleton={false}>SKELETON</Title>);

    expect(screen.getByText("DEFAULT")).toHaveClass(is("loaded"));
    expect(screen.getByText("DEFAULT")).not.toHaveClass(is("loading"));

    expect(screen.getByText("SKELETON")).toHaveClass(is("loaded"));
    expect(screen.getByText("SKELETON")).not.toHaveClass(is("loading"));
  });

  test("should have htmlContent", () => {
    render(
      <Title htmlContent={"<b>htmlContent</b>"} testId="htmlContentComponent" />
    );

    expect(screen.getByTestId("htmlContentComponent")).toContainHTML(
      "<b>htmlContent</b>"
    );
  });

  test("should onClick attribut work", () => {
    const mockCallBack = jest.fn();
    render(<Title onClick={mockCallBack}>DEFAULT</Title>);

    fireEvent.click(screen.getByText("DEFAULT"));
    expect(mockCallBack).toHaveBeenCalled();
  });

  test("snapshot", () => {
    const tree = renderer
      .create(
        <Title
          level={TitleLevels.THREE}
          inverted={true}
          onClick={jest.fn()}
          skeleton={false}
          markup={TitleMarkup.H3}
          className={"test"}
        >
          SnapShot
        </Title>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
