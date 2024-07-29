import React from 'react'
import { Title } from './index'

const TitleExample: React.ReactNode =

  <>
    <Title
      level="ONE"
    >
      Ceci titre
    </Title>
    <Title subtitle>
      Ceci est un sous-titre
    </Title>
    <Title subtitle>
      Ceci est text surligner
    </Title>
  </>


export default TitleExample;
