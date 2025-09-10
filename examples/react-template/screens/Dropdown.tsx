import { Button, Checkbox, CheckboxList, Dropdown, Section } from '@trilogy-ds/react/components'

export const DropdownScreen = (): JSX.Element => {
  return (
    <Section>
      <Dropdown trigger={<Button variant={'PRIMARY'}>Ouvrir le menu</Button>}>
        <CheckboxList accessibilityLabelledBy='xx' verticalDesktop>
          <Checkbox name='Email' label='E-mail' value='Email' checked id='checkbox1' required />
          <Checkbox name='Phone' label='Phone' value='Phone' id='checkbox2' />
          <Checkbox name='letter' label='letter' value='letter' disabled id='checkbox3' />
          <Checkbox name='letter' label='letter' value='letter' disabled id='checkbox3' />
        </CheckboxList>
      </Dropdown>
      <Button variant={'PRIMARY'}>Ouvrir le menu</Button>
    </Section>
  )
}
