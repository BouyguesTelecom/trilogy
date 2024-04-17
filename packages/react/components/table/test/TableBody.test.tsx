import * as React from "react";
import { render } from "@testing-library/react";
import TableTr from "../tr";
import {
  getBackgroundClassName,
  getColorClassName,
  TrilogyColor,
} from "../../../objects";
import { has, is } from "../../../services";
import Table from "../Table";
import TableBody from "../body";
import TableTd from "../td";

describe("TableBody", () => {
  it("renders without error", () => {
    render(
      <Table>
        <TableBody>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>
    );
  });

  it("renders with additional CSS classes", () => {
    const { container } = render(
      <Table>
        <TableBody className="custom-class">
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>
    );
    const tbody = container.querySelector("tbody");
    expect(tbody).toHaveClass("custom-class");
  });

  it("renders with background color class when backgroundColor prop is provided", () => {
    const { container } = render(
      <Table>
        <TableBody backgroundColor={TrilogyColor.ERROR}>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>
    );
    const tbody = container.querySelector("tbody");
    expect(tbody).toHaveClass(has(getBackgroundClassName(TrilogyColor.ERROR)));
  });

  it("renders with color class when color prop is provided", () => {
    const { container } = render(
      <Table>
        <TableBody color={TrilogyColor.ERROR}>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>
    );
    const tbody = container.querySelector("tbody");
    expect(tbody).toHaveClass(is(getColorClassName(TrilogyColor.ERROR)));
  });
});
