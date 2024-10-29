import React from 'react'
import { Text, TextLevels } from './index'

const TextExample = () => (
  <Text accessibilityLabel='ceci est un paragraphe' level={TextLevels.ONE} markup='p' typo='has-text-weight-semibold'>
    Ceci est mon paragraphe
  </Text>
)

export default TextExample
