import React from 'react'
import { Section } from './index'
import { Title } from '@/components/title'
import { Columns, ColumnsItem } from '@/components/columns'
import { TitleLevels } from '@/components/title/TitleEnum'

const SectionExample: React.ReactNode = (
  <Columns>
    <ColumnsItem>
      <Section>
        <Title level={TitleLevels.ONE}>Première section</Title>
      </Section>
    </ColumnsItem>
    <ColumnsItem>
      <Section>
        <Title level={TitleLevels.ONE}>Deuxième section</Title>
      </Section>
    </ColumnsItem>
    <ColumnsItem>
      <Section>
        <Title level={TitleLevels.ONE}>Troisième section</Title>
      </Section>
    </ColumnsItem>
  </Columns>
)
export default SectionExample

