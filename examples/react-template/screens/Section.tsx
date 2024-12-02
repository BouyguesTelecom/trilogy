import { Title } from '@trilogy-ds/react'
import { Section } from '@trilogy-ds/react/components'
import * as React from 'react'

export const SectionView = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title>First Section</Title>
      </Section>
      <Section>
        <Title>Second Section</Title>
      </Section>
      <Section>
        <Title>Third Section</Title>
      </Section>
    </>
  )
}
