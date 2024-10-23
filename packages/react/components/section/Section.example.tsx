import React from 'react'
import { Section } from './index'
import { Title } from '@/components/title'
import { Columns, ColumnsItem } from '@/lib'

const SectionExample: React.ReactNode = (
  <Columns>
    <ColumnsItem>
      <Section>
        <Title level='ONE'>Première section</Title>
      </Section>
    </ColumnsItem>
    <ColumnsItem>
      <Section>
        <Title level='ONE'>Deuxième section</Title>
      </Section>
    </ColumnsItem>
    <ColumnsItem>
      <Section>
        <Title level='ONE'>Troisième section</Title>
      </Section>
    </ColumnsItem>
  </Columns>
)
export default SectionExample
