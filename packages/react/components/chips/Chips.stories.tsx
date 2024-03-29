import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ChipsProps } from './ChipsProps'
import Chips from './Chips'
import ChipsList from './list/ChipsList'
import { Text } from "../text"

export default {
  title: 'Components/Chips',
  component: Chips,
  subcomponents: { ChipsList },
} as Meta

export const Base: Story<ChipsProps> = (args) => (
  /* L'utilisation des Chips nécessite l'injection de Trilogy-Vanilla pour fonctioner :
   <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <>
  <Text>Exemple de selection unique :</Text>
  <ChipsList>
    <Chips {...args}>Chips du panel de controls</Chips>
    <Chips
      onClick={() => {
        console.log('click chips 2')
      }}
      active={false}
    >
      Chips 2
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips 3')
      }}
      active={true}
    >
      Chips 3
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips 4')
      }}
    >
      Chips 4
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips disbabled')
      }}
      active={true}
      disabled
    >
      Chips disabled
    </Chips>
  </ChipsList>
  </>
)
Base.args = {
  active: true,
  onClick: () => {
    console.log('click chips 1')
  },
}

export const Multiple: Story<ChipsProps> = (args) => (
  <>
    <Text>Exemple des filtres multiples :</Text>
  <ChipsList multiple>
    <Chips {...args}>Chips 1</Chips>
    <Chips
      onClick={() => {
        console.log('click chips 2')
      }}
      active={false}
    >
      Chips 2
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips 3')
      }}
      active={true}
    >
      Chips 3
    </Chips>
  </ChipsList>
    </>
)
Multiple.args = {
  active: true,
  onClick: () => {
    console.log('click chips 1')
  },
}
