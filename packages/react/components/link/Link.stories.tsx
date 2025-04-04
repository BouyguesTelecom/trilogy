import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'
import { Text } from '../text'
import { Row, Rows } from '../../lib'
import { IconName } from '../icon'

const meta: Meta<typeof Link> = {
  component: Link,
}

export default meta

type Story = StoryObj<typeof Link>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Rows>
      <Row>
        <Link> Mot de passe oublié ? </Link>
      </Row>
      <Row>
        <Text> Je suis dans un paragraphe et ceci est un{' '}
          <Link inline> lien standard inline</Link>
        </Text>
      </Row>
      <Row>
          <Link href={"https://www.bouyguestelecom.fr"} blank iconName={IconName.ALERT}> lien href blank avec icone</Link>
      </Row>
    </Rows>
  ),
}
