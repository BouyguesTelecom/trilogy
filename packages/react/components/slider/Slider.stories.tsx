import * as React from "react";

import { Meta, Story } from "@storybook/react";
import { Slider, SliderItem } from "./index";
import { SliderProps } from "./SliderProps";
import { Title } from "../title";

export default {
  title: "Components/Slider",
  component: Slider,
  subcomponents: { SliderItem },
} as Meta;

export const Base: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-primary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          1
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-secondary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          2
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-tertiary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          3
        </Title>
      </div>
    </SliderItem>
  </Slider>
);
export const PlusieursColonnes: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-primary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          1
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-secondary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          2
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-tertiary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          3
        </Title>
      </div>
    </SliderItem>
  </Slider>
);
export const AvecPreview: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-primary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          1
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-secondary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          2
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-tertiary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          3
        </Title>
      </div>
    </SliderItem>
  </Slider>
);
export const SimpleAvecLesBarsEnDehors: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-primary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          1
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-secondary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          2
        </Title>
      </div>
    </SliderItem>
    <SliderItem className="is-paddingless">
      <div
        style={{ height: "426px" }}
        className="has-background-tertiary has-text-centered is-flex is-justified-center is-aligned-center"
      >
        <Title level={"ONE"} className="has-text-white">
          3
        </Title>
      </div>
    </SliderItem>
  </Slider>
);
