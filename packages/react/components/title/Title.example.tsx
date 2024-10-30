import React from 'react'
import { Columns, ColumnsItem } from '../columns'
import { Title, TitleLevels } from './index'

const TitleExample = () => (
  <Columns multiline>
    <ColumnsItem size={12}>
      <Title level={TitleLevels.ONE}>Ceci titre</Title>
    </ColumnsItem>
    <ColumnsItem size={12}>
      <Title subtitle>Ceci est un sous-titre</Title>
    </ColumnsItem>
  </Columns>
)

export default TitleExample