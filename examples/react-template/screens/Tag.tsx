import * as React from 'react'
import {
  Container,
  Divider,
  IconName,
  Section,
  Tag,
  TagList,
  TagVariant,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { TrilogyColor } from '@trilogy-ds/react'

export const TagScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <TagList>
          <Tag label='Tag secondaire' variant={TagVariant.INFO} />
          <Tag label='Tag secondaire' variant={TagVariant.WARNING} />
          <Tag label='Tag secondaire' variant={TagVariant.SUCCESS} />
          <Tag label='Tag secondaire' variant={TagVariant.ERROR} />
        </TagList>

        <Title level={TitleLevels.THREE}>Tag avec icone</Title>
        <Divider />
        <TagList>
          <Tag label='Tag error' iconName={IconName.EXCLAMATION_CIRCLE} variant={TagVariant.ERROR} />
          <Tag label='Tag warning' iconName={IconName.ALERT} variant={TagVariant.WARNING} />
          <Tag label='Tag info' iconName={IconName.INFOS_CIRCLE} variant={TagVariant.INFO} />
          <Tag label='Tag success' iconName={IconName.CHECK_CIRCLE} />
        </TagList>
      </Container>

      <Container>
        <Title level={TitleLevels.THREE}>Small tag</Title>
        <Divider />
        <TagList>
          <Tag small label='Tag error' iconName={IconName.EXCLAMATION_CIRCLE} variant={TagVariant.ERROR} />
          <Tag small label='Tag warning' iconName={IconName.ALERT} variant={TagVariant.WARNING} />
          <Tag small label='Tag info' iconName={IconName.INFOS_CIRCLE} variant={TagVariant.INFO} />
          <Tag small label='Tag success' iconName={IconName.CHECK_CIRCLE} variant={TagVariant.SUCCESS} />
        </TagList>
      </Container>

      <Section inverted backgroundColor={TrilogyColor.MAIN}>
        <Title level={TitleLevels.THREE}>Inverted tag</Title>
        <Divider inverted />
        <TagList>
          <Tag inverted label='Tag error' iconName={IconName.EXCLAMATION_CIRCLE} variant={TagVariant.ERROR} />
          <Tag inverted label='Tag wraning' iconName={IconName.ALERT} variant={TagVariant.WARNING} />
          <Tag inverted label='Tag info' iconName={IconName.INFOS_CIRCLE} variant={TagVariant.INFO} />
          <Tag inverted label='Tag success' iconName={IconName.CHECK_CIRCLE} variant={TagVariant.SUCCESS} />
        </TagList>
      </Section>
    </Section>
  )
}
