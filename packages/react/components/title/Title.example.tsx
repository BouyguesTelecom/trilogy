import React from 'react'
import { Columns, ColumnsItem } from '../columns'
import { Title } from './index'

const TitleExample: React.ReactNode =

  <>
    <Columns multiline>
      <ColumnsItem size={12}>
        <Title
          level="ONE"
          onClick={function noRefCheck() { }}
        >
          Ceci titre
        </Title>
      </ColumnsItem>
      <ColumnsItem size={12}>
        <Title subtitle>
          Ceci est un sous-titre
        </Title>
      </ColumnsItem>
    </Columns>
  </>

export default TitleExample
