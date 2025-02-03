import { IconName } from '@trilogy-ds/react/lib/components/icon'
import { Select, SelectOption } from '@trilogy-ds/react/lib/components/select'

export default function SelectView() {
  return (
    <>
      <Select
        custom
        disabled
        name='option'
        label='label'
        id='id'
        iconName={IconName.ALERT}
        selected={['opt_one', 'Venus']}
      >
        <SelectOption id='id_four' value='disabled' label='disabled' disabled iconName='tri-bell' />
        <SelectOption id='id_one' value='opt_one' label='Virgile' iconName='tri-bell' />
        <SelectOption id='id_two' value='opt_two' label='Toto' iconName='tri-bell' />
        <SelectOption id='id_three' value='Venus' label='Venus' iconName='tri-bell' />
      </Select>

      <Select custom name='option' label='label' id='id' selected={['opt_one', 'opt_two']}>
        <SelectOption id='id_one' value='opt_one' label='Virgile' />
        <SelectOption id='id_four' value='disabled' label='disabled' disabled />
        <SelectOption id='id_two' value='opt_two' label='Toto' />
        <SelectOption id='id_three' value='Venus' label='Venus' />
      </Select>

      <Select multiple name='option' label='label' id='id'>
        <SelectOption id='id_one' value='opt_one' label='Virgile' />
        <SelectOption id='id_two' value='opt_two' label='Toto' />
        <SelectOption id='id_four' value='disabled' label='disabled' disabled />
        <SelectOption id='id_three' value='Venus' label='Venus' />
        <SelectOption id='id_four' value='Solar saint clair' label='SolarSaintClair' />
      </Select>

      <Select multiple name='option' label='label' id='id' iconName={IconName.ALERT}>
        <SelectOption id='id_one' value='opt_one' label='Virgile' iconName={IconName.EYE_SLASH} />
        <SelectOption id='id_two' value='opt_two' label='Toto' />
        <SelectOption id='id_three' value='Venus' label='Venus' />
        <SelectOption id='id_four' value='disabled' label='disabled' disabled />
      </Select>

      <Select native name='option' label='label' id='select-native-id'>
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

      <Select iconName='tri-alert' native name='option' label='label' id='select-native-id'>
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
    </>
  )
}
