import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Alert from "./Alert";
import { AlertProps } from "./AlertProps";
import { AlertState } from "../../objects";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

export const Base: Story<AlertProps> = (args) => <Alert {...args} />;

Base.args = {
  display: true,
  alert: AlertState.INFO,
  title: "Alert information",
  description:
    "Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..",
};

export const Variant: Story<AlertProps> = () => (
  <>
    {" "}
    <Alert
      display
      alert={AlertState.INFO}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />{" "}
    <Alert
      display
      alert={AlertState.WARNING}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />
    <Alert
      display
      alert={AlertState.SUCCESS}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />
    <Alert
      display
      alert={AlertState.ERROR}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />{" "}
  </>
);
