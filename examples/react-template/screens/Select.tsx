import { isMobile, Spacer, SpacerSize, TitleLevels } from '@trilogy-ds/react'
import {
  Box,
  BoxContent,
  Button,
  IconName,
  Section,
  Select,
  SelectOption,
  Text,
  Title,
} from '@trilogy-ds/react/components'
import * as React from 'react'
import { useForm } from 'react-hook-form'

export const SelectView = (): JSX.Element => {
  const [option4, setOption4] = React.useState<string>('opt_one')
  const [options3, setOptions3] = React.useState<string[]>(['opt_one', 'opt_two'])
  const [option, setOption] = React.useState<string | undefined>('opt_two')
  const [option2, setOption2] = React.useState<string | undefined>('opt_one')

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
        <Title level={TitleLevels.THREE}>Select for react-hook-form</Title>
        <Box flat>
          <BoxContent>
            {!isMobile && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Select label={'label'} {...register('gender')} sample='Select sample' help='Select helper'>
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
          </BoxContent>
        </Box>

        <Spacer size={SpacerSize.FOUR} />
        <Title level={TitleLevels.THREE}>Select custom disabled</Title>
        <Box flat>
          <BoxContent>
            <Select
              sample='Select sample'
              help='Select helper'
              required
              custom
              disabled
              name='option'
              label='label'
              id='id'
              iconName={IconName.ALERT}
              selected={'opt_two'}
              onChange={(e) => {
                setOption(e.selectValue)
              }}
            >
              <SelectOption id='id_four' value='disabled' label='disabled' disabled iconName='tri-bell' />
              <SelectOption id='id_one' value='opt_one' label='Virgile' iconName='tri-bell' />
              <SelectOption id='id_two' value='opt_two' label='Toto' iconName='tri-bell' />
              <SelectOption id='id_three' value='Venus' label='Venus' iconName='tri-bell' />
            </Select>
          </BoxContent>
        </Box>
        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.THREE}>Select custom</Title>
        <Box flat>
          <BoxContent>
            <Select
              placeholder='Select option'
              required
              custom
              name='option'
              label='label'
              id='id'
              selected={option2}
              onChange={(e) => {
                setOption2(e.selectValue)
              }}
            >
              <SelectOption id='id_one' value='opt_one' label='Virgile' />
              <SelectOption id='id_four' value='opt_two' label='disabled' disabled />
              <SelectOption id='id_two' value='opt_three' label='Toto' />
              <SelectOption id='id_three' value='opt_four' label='Venus' />
            </Select>
            <Button onClick={() => setOption2(undefined)} variant='PRIMARY'>
              Set Null
            </Button>
            <Button onClick={() => setOption2('opt_one')} variant='PRIMARY'>
              Set One
            </Button>
            <Text>Selected value : {JSON.stringify(option2, null, 2)}</Text>
          </BoxContent>
        </Box>
        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.THREE}>Big list</Title>
        <Box flat>
          <BoxContent>
            <Select
              custom
              required
              status='success'
              iconName='tri-alert'
              name='option'
              label='label'
              id='select-native-id'
              selected={option4}
              onChange={(e) => {
                e?.selectValue && setOption4(e.selectValue)
              }}
            >
              {[...Array(20).keys()].map((_, i) => {
                return <SelectOption id={`option_${i}`} value={`option_${i}`} label={`option_${i}`} />
              })}
            </Select>
            <Text>Selected value : {JSON.stringify(option4, null, 2)}</Text>
          </BoxContent>
        </Box>
        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.THREE}>Multiple options not controled</Title>
        <Box flat>
          <BoxContent>
            <Select multiple name='option' label='label' id='id' placeholder='Select value'>
              <SelectOption id='id_one' value='opt_one' label='Virgile' />
              <SelectOption id='id_two' value='opt_two' label='Toto' />
              <SelectOption id='id_three' value='opt_three' label='disabled' disabled />
              <SelectOption id='id_four' value='opt_four' label='Venus' />
              <SelectOption id='id_five' value='opt_five' label='Solar' />
            </Select>
          </BoxContent>
        </Box>

        <Spacer size={SpacerSize.FOUR} />

        <Title level={TitleLevels.THREE}>Multiple options controled</Title>
        <Box flat>
          <BoxContent>
            <Select
              multiple
              name='option'
              id='id'
              iconName={IconName.ALERT}
              selected={options3}
              onChange={(e) => {
                setOptions3(e?.selectedOptions || [])
              }}
            >
              <SelectOption id='id_one' value='opt_one' label='Virgile' iconName={IconName.EYE_SLASH} />
              <SelectOption id='id_two' value='opt_two' label='Toto' />
              <SelectOption id='id_three' value='opt_three' label='Venus' />
              <SelectOption id='id_four' value='opt_four' label='disabled' disabled />
            </Select>
            <Button onClick={() => setOptions3([])} variant='PRIMARY'>
              Set empty
            </Button>
            <Button onClick={() => setOptions3(['opt_one', 'opt_two'])} variant='PRIMARY'>
              Set one & two
            </Button>
            <Text>Selected value : {JSON.stringify(options3, null, 2)}</Text>
          </BoxContent>
        </Box>

        <Title level={TitleLevels.THREE}>Select native without icon</Title>
        <Box flat>
          <BoxContent>
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
              <SelectOption id='id_three' value='opt_three' label='Venus' />
              <SelectOption id='id_four' value='opt_four' label='disabled' disabled />
              <SelectOption id='id_five' value='opt_five' label='Solar saint' />
            </Select>
            <Button onClick={() => setOption('opt_five')} variant='PRIMARY'>
              Set Five
            </Button>
            <Text>Selected value : {JSON.stringify(option, null, 2)}</Text>
          </BoxContent>
        </Box>

        <Title level={TitleLevels.THREE}>Select native with icon</Title>
        <Box flat>
          <BoxContent>
            <Select
              required
              status='success'
              iconName='tri-alert'
              name='option'
              label='label'
              id='select-native-id'
              selected={option4}
              onChange={(e) => {
                e?.selectValue && setOption4(e.selectValue)
              }}
            >
              <SelectOption id='id_one' value='opt_one' label='Virgile' />
              <SelectOption id='id_two' value='opt_two' label='Toto' />
              <SelectOption id='id_three' value='opt_three' label='Venus' />
              <SelectOption id='id_four' value='opt_four' label='disabled' disabled />
              <SelectOption id='id_five' value='opt_five' label='Solar saint' />
            </Select>
            <Text>Selected value : {JSON.stringify(option4, null, 2)}</Text>
          </BoxContent>
        </Box>
      </Section>
    </>
  )
}
