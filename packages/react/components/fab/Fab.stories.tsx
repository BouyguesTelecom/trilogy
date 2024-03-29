import React from 'react'
import { Meta, Story } from '@storybook/react'
import { FabProps } from './FabProps'
import Fab from './Fab'
import { IconName } from '../icon'

export default {
  title: 'Components/Fab',
  component: Fab,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f6f9fc' },
        { name: 'dark', value: '#25465F' },
      ],
    },
  },
} as Meta

export const Base: Story<FabProps> = (args) => <Fab {...args} />

Base.args = {
  extended: false,
  iconName: IconName.BELL,
  children: 'Alert',
}

export const Position: Story<FabProps> = (args) => (
  <div>
    <h1 className={'title is-level-2'}>Intégration HTML</h1>
    <p className={'text'}>
      Afin de positionner le FAButton, il vous faut utiliser le helper <code>is-absolute</code> et positionner votre
      componsant avec l&apos;attribut <code>style=&ldquo; &ldquo;</code>
    </p>
    <h1 className={'title is-level-2'}>Intégration REACT</h1>
    <p className={'text'}>
      Utiliser les props de position ( <code>top , left , bottom, right </code> ).
    </p>
    <Fab {...args} />
  </div>
)

Position.args = {
  iconName: IconName.BELL,
  bottom: 24,
  right: 24,
  extended: true,
  children: 'Je suis en position absolute',
}

export const Extended: Story<FabProps> = (args) => <Fab {...args} />

Extended.args = {
  iconName: IconName.BELL,
  extended: true,
  children: 'Extended fab',
}
