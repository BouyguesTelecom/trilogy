import React from "react";

import { Meta, Story } from "@storybook/react";
import Modal from "./Modal";
import ModalFooter from "./footer/ModalFooter";
import ModalTitle from "./title/ModalTitle";
import { ModalProps } from "./ModalProps";
import { ModalMarkup } from "./ModalEnum";
import { IconName } from "../icon";

export default {
  title: "Components/Modal",
  component: Modal,
  subcomponents: { ModalTitle, ModalFooter },
} as Meta;

export const Base: Story<ModalProps> = (args) => <Modal {...args} />;
Base.args = {
  content: "Contenu de ma modal",
  triggerMarkup: ModalMarkup.A,
  triggerClassNames: "button is-main",
  title: "title modal",
  triggerContent: "Open modal",
  ctaContent: "Action",
  ctaOnClick: () => alert("Click on cta"),
  iconName: IconName.EYE,
  closeIcon: true,
  ctaCancelOnClick: () => alert("cancel action"),
};

export const ModalLatéral: Story<ModalProps> = (args) => <Modal {...args} />;
ModalLatéral.args = {
  panel: true,
  content: "Contenu de ma modal",
  triggerMarkup: ModalMarkup.A,
  triggerClassNames: "button is-main",
  title: "title modal",
  triggerContent: "Open modal",
  ctaContent: "Action",
  ctaOnClick: () => alert("Click on cta"),
  iconName: IconName.EYE,
  closeIcon: true,
  ctaCancelOnClick: () => alert("cancel action"),
};
