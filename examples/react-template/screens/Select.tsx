import { Button, Divider, Spacer, Title, TitleLevels } from '@trilogy-ds/react'
import { IconName, Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'

export const SelectView = (): JSX.Element => {
  const [options, setOptions] = React.useState<(string | number)[]>(['opt_one', 'opt_two'])
  const [optionsNullable, setOptionsNullable] = React.useState<(string | number)[]>(['opt_one', 'opt_two'])
  const [option, setOption] = React.useState<string | undefined>('opt_one')
  const [optionNullable, setOptionNullable] = React.useState<string | undefined>('opt_one')

  return (
    <Section>
      <>
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
          iconName={IconName.ALERT}
          selected={option}
          onChange={(e) => {
            if (typeof e !== 'string' && typeof e !== 'number') setOption(e.selectValue)
          }}
        >
          <SelectOption id='id_four' value='disabled' label='disabled' disabled iconName='tri-bell' />
          <SelectOption id='id_one' value='opt_one' label='Virgile' iconName='tri-bell' />
          <SelectOption id='id_two' value='opt_two' label='Toto' iconName='tri-bell' />
          <SelectOption id='id_three' value='Venus' label='Venus' iconName='tri-bell' />
        </Select>
        <Button onClick={() => setOption('Venus')} variant='PRIMARY'>
          Set value 3
        </Button>
        <Spacer size={20} />

        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select
          nullable
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={optionNullable}
          onChange={(e) => {
            if (typeof e !== 'string' && typeof e !== 'number') setOptionNullable(e.selectValue)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>
        <Button onClick={() => setOptionNullable(undefined)} variant='PRIMARY'>
          Set Null
        </Button>
        <Button onClick={() => setOptionNullable('opt_one')} variant='PRIMARY'>
          Set One
        </Button>
        <Spacer size={20} />

        <Title level={TitleLevels.TWO}>Multiple options</Title>
        <Spacer size={20} />
        <Title level={TitleLevels.FOUR}>Not nullable</Title>
        <Select
          multiple
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={options}
          onChange={(e) => {
            if (typeof e !== 'string' && typeof e !== 'number' && 'selectedOptions' in e) {
              e?.selectedOptions && setOptions(e.selectedOptions)
            }
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>
        <Button onClick={() => setOptions((prev) => [...prev, 'Venus'])} variant='PRIMARY'>
          Set Venus
        </Button>

        <Spacer size={20} />
        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select
          nullable
          multiple
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={optionsNullable}
          onChange={(e) => {
            if (typeof e !== 'string' && typeof e !== 'number' && 'selectedOptions' in e) {
              e?.selectedOptions && setOptionsNullable(e.selectedOptions)
            }
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
        </Select>
        <Button onClick={() => setOptionsNullable([])} variant='PRIMARY'>
          Set Null
        </Button>
        <Button onClick={() => setOptionsNullable(['opt_one', 'opt_two'])} variant='PRIMARY'>
          Set one & two
        </Button>
      </>

      <>
        <Title>Native select {'(web)'}</Title>
        <Divider />
        <Spacer size={20} />
        <Title level={TitleLevels.TWO}>Unique option</Title>
        <Spacer size={20} />
        <Title level={TitleLevels.FOUR}>Not nullable</Title>
        <Select
          native
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={option}
          onChange={(e) => {
            if (typeof e !== 'string' && typeof e !== 'number' && 'selectValue' in e) {
              e?.selectValue && setOption(e.selectValue)
            }
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
        </Select>
        <Spacer size={20} />
      </>
    </Section>
  )
}
