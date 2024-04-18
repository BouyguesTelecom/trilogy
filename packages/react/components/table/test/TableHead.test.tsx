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
import TableHead from "../head";
import TableTd from "../td";

describe("TableHead", () => {
  it("renders without error", () => {
    render(
      <Table>
        <TableHead>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableHead>
      </Table>
    );
  });

  it("renders with additional CSS classes", () => {
    const { container } = render(
      <Table>
        <TableHead className="custom-class">
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableHead>
      </Table>
    );
    const thead = container.querySelector("thead");
    expect(thead).toHaveClass("custom-class");
  });

  it("renders with background color class when backgroundColor prop is provided", () => {
    const { container } = render(
      <Table>
        <TableHead backgroundColor={TrilogyColor.ERROR}>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableHead>
      </Table>
    );
    const thead = container.querySelector("thead");
    expect(thead).toHaveClass(has(getBackgroundClassName(TrilogyColor.ERROR)));
  });

  it("renders with color class when color prop is provided", () => {
    const { container } = render(
      <Table>
        <TableHead color={TrilogyColor.ERROR}>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableHead>
      </Table>
    );
    const thead = container.querySelector("thead");
    expect(thead).toHaveClass(is(getColorClassName(TrilogyColor.ERROR)));
  });
});
