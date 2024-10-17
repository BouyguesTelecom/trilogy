import * as React from "react";
import {
  Badge,
  BadgeColor,
  Columns,
  ColumnsItem,
  Divider,
  Icon,
  IconName,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const BadgeScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Content props string</Title>
      <Badge content={"1"} />
      <Divider />

      <Title level={TitleLevels.THREE}>Content props number</Title>
      <Badge content={1} />
      <Divider />

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge content={2} textContent="Text with badge" />
      <Divider />

      <Title level={TitleLevels.THREE}>Icon badgeContent </Title>
      <Icon name={IconName.INFOS_CIRCLE} badgeContent="42" />
      <Divider />

      <Title level={TitleLevels.THREE}>Color + TextContent props </Title>
      <Columns scrollable>
        {Object.values(BadgeColor).map((color, index) => {
          return (
            <ColumnsItem size={6} key={index}>
              <Badge color={color} content={2} textContent="Text" />
            </ColumnsItem>
          );
        })}
      </Columns>
      <Divider />

      <Title level={TitleLevels.THREE}>Reversed props </Title>
      <Columns scrollable>
        <ColumnsItem size={6} key={1}>
          <Badge reversed={false} content={2} textContent="Text" />
        </ColumnsItem>
        <ColumnsItem size={6} key={2}>
          <Badge reversed={true} content={2} textContent="Text" />
        </ColumnsItem>
      </Columns>
    </Section>
  );
};
