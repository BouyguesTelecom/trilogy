import { IconName, Link, Section, Text, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export default function LinkScreen(): JSX.Element {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Links inline</Title>
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
    </Section>
  )
}
