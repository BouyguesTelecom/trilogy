import type { Meta, StoryObj } from '@storybook/react'
import Radio from './Radio'
import { Column, Columns, RadioList, RadioTile, RadioTiles, Section, TrilogyColor } from '@trilogy-ds/react'
import { Divider } from '../../lib'

const meta: Meta<typeof Radio> = {
  component: Radio,
  subcomponents: { RadioList, RadioTile, RadioTiles },
}

export default meta

type Story = StoryObj<typeof Radio>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns multiline>
        <Column align='ALIGNED_CENTER' size={12}>
          <RadioList verticalDesktop>
            <Radio checked id='checkbox1' label='Label' name='name-1' value='value' />
            <Radio id='checkbox2' label='Label' name='name-1' value='value' />
            <Radio disabled id='checkbox3' label='Label' name='name-1' value='value' />
            <Radio id='checkbox4' label='Label' name='name-1' readonly value='value' />
          </RadioList>
          <Divider />
        </Column>
        <Column size={12}>
          <RadioTiles>
            <RadioTile
              className='is-fullheight'
              description='Je suis une description simple'
              id='tile-1'
              label='label'
              name='name-tile-1'
              value='value'
            />
            <RadioTile
              description='Je suis une description simple'
              icon='tri-alert'
              id='tile-2'
              label='label'
              name='name-tile-1'
              value='value'
            />
          </RadioTiles>
          <Divider />
        </Column>
        <Column align='ALIGNED_CENTER' size={12}>
          <RadioTiles align='ALIGNED_CENTER'>
            <RadioTile
              description='Je suis une description simple'
              horizontal
              icon='tri-alert'
              id='tile-horizontal-1'
              label='label'
              name='name-tile-2'
              value='value'
            />
            <RadioTile
              description='Je suis une description simple'
              horizontal
              icon='tri-alert'
              id='tile-horizontal-2'
              label='label'
              name='name-tile-2'
              value='value'
            />
            <RadioTile
              description='Je suis une description simple'
              horizontal
              icon='tri-alert'
              id='tile-horizontal-3'
              label='label'
              name='name-tile-2'
              value='value'
            />
          </RadioTiles>
        </Column>
      </Columns>
    </Section>
  ),
}

const RadioListTemplate: Story = {
  render: (...args) => (
    <Section>
      <Columns multiline>
        <Column align='ALIGNED_CENTER' size={12}>
          <RadioList verticalDesktop>{<Radio {...args} />}</RadioList>
          <Divider />
        </Column>
      </Columns>
    </Section>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns multiline>
        <Column align='ALIGNED_CENTER' size={12}>
          <RadioList verticalDesktop>
            <Radio {...args} />
          </RadioList>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    checked: false,
    disabled: false,
    id: 'checkbox1',
    label: 'Label',
    name: 'name-1',
    readonly: false,
    value: 'value',
  }
}
