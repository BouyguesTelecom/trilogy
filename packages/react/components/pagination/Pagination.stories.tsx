import * as React from "react";

import { Meta, Story } from "@storybook/react";
import { PaginationProps } from "./PaginationProps";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

export const Base: Story<PaginationProps> = (args) => <Pagination {...args} />;
Base.args = {
  onClick: (e) => console.log("event", e),
  length: 50,
  defaultPage: 2,
  href: (page) => `?page=${page}`,
};
