import React from 'react'

import { Meta, Story } from '@storybook/react'
import { InputProps } from './InputProps'
import Input from './Input'
import { InputStatus, InputType } from './InputEnum'
import { IconName } from '../icon'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

export const Base: Story<InputProps> = (args) => <Input {...args} />
Base.args = {
  accessibilityLabel: 'input base',
  placeholder: 'Label dynamique après saisie',
}

export const Type: Story<InputProps> = (args) => (
  <>
    <Input {...args} type={InputType.TEXT} placeholder='Input type texte' />
    <Input {...args} type={InputType.NUMBER} placeholder='Input type number' />
    <Input {...args} type={InputType.SEARCH} placeholder='Input type search' />
    <Input {...args} type={InputType.PASSWORD} placeholder='Input type password' />
    <Input {...args} type={InputType.DATE} placeholder='Input type date' />
    <Input {...args} type={InputType.EMAIL} placeholder='Input type mail' />
  </>
)

export const AvecIcône: Story<InputProps> = (args) => <Input {...args} />
AvecIcône.args = {
  hasIcon: true,
  help: 'this is my help message',
  type: InputType.TEXT,
  placeholder: 'This is my placeholder',
  customIconLeft: IconName.INFOS_CIRCLE,
  customIconRight: IconName.SEARCH,
  status: InputStatus.SUCCESS,
}

export const Status: Story<InputProps> = (args) => (
  /* L'utilisation de l'input Status nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/

  <Input {...args} />
)
Status.args = {
  hasIcon: true,
  help: 'this is my help message',
  type: InputType.TEXT,
  placeholder: 'This is my placeholder',
  customIconLeft: IconName.INFOS_CIRCLE,
  customIconRight: IconName.SEARCH,
  status: InputStatus.ERROR,
  disabled: false
}

export const Password: Story<InputProps> = (args) => (
  /* L'utilisation de l'input password nécessite l'injection de Trilogy-Vanilla pour fonctioner :
     <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
    */
  <Input {...args} />
)
Password.args = {
  hasIcon: true,
  type: InputType.PASSWORD,
  placeholder: 'This is my placeholder',
  customIconLeft: IconName.LOCK,
  securityGauge: true,
  help: 'this is my help message',
  minLength: 8,
  maxLength: 15,
  dataVerifies: {
    lowercase: true,
    uppercase: true,
    number: true,
    specialChars: true,
    length: { max: 4 },
  },
}
