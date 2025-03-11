import { Button, Divider, Spacer, SpacerSize, Title, TitleLevels } from '@trilogy-ds/react'
import { IconName, Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'
import {useForm} from "react-hook-form";

export const SelectView = (): JSX.Element => {
  const [options, setOptions] = React.useState<string[]>(['opt_one', 'Venus'])
  const [optionsNullable, setOptionsNullable] = React.useState<string[]>(['opt_one', 'opt_two'])
  const [option, setOption] = React.useState<string | undefined>('opt_two')
  const [optionNullable, setOptionNullable] = React.useState<string | undefined>('opt_one')

  const form = useForm<{
    toto: string
  }>({
    defaultValues: {
      toto: "test value"
    }
  });

  const POSTALCODE = [{code : '92300', name: 'haut de cuisse'}, {code: '91800', name: 'haut de france'}, {code: '92800', name: 'tome de savoie'}]

  return (
    <>
      <Section>
        <Title>Custom select</Title>
        <Select
          label={'label'}
          name={'test'}
          {...form.register('firstName', { required: true })} >
            {POSTALCODE.map((postalcode) => <SelectOption key={postalcode.code} value={postalcode.code} label={postalcode.code+' - '+postalcode.name}
          />)}
        </Select>

        <Divider />
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.TWO}>Unique option</Title>
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.FOUR}>Not nullable</Title>
        <Select
          custom
          disabled
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={option}
          onChange={(e) => {
            setOption(e.selectValue)
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
        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select
          custom
          name='option'
          label='label'
          id='id'
          selected={optionNullable}
          onChange={(e) => {
            setOptionNullable(e.selectValue)
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
        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.TWO}>Multiple options</Title>
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.FOUR}>Not nullable</Title>
        <Select
          multiple
          name='option'
          label='label'
          id='id'
          selected={options}
          onChange={(e) => {
            e?.selectedOptions && setOptions(e.selectedOptions)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
          <SelectOption id='id_three' value='Venus' label='Venus' />
          <SelectOption id='id_four' value='Solar saint clair' label='SolarSaintClair' />
        </Select>
        <Button onClick={() => setOptions((prev) => [...prev, 'Venus'])} variant='PRIMARY'>
          Set Venus
        </Button>

        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select
          multiple
          name='option'
          label='label'
          id='id'
          iconName={IconName.ALERT}
          selected={optionsNullable}
          onChange={(e) => {
            e?.selectedOptions && setOptionsNullable(e.selectedOptions)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' iconName={IconName.EYE_SLASH} />
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
      </Section>

      <Section>
        <Title>Native select {'(web)'}</Title>
        <Divider />
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.FOUR}>Not icon</Title>
        <Select
          custom
          name='option'
          label='label'
          id='select-native-id'
          selected={option}
          onChange={(e) => {
            e?.selectValue && setOption(e.selectValue)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
          <SelectOption
            id='id_five'
            value='Solar saint clair plutonium enigmus'
            label='Solar saint clair plutonium enigmus'
          />
        </Select>

        <Title level={TitleLevels.FOUR}>With icon</Title>
        <Select
          iconName='tri-alert'
          custom
          name='option'
          label='label'
          id='select-native-id'
          selected={option}
          onChange={(e) => {
            e?.selectValue && setOption(e.selectValue)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
          <SelectOption id='id_four' value='disabled' label='disabled' disabled />
          <SelectOption
            id='id_five'
            value='Solar saint clair plutonium enigmus'
            label='Solar saint clair plutonium enigmus'
          />
        </Select>
      </Section>
    </>
  )
}
