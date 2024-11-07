import {
  Container,
  Divider,
  IconName,
  Section,
  Tag,
  TagList,
  TagVariant,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export default function TagScreen(): JSX.Element {
  return (
    <Section>
      <Container>
        <TagList>
          <Tag variant={TagVariant.INFO}>Tag secondaire</Tag>
          <Tag variant={TagVariant.ERROR}>Tag error</Tag>
          <Tag variant={TagVariant.SUCCESS}>Tag success</Tag>
          <Tag variant={TagVariant.WARNING}>Tag warning</Tag>
        </TagList>
      </Container>

      <Container>
        <Title level={TitleLevels.THREE}>Tag default</Title>
        <Divider />
        <Text>In list</Text>
        <TagList>
          <Tag variant={TagVariant.ERROR}>Tag error</Tag>
          <Tag variant={TagVariant.INFO}>Tag info</Tag>
          <Tag variant={TagVariant.SUCCESS}>Tag success</Tag>
          <Tag variant={TagVariant.WARNING}>Tag warning</Tag>
        </TagList>
      </Container>

      <Container>
        <Title level={TitleLevels.THREE}>Tag avec icone</Title>
        <Divider />
        <TagList>
          <Tag iconName={IconName.EXCLAMATION_CIRCLE} variant={TagVariant.ERROR}>
            Tag error
          </Tag>
          <Tag iconName={IconName.CHECK_CIRCLE} variant={TagVariant.SUCCESS}>
            Tag success
          </Tag>
          <Tag iconName={IconName.ALERT} variant={TagVariant.WARNING}>
            Tag warning
          </Tag>
          <Tag iconName={IconName.INFOS_CIRCLE} variant={TagVariant.INFO}>
            Tag info
          </Tag>
          <Tag iconName={IconName.CHECK_CIRCLE}>Tag default</Tag>
        </TagList>
      </Container>

      <Container>
        <Title level={TitleLevels.THREE}>Small tag</Title>
        <Divider />
        <Tag small variant={TagVariant.ERROR}>
          Tag error
        </Tag>
        <Tag small variant={TagVariant.SUCCESS}>
          Tag success
        </Tag>
        <Tag small iconName={IconName.ALERT} variant={TagVariant.WARNING}>
          Tag warning
        </Tag>
      </Container>

      <Section>
        <Title level={TitleLevels.THREE}>Inverted tag</Title>
        <Divider />
        <Tag inverted variant={TagVariant.ERROR}>
          Tag error
        </Tag>
        <Tag inverted variant={TagVariant.SUCCESS}>
          Tag success
        </Tag>
        <Tag inverted iconName={IconName.ALERT} variant={TagVariant.WARNING}>
          Tag warning
        </Tag>
        <Tag inverted iconName={IconName.ALERT} variant={TagVariant.INFO}>
          Tag info
        </Tag>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Deletable Tags</Title>
        <Divider />
        <TagList>
          <Tag deletable>Tag Deletable</Tag>
          <Tag deletable variant={TagVariant.ERROR}>
            Deletable Error
          </Tag>
          <Tag deletable variant={TagVariant.SUCCESS}>
            Deletable Success
          </Tag>
          <Tag deletable variant={TagVariant.WARNING}>
            Deletable Warning
          </Tag>
          <Tag deletable variant={TagVariant.INFO}>
            Deletable Info
          </Tag>
        </TagList>
      </Section>
    </Section>
  )
}
