import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Alert from "./Alert";
import { StatusProps } from "./StatusProps";
import { StatusState } from "../../objects";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

export const Base: Story<StatusProps> = (args) => <Alert {...args} />;

Base.args = {
  display: true,
  alert: StatusState.INFO,
  title: "Alert information",
  description:
    "Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..",
};

export const Variant: Story<StatusProps> = () => (
  <>
    {" "}
    <Alert
      display
      alert={StatusState.INFO}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />{" "}
    <Alert
      display
      alert={StatusState.WARNING}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />
    <Alert
      display
      alert={StatusState.SUCCESS}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />
    <Alert
      display
      alert={StatusState.ERROR}
      title="Alert information"
      description="Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book.."
    />{" "}
  </>
);
