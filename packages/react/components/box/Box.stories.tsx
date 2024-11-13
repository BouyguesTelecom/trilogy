import * as React from "react";

import { Meta, Story } from "@storybook/react";
import Box from "./Box";
import { BoxMarkup, BoxProps } from "./BoxProps";
import BoxContent from "./content";
import BoxFooter from "./footer";
import BoxHeader from "./header";
import BoxItem from "./item";
import { Title, TitleLevels } from "../title";
import { Text } from "../text";

import { TrilogyColor } from "../../objects";
import { Link } from "../link";
import { Columns, Column } from "../columns";

export default {
  title: "Components/Box",
  component: Box,
  subcomponents: { BoxContent, BoxHeader, BoxFooter, BoxItem },
} as Meta;

export const Base: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
export const Skeleton: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxHeader>Box Header</BoxHeader>
    <BoxContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. Phasellus nec iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
Skeleton.args = {
  skeleton: true,
};

export const BoxCliquable: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
BoxCliquable.args = {
  markup: BoxMarkup.A,
};

export const BoxAccentuée: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
BoxAccentuée.args = {
  leftBorder: TrilogyColor.WARNING,
};

export const BoxFlat: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
BoxFlat.args = {
  flat: true,
};

export const BoxAvecHeader: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxHeader>Box header</BoxHeader>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);

export const BoxAvecFooter: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
    <BoxFooter>
      <Link>Link</Link>
    </BoxFooter>
  </Box>
);

export const BoxAvecBackgroundImage: Story<BoxProps> = (args) => (
  <Box {...args}>
    <BoxContent>
      <Title level={TitleLevels.ONE} inverted>
        Box Title
      </Title>
      <Text inverted>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </Text>
    </BoxContent>
  </Box>
);
BoxAvecBackgroundImage.args = {
  backgroundSrc:
    "https://fastly.picsum.photos/id/1/1500/600.jpg?hmac=vRq8e_89Nx5g8Sm26xFn0uKaWSG-FKsap2B1EHt3ZTM",
};

export const BoxFullheight: Story<BoxProps> = (args) => (
  <Columns>
    <Column>
      <Box {...args}>
        <BoxContent>
          <Title level={TitleLevels.ONE} inverted>
            Box Title
          </Title>
          <Text inverted>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
            Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
          </Text>
        </BoxContent>
      </Box>
    </Column>
    <Column>
      <Box {...args}>
        <BoxContent>
          <Title level={TitleLevels.ONE} inverted>
            Box Title
          </Title>
          <Text inverted>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </Text>
        </BoxContent>
      </Box>
    </Column>
  </Columns>
);
BoxFullheight.args = {
  fullheight: true,
};
