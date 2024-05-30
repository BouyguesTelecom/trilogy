import { IconName, Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'

export const SelectView = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>(undefined)
  const [selectedOption2, setSelectedOption2] = React.useState<string | undefined>('opt_3')
  const [selectedOption3, setSelectedOption3] = React.useState<string | undefined>('opt_2')
  const [options, setOptions] = React.useState<string[]>(['opt_one', 'opt_two'])

  return (
    <Section>
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
        <SelectOption id='id_three' value='Mars' label='Mars'></SelectOption>
        <SelectOption id='id_three' value='VEVE' label='VEVE'></SelectOption>
        <SelectOption id='id_three' value='volvo' label='volvo'></SelectOption>
      </Select>

      <Select
        name='name'
        id='id'
        native
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => console.log(e)}
        iconName={IconName.BELL}
      >
        <SelectOption selected iconName={IconName.BELL} id='id_one' value='opt_one' label='option1'>
          option 1
        </SelectOption>
        <SelectOption iconName={IconName.BELL} id='id_two' value='opt_two' label='option2'>
          option 2
        </SelectOption>
        <SelectOption iconName={IconName.BELL} disabled id='id_three' value='opt_three' label='option3'>
          option 3
        </SelectOption>
      </Select>

      {/* <Select
        native
        onFocus={(e) => console.log('OPEN', e)}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
          const value: string | undefined =
            typeof e === 'string' || typeof e === 'number'
              ? String(e)
              : e.selectValue
              ? String(e.selectValue)
              : undefined
          setSelectedOption(value)
        }}
        selected={selectedOption}
        name='Select name'
        nullable
        id='id'
        label='Choose an option'
        iconName={IconName.ALERT}
      >
        <SelectOption iconName={IconName.BELL} id='id_one' value='opt_one' label='option1'>
          option 1
        </SelectOption>
        <SelectOption iconName={IconName.BELL} id='id_two' value='opt_two' label='option2'>
          option 2
        </SelectOption>
        <SelectOption iconName={IconName.BELL} disabled id='id_three' value='opt_three' label='option3'>
          option 3
        </SelectOption>
        <SelectOption iconName={IconName.BELL} id='id_four' value='opt_four' label='option4'>
          option 4
        </SelectOption>
        <SelectOption iconName={IconName.BELL} id='id_five' value='opt_five' label='option5'>
          option 5
        </SelectOption>
        <SelectOption iconName={IconName.BELL} id='id_six' value='opt_six' label='option6'>
          option 6
        </SelectOption>
      </Select>
      <Button
        onClick={() => {
          setSelectedOption('opt_one')
        }}
        variant={'PRIMARY'}
      >
        Select option 1
      </Button>

      <Spacer size={100} />
      <Spacer size={100} /> */}

      {/* <Select
        onFocus={(e) => {
          console.log(e)
        }}
        onBlur={(e) => console.log('CLOSE', e)}
        selected={selectedOption2}
        label='Choose one option'
        onChange={(e) => {
          const value: string | undefined =
            typeof e === 'string' || typeof e === 'number'
              ? String(e)
              : e.selectValue
              ? String(e.selectValue)
              : undefined
          setSelectedOption2(value)
        }}
        iconName={IconName.BELL}
      >
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} iconName={IconName.BELL} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
        <SelectOption iconName={IconName.BELL} id='id_6' value='opt_6' label='option6'>
          option 6
        </SelectOption>
      </Select>
      <Button
        onClick={() => {
          setSelectedOption2('opt_2')
        }}
        variant={'PRIMARY'}
      >
        Select option 2
      </Button>
      <Spacer size={100} />
      <Spacer size={100} />
      <Select
        label='Choose an option'
        iconName={IconName.BELL}
        nullable
        onFocus={(e) => {
          console.log(e)
        }}
        onBlur={(e) => console.log('CLOSE', e)}
        onChange={(e) => {
          console.log(e)
          const value: string | undefined =
            typeof e === 'string' || typeof e === 'number'
              ? String(e)
              : e.selectValue
              ? String(e.selectValue)
              : undefined
          setSelectedOption3(value)
        }}
      >
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption
              key={i}
              selected={selectedOption3 === value}
              iconName={IconName.BELL}
              id={value}
              value={value}
              label={`opt_${i}`}
            >
              {`option ${i}`}
            </SelectOption>
          )
        })}
        <SelectOption iconName={IconName.BELL} id='id_6' value='opt_6' label='option6'>
          option 6
        </SelectOption>
      </Select>
      <ButtonList>
        <Button
          onClick={() => {
            setSelectedOption3('opt_1')
          }}
          variant={'PRIMARY'}
        >
          Select option 1
        </Button>
        <Button
          onClick={() => {
            setSelectedOption3(undefined)
          }}
          variant={'PRIMARY'}
        >
          Reset
        </Button>
      </ButtonList>

      <Spacer size={100} />

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
      </Modal> */}
    </Section>
  )
}
