import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import Link from './Link'
import { LinkProps } from './LinkProps'
import { Divider } from '../divider'
import { Text } from '../text'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const Base: Story<LinkProps> = (args) => (
  <>
    <Link {...args}> Mot de passe oublié ?</Link>
    <Divider />
    <Text>
      Je suis dans un paragraphe et ceci est un <Link markup="span">lien standard</Link>
    </Text>
  </>
)

export const DansUnParagraphe: Story<LinkProps> = (args) => (
  <Text>
    Je suis dans un paragraphe et ceci est un <Link {...args}>lien standard</Link> inline.
  </Text>
)
DansUnParagraphe.args = {
  markup: 'span',
}

export const LiensVersPageExterne: Story<LinkProps> = (args) => <Link {...args}>En savoir plus</Link>
LiensVersPageExterne.args = {
  blank: true,
  href: 'https://github.com/BouyguesTelecom/trilogy',
}

export const LienAutonome: Story<LinkProps> = (args) => <Link {...args}>Mot de passe oublié</Link>
LienAutonome.args = {
  href: 'https://github.com/BouyguesTelecom/trilogy'

  blank: true,
}

export const Inverted: Story<LinkProps> = (args) => (
  <div style={{ backgroundColor: '#25465f', padding: 10 }}>
    <Link {...args}> Mot de passe oublié ?</Link>
  </div>
)
Inverted.args = {
  inverted: true,
}
