import * as React from "react";
import {
  Badge,
  BadgeColor,
  Columns,
  Column,
  Divider,
  Icon,
  IconName,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import {Box, TrilogyColor} from "@trilogy-ds/react";

export const BadgeScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Content props string</Title>
      <Badge content={"1"}/>
      <Divider/>

      <Title level={TitleLevels.THREE}>Content props number</Title>
      <Badge content={1}/>
      <Divider/>

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge content={2} textContent="Text with badge"/>
      <Divider/>

      <Title level={TitleLevels.THREE}>Icon badgeContent </Title>
      <Icon name={IconName.INFOS_CIRCLE} badgeContent="42"/>
      <Divider/>

      <Title level={TitleLevels.THREE}>Color + TextContent props </Title>
      <Columns scrollable>
        {Object.values(BadgeColor).map((color, index) => {
          return (
            <Column size={6} key={index}>
              <Badge color={color} content={2} textContent="Text"/>
            </Column>
          );
        })}
      </Columns>
      <Divider/>

      <Title level={TitleLevels.THREE}>Reversed props </Title>
      <Columns scrollable>
        <Column size={6} key={1}>
          <Badge reversed={false} content={2} textContent="Text"/>
        </Column>
        <Column size={6} key={2}>
          <Badge reversed={true} content={2} textContent="Text"/>
        </Column>
      </Columns>

      <Title level={TitleLevels.THREE}>Inverted props </Title>
      <Box backgroundColor={TrilogyColor.MAIN} inverted >
        <Columns scrollable>
          <Column size={4} key={1}>
            <Badge reversed={false} content={2} textContent="Text" inverted/>
          </Column>
          <Column size={4} key={2}>
            <Badge reversed={true} content={2} textContent="Text" inverted/>
          </Column>
          <Column size={4} key={2}>
            <Badge reversed={true} content={2} inverted/>
          </Column>
        </Columns>
      </Box>
    </Section>
  );
};
