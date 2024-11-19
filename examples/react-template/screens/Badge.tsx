import * as React from 'react'
import {
  Badge,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  IconSize,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { Alignable, Box, StatusState, Text, TrilogyColor, VariantState } from '@trilogy-ds/react'
import { BadgePositionEnum } from '../../../packages/react/components/badge/BadgeEnum'

export const BadgeScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Content props string</Title>
      <Badge label={'1'} />
      <Divider />

      <Title level={TitleLevels.THREE}>Content props number</Title>
      <Columns verticalAlign={Alignable.ALIGNED_CENTER} gap={2}>
        <Column narrow>
          <Badge label={1} variant={VariantState.ACCENT} position={BadgePositionEnum.TOP_RIGHT}>
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
          </Badge>
        </Column>
        <Column narrow>
          <Text>PANIER</Text>
        </Column>
      </Columns>

      <Columns verticalAlign={Alignable.ALIGNED_CENTER} gap={2}>
        <Column narrow>
          <Badge
            variant={VariantState.INFO}
            status={StatusState.SUCCESS}
            position={BadgePositionEnum.TOP_LEFT}
          >
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
          </Badge>
        </Column>
        <Column narrow>
          <Text>Success</Text>
        </Column>
      </Columns>

      <Columns verticalAlign={Alignable.ALIGNED_CENTER} gap={2}>
        <Column narrow>
          <Badge
            variant={VariantState.INFO}
            position={BadgePositionEnum.TOP_LEFT}
          >
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
          </Badge>
        </Column>
        <Column narrow>
          <Text>Success</Text>
        </Column>
      </Columns>
      <Divider />

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge label={2} />
      <Divider />

      <Title level={TitleLevels.THREE}>Icon badgeContent </Title>
      <Icon name={IconName.INFOS_CIRCLE} />
      <Divider />

      <Title level={TitleLevels.THREE}>Reversed props </Title>
      <Columns scrollable>
        <Column size={6} key={1}>
          <Badge label={2} />
        </Column>
        <Column size={6} key={2}>
          <Badge label={2} />
        </Column>
      </Columns>

      <Title level={TitleLevels.THREE}>Inverted props </Title>
      <Box backgroundColor={TrilogyColor.MAIN} inverted>
        <Columns scrollable>
          <Column size={4} key={1}>
            <Badge label={2} />
          </Column>
          <Column size={4} key={2}>
            <Badge label={2} />
          </Column>
          <Column size={4} key={2}>
            <Badge label={2} />
          </Column>
        </Columns>
      </Box>
    </Section>
  )
}
