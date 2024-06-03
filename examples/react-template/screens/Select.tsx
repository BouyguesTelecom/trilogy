import { Divider, Modal, ModalTitle, Spacer, Title, TitleLevels } from '@trilogy-ds/react'
import { IconName, Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'

export const SelectView = (): JSX.Element => {
  const [options, setOptions] = React.useState<string[]>(['opt_one'])
  const [option, setOption] = React.useState<string>('opt_two')

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
            if (typeof e !== 'string' && typeof e !== 'number') setOption(e.selectValue as string)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>
        <Spacer size={20} />

        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select nullable name='option' label='label' id='id' iconName={IconName.ALERT} selected={option}>
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
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
          iconName={IconName.ALERT}
          selected={options}
          onChange={(e) => {
            console.log(e)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>

        <Spacer size={20} />
        <Title level={TitleLevels.FOUR}>nullable</Title>
        <Select nullable multiple name='option' label='label' id='id' iconName={IconName.ALERT} selected={options}>
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>

        <Modal triggerClassNames='button is-primary' triggerContent='Open modal' closeIcon>
          <ModalTitle>Custom title</ModalTitle>
          <Select label='Choose an option'>
            <SelectOption id='id_one' value='opt_one' label='option 1' />
            <SelectOption id='id_two' value='opt_two' label='option 2' />
            <SelectOption id='id_three' value='opt_three' label='option 3' />
          </Select>
        </Modal>
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
            console.log(e)
            if (typeof e !== 'string' && typeof e !== 'number') setOption(e.selectValue as string)
          }}
        >
          <SelectOption id='id_one' value='opt_one' label='Virgile' />
          <SelectOption id='id_two' value='opt_two' label='Toto' />
          <SelectOption id='id_three' value='Venus' label='Venus' />
        </Select>
        <Spacer size={20} />
      </>
    </Section>
  )
}
