import React from 'react'
import { Text } from './index'

const TextExample: React.ReactNode =
  <Text
    accessibilityLabel="ceci est un paragraphe"
    level="ONE"
    markup="p"
    typo="has-text-weight-semibold"
  >
    Ceci est mon paragraphe
  </Text>



export default TextExample
