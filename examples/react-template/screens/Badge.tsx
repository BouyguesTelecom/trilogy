import React from 'react'
import {
  Badge,
  BadgeColor,
  BadgeTextDirection,
  Columns,
  ColumnsItem,
  Divider,
  Icon,
  IconName,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'

export const BadgeScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>With Children</Title>
      <Badge>
        <Text>10</Text>
      </Badge>
      <Divider />

      <Title level={TitleLevels.THREE}>Content string</Title>
      <Badge content={'1'} />
      <Divider />

      <Title level={TitleLevels.THREE}>Content number</Title>
      <Badge content={1} />
      <Divider />

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge content={2} textContent='Text with badge' />
      <Divider />

      <Title level={TitleLevels.THREE}>Icon badgeContent </Title>
      <Icon name={IconName.INFOS_CIRCLE} badgeContent='42' />
      <Divider />

      <Title level={TitleLevels.THREE}>Color + TextContent props </Title>
      <Columns inlined>
        {Object.values(BadgeColor).map((color, index) => {
          return (
            <ColumnsItem size={6} key={index}>
              <Badge color={color} content={2} textContent='Text' />
            </ColumnsItem>
          )
        })}
      </Columns>
      <Divider />

      <Title level={TitleLevels.THREE}>Direction props </Title>
      <Columns inlined>
        {Object.values(BadgeTextDirection).map((direction, index) => {
          return (
            <ColumnsItem size={6} key={index}>
              <Badge direction={direction} content={2} textContent='Text' />
            </ColumnsItem>
          )
        })}
      </Columns>
    </Section>
  )
}
