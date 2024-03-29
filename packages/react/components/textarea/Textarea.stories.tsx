import React from 'react'

import { Meta, Story } from '@storybook/react'

import Textarea from './Textarea'
import { TextareaProps } from './TextareaProps'
import {IconName} from "../icon";

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta

export const Base: Story<TextareaProps> = (args) => (
  /* L'utilisation du textarea nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Textarea {...args} />
)
Base.args = {
  placeholder: 'placeholder',
  label: 'Label non dynamique',
  dynamicPlaceholder: false,
}

export const LabelDynamique: Story<TextareaProps> = (args) => <Textarea {...args} />
LabelDynamique.args = {
  placeholder: 'placeholder',
  label: 'Label dynamique',
}

export const Disabled: Story<TextareaProps> = (args) => <Textarea {...args} />
Disabled.args = {
  disabled: true,
  placeholder: 'placeholder',
  label: 'Label dynamique',
}
export const AvecUneIcône: Story<TextareaProps> = (args) => <Textarea {...args} />
AvecUneIcône.args = {
  placeholder: 'placeholder',
  label: 'Label dynamique',
  iconName: IconName.INFOS_CIRCLE,
}

export const AvecCompteur: Story<TextareaProps> = (args) => <Textarea {...args} />
AvecCompteur.args = {
  placeholder: 'placeholder',
  label: 'Label dynamique',
  dynamicPlaceholder: false,
  maxLength: 150,
}

export const Status: Story<TextareaProps> = (args) => <Textarea {...args} />
Status.args = {
  placeholder: 'placeholder',
  label: 'Label dynamique',
  dynamicPlaceholder: false,
  maxLength: 150,
  status: 'error',
}
