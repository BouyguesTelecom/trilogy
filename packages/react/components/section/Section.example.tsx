import React from 'react'
import { Section } from './index'
import { Title } from '@/components/title'

const SectionExample: React.ReactNode =

  <>
    <Section>
      <Title level='ONE'>
        Première section
      </Title>
    </Section>
    <Section>
      <Title level='ONE'>
        Deuxième section
      </Title>
    </Section>
    <Section>
      <Title level='ONE'>
        Troisième section
      </Title>
    </Section>
  </>

export default SectionExample
