import {
  Badge,
  BadgeVariant,
  Box,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  IconSize,
  Section,
  StatusState,
  Title,
  TitleLevels,
  TrilogyColor,
  VariantState,
} from '@trilogy-ds/react'
import { BadgePositionEnum } from '../../../packages/react/components/badge/BadgeEnum'

export const BadgeScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Content props string</Title>
      <Badge variant={BadgeVariant.SUCCESS} label={'1'} />
      <Divider />

      <Title level={TitleLevels.THREE}>Badge with icon</Title>

      <Badge variant='MAIN' status={StatusState.SUCCESS} position={BadgePositionEnum.TOP_LEFT}>
        <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
      </Badge>

      <Badge variant={VariantState.INFO} status={StatusState.SUCCESS} position={BadgePositionEnum.BOTTOM_RIGHT}>
        <Icon name={IconName.INFOS_CIRCLE} size={IconSize.MEDIUM} />
      </Badge>

      <Divider />

      <Title level={TitleLevels.THREE}>TextContent props</Title>
      <Badge label={2} />

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
      <Box backgroundColor={TrilogyColor.MAIN}>
        <Columns scrollable>
          <Column size={4} key={1}>
            <Badge inverted label={1} />
          </Column>
          <Column size={4} key={2}>
            <Badge inverted label={2} />
          </Column>
          <Column size={4} key={3}>
            <Badge inverted label={3} />
          </Column>
        </Columns>
      </Box>
    </Section>
  )
}
