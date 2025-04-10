import { isMobile, Spacer, SpacerSize, TitleLevels } from '@trilogy-ds/react'
import { Button, Divider, IconName, Section, Select, SelectOption, Title } from '@trilogy-ds/react/components'
import * as React from 'react'
import { useForm } from 'react-hook-form'

export const SelectView = (): JSX.Element => {
  const [options, setOptions] = React.useState<string[]>(['opt_one', 'Venus'])
  const [optionsNullable, setOptionsNullable] = React.useState<string[]>(['opt_one', 'opt_two'])
  const [option, setOption] = React.useState<string | undefined>('opt_two')
  const [optionNullable, setOptionNullable] = React.useState<string | undefined>('opt_one')
  const ref = React.useRef(null)

  React.useEffect(() => {
    console.log(ref.current)
  }, [ref])

  const POSTALCODE = [
    { code: '92300', name: 'City 1' },
    { code: '91800', name: 'City 2' },
    { code: '92800', name: 'City 3' },
  ]
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Section>
        <Title>Custom select</Title>
        {!isMobile && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Select label={'label'} {...register('gender')}>
              {POSTALCODE.map((postalcode) => (
                <SelectOption
                  key={postalcode.code}
                  value={postalcode.code}
                  label={postalcode.code + ' - ' + postalcode.name}
                />
              ))}
            </Select>
            <input type='submit' />
          </form>
        )}

        <Divider />
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.TWO}>Unique option</Title>
        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.FOUR}>Not nullable</Title>
        <Select
          required
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
          required
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
          status='error'
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
          required
          status='success'
          iconName='tri-alert'
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
