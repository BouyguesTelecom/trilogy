import * as React from "react";
import {
  Divider,
  IconName,
  List,
  ListIconStatus,
  ListItem,
  ListItemDescription,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const ListScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>{`Classic list`}</Title>

        <Divider />
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      </Section>
      {/*
       * ##############
       * LIST ELEMENTS WITH ICONES
       * ##############
       */}
      <Section>
        <Title level={TitleLevels.THREE}>{`List with icons and status`}</Title>
        <Divider />

        <List hasIcon>
          <ListItem status={ListIconStatus.SUCCESS} customIcon={IconName.CHECK}>
            Item 1
          </ListItem>
          <ListItem status={ListIconStatus.ERROR} customIcon={IconName.TIMES}>
            Item 2
          </ListItem>
          <ListItem status={ListIconStatus.ERROR} customIcon={IconName.TIMES}>
            Item 3
          </ListItem>
        </List>
      </Section>
      {/*
       * ##############
       * LIST DESCRIPTIONS
       * ##############
       */}
      <Section>
        <Title level={TitleLevels.THREE}>List with descriptions</Title>
        <Divider />

        <List>
          <ListItem title="Title">
            <ListItemDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </ListItemDescription>
          </ListItem>
          <ListItem title="Title">
            <ListItemDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </ListItemDescription>
          </ListItem>
        </List>
      </Section>
    </>
  );
};
