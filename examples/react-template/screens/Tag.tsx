import React from 'react'
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

export const TagScreen = (): JSX.Element => {
  return (
    <>
      <Container>
        <TagList>
          <Tag variant={TagVariant.INFO}>Tag secondaire</Tag>
          <Tag onClick={() => alert('test')} variant={TagVariant.ERROR}>
            Tag error
          </Tag>
          <Tag onClick={() => alert('test')} variant={TagVariant.SUCCESS}>
            Tag success
          </Tag>
          <Tag onClick={() => alert('test')} variant={TagVariant.WARNING}>
            Tag warning
          </Tag>
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
          <Tag iconName={IconName.CHECK_CIRCLE} variant={TagVariant.DEFAULT}>Tag default</Tag>
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
    </>
  )
}
