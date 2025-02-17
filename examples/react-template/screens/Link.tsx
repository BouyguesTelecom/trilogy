import * as React from 'react'
import { IconName, Link, Section, Text, Title, TitleLevels } from '@trilogy-ds/react/components'
import { Divider, TrilogyColor, TypographyAlign, View } from '@trilogy-ds/react'

export const LinkScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Links inline</Title>
      <Link iconName={IconName.ARROW_DOWN}>Link with arrow</Link>

      <Text>
        I'm in a paragraph and this is a <Link>standard link</Link> while this is a{' '}
        <Link>standard ununderlined link.</Link> If I want atertiary colored link, I can also use this
        <Link>underlined link</Link>, or this <Link>underlined one.</Link>
      </Text>
      <Title level={TitleLevels.THREE}>External links</Title>
      <Link href='https://google.com' blank>
        External link
      </Link>
      <Title level={TitleLevels.THREE}>Link with icon</Title>
      <Link href='https://google.com' blank iconName={IconName.ARROW_RIGHT}>
        External link
      </Link>

      <Divider />

      <Link href='https://example.com' iconName={IconName.SEARCH} data-testid={'test-icon'}>
        Example
      </Link>

      <Divider />
      <Title level={TitleLevels.THREE}>Centered links</Title>
      <View backgroundColor={TrilogyColor.INFO_FADE}>
        <Link inline typo={TypographyAlign.TEXT_LEFT}>
          LEFT - This is a test
        </Link>
        <Link inline typo={TypographyAlign.TEXT_CENTERED}>
          CENTERED - This is a test
        </Link>
        <Link inline typo={TypographyAlign.TEXT_RIGHT}>
          RIGHT - This is a test
        </Link>
      </View>
    </Section>
  )
}
