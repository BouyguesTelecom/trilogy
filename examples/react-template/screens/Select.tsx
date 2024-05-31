import { Divider, Modal, ModalTitle, Spacer, Title, TitleLevels } from '@trilogy-ds/react'
import { IconName, Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'

export const SelectView = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>(undefined)
  const [selectedOption2, setSelectedOption2] = React.useState<string | undefined>('opt_3')
  const [selectedOption3, setSelectedOption3] = React.useState<string | undefined>('opt_2')
  const [options, setOptions] = React.useState<string[]>(['opt_one'])
  const [option, setOption] = React.useState<string>('opt_one')

  return (
    <Section>
      <Title>Custom select</Title>
      <Divider />
      <Spacer size={20} />
      <Title level={TitleLevels.TWO}>Unique option</Title>
      <Spacer size={20} />
      <Title level={TitleLevels.FOUR}>Not nullable</Title>
      <Select
        name='option'
        label='label'
        id='id'
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
        }}
        iconName={IconName.ALERT}
        selected={option}
      >
        <SelectOption id='id_one' value='opt_one' label='Virgile'></SelectOption>
        <SelectOption id='id_two' value='opt_two' label='Toto'></SelectOption>
        <SelectOption id='id_three' value='Venus' label='Venus'></SelectOption>
      </Select>
      <Spacer size={20} />

      <Title level={TitleLevels.FOUR}>nullable</Title>
      <Select
        nullable
        name='option'
        label='label'
        id='id'
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
        }}
        iconName={IconName.ALERT}
        selected={option}
      >
        <SelectOption id='id_one' value='opt_one' label='Virgile'></SelectOption>
        <SelectOption id='id_two' value='opt_two' label='Toto'></SelectOption>
        <SelectOption id='id_three' value='Venus' label='Venus'></SelectOption>
      </Select>
      <Spacer size={20} />

      <Title level={TitleLevels.TWO}>Multiple options</Title>
      <Spacer size={20} />
      <Title level={TitleLevels.FOUR}>Not nullable</Title>
      <Select
        multiple
        name='option'
        label='label'
        id='id'
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
        }}
        iconName={IconName.ALERT}
        selected={options}
      >
        <SelectOption id='id_one' value='opt_one' label='Virgile'></SelectOption>
        <SelectOption id='id_two' value='opt_two' label='Toto'></SelectOption>
        <SelectOption id='id_three' value='Venus' label='Venus'></SelectOption>
      </Select>

      <Spacer size={20} />
      <Title level={TitleLevels.FOUR}>nullable</Title>
      <Select
        nullable
        multiple
        name='option'
        label='label'
        id='id'
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
        }}
        iconName={IconName.ALERT}
        selected={options}
      >
        <SelectOption id='id_one' value='opt_one' label='Virgile'></SelectOption>
        <SelectOption id='id_two' value='opt_two' label='Toto'></SelectOption>
        <SelectOption id='id_three' value='Venus' label='Venus'></SelectOption>
      </Select>

      <Modal triggerClassNames='button is-primary' triggerContent='Open modal' closeIcon>
        <ModalTitle>Custom title</ModalTitle>

        <Select label='Choose an option'>
          <SelectOption selected id='id_one' value='opt_one' label='option1'>
            option 1
          </SelectOption>
          <SelectOption id='id_two' value='opt_two' label='option2'>
            option 2
          </SelectOption>
          <SelectOption id='id_three' value='opt_three' label='option3'>
            option 3
          </SelectOption>
        </Select>
      </Modal>
    </Section>
  )
}
