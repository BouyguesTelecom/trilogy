import { Box, TrilogyColor } from '@trilogy-ds/react'
import {
  Badge,
  Columns,
  ColumnsItem,
  Divider,
  Icon,
  IconName,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export default function BadgeScreen(): JSX.Element {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Content props string</Title>
      <Badge content={'1'} />
      <Divider />

      <Title level={TitleLevels.THREE}>Content props number</Title>
      <Badge content={1} />
      <Divider />

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge content={2} textContent='Text with badge' />
      <Divider />

      <Title level={TitleLevels.THREE}>Icon badgeContent </Title>
      <Icon name={IconName.INFOS_CIRCLE} badgeContent='42' />
      <Divider />

      <Title level={TitleLevels.THREE}>Reversed props </Title>
      <Columns scrollable>
        <ColumnsItem size={6}>
          <Badge reversed={false} content={2} textContent='Text' />
        </ColumnsItem>
        <ColumnsItem size={6}>
          <Badge reversed={true} content={2} textContent='Text' />
        </ColumnsItem>
      </Columns>

      <Title level={TitleLevels.THREE}>Inverted props </Title>
      <Box backgroundColor={TrilogyColor.MAIN} inverted>
        <Columns scrollable>
          <ColumnsItem size={4}>
            <Badge reversed={false} content={2} textContent='Text' inverted />
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Badge reversed={true} content={2} textContent='Text' inverted />
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Badge reversed={true} content={2} inverted />
          </ColumnsItem>
        </Columns>
      </Box>
    </Section>
  )
}
