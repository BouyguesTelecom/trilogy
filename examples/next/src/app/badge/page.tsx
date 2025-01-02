import { Badge, BadgePositionEnum } from '@trilogy-ds/react/lib/components/badge'
import { Section } from '@trilogy-ds/react/lib/components/section'
import { StatusState } from '@trilogy-ds/react/lib/objects/facets/Status'
import { VariantState } from '@trilogy-ds/react/lib/objects/facets/Variant'
import '@trilogy-ds/styles/dist/default/trilogy.css'

export default function BadgeScreen(): JSX.Element {
  return (
    <Section>
      <Badge label={'1'} />
      <Badge variant={VariantState.INFO} status={StatusState.SUCCESS} position={BadgePositionEnum.TOP_LEFT}></Badge>
      <Badge variant={VariantState.INFO} status={StatusState.SUCCESS} position={BadgePositionEnum.BOTTOM_RIGHT}></Badge>
      <Badge label={2} />
      <Badge inverted label={1} />
    </Section>
  )
}
