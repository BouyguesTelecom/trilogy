import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Column, IconName } from '../../lib'
import AutoComplete from './AutoComplete'

const meta: Meta<typeof AutoComplete> = {
  component: AutoComplete,
}

export default meta

type Story = StoryObj<typeof AutoComplete>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={6}>
        <AutoComplete
          data={['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']}
          //@ts-ignore
          iconNameLeft={'tri-beach'}
          name='autocomplete-fruits'
        />
      </Column>
      <Column size={6}>
        <AutoComplete
          absoluteMenu
          data={['Alice', 'Charlie', 'David', 'Darwin', 'Eve']}
          iconNameLeft='tri-search'
          name='autocomplete-names'
        />
      </Column>
      <Column size={6}>
        <AutoComplete
          data={['Alice', 'Charlie', 'David', 'Darwin', 'Eve']}
          disabled
          iconNameLeft='tri-search'
          name='autocomplete-names'
        />
      </Column>
      <Column size={6}>
        <AutoComplete
          absoluteMenu
          data={['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']}
          displayMenu
          fullwidthMenu
          iconNameRight='tri-infos-circle'
          placeholder='Autocomplete'
          value='Apple'
        />
      </Column>
    </Columns>
  ),
}

export const SandBox: Story = {
  render: (args) => (
    <Columns multiline>
      <Column size={6}>
        <AutoComplete {...args}/>
      </Column>
    </Columns>
  ),
  args:{
    data: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
    iconNameLeft: IconName.BELL,
    name: 'autocomplete-fruits',
    placeholder: 'Autocomplete',
    value: '',
  }
}
