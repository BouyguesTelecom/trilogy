import * as React from "react";

import { Meta, Story } from "@storybook/react";
import { NotificationProps } from "./NotificationProps";
import Notification from "./Notification";
import { AlertState } from "../../objects";
import { ButtonMarkup } from "../button";
import { IconName } from "../icon";

export default {
  title: "Components/Notification",
  component: Notification,
} as Meta;

export const Base: Story<NotificationProps> = (args) => (
  <>
    <Notification {...args} />
    <Notification
      title="Notification success"
      alert={AlertState.SUCCESS}
      info
    />
    <Notification
      title="Notification warning"
      alert={AlertState.WARNING}
      info
    />
    <Notification title="Notification error" alert={AlertState.ERROR} info />
  </>
);
Base.args = {
  title: "Notification",
  info: true,
};

export const Simple: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);
Simple.args = {
  title: "Notification",
  hasIcon: false,
};

export const Informative: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);
Informative.args = {
  title: "Notification",
  info: true,
};
export const AvecUneDescription: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);
AvecUneDescription.args = {
  title: "Notification",
  description:
    "Reprehenderit eiusmod duis eu consectetur deserunt enim esse est do mollit. Aliqua et velit et culpa nulla veniam tempor veniam voluptate nulla. Nisi est sunt incididunt irure in ullamco eiusmod sunt. Reprehenderit incididunt labore qui culpa cillum eiusmod ex non aute ea Lorem. Incididunt laborum quis consequat commodo laborum consectetur id anim elit pariatur.",
};
export const AvecUnCTA: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);
AvecUnCTA.args = {
  alert: AlertState.INFO,
  title: "Notification with button",
  buttonContent: "Valider",
  buttonMarkup: ButtonMarkup.BUTTON,
  buttonClick: () => alert("Test call to action click event"),
};
export const VersionBannière: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);
VersionBannière.args = {
  description: "Banner notification description",
  banner: true,
  iconName: IconName.SIM_CARD,
};
