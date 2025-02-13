import { TrilogyColor } from '@trilogy-ds/react'
import {
  AutoLayout,
  Divider,
  IconName,
  Input,
  InputStatus,
  InputType,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/lib/components'
import * as React from 'react'
import { useEffect } from 'react'

export const InputScreen = (): JSX.Element => {
  const [valueTextInput, setValueTextInput] = React.useState<string | undefined>()
  const [leavingDate, setLeavingDate] = React.useState('')
  const [inputSearch, setInputSearch] = React.useState('')

  useEffect(() => {
    setLeavingDate(leavingDate)
    console.log('leavingDate : ', leavingDate)
  }, [leavingDate])

  function formatMontant(value: string) {
    const tmpValue = value.replace(',', '.').replace(/[^0-9.]/g, '')
    const digits = tmpValue.split('.').filter((_, i) => i <= 1)
    let rightDigits = digits[1] || ''
    if (rightDigits.length > 2) rightDigits = rightDigits.substring(0, 2)
    return digits.join('.')
  }

  return (
    <Section backgroundColor={TrilogyColor.BACKGROUND}>
      <Input
        value={inputSearch}
        label='Input label not dynamic with sample'
        sample='Input sample'
        help='Search helper input'
        placeholder="I'm a placeholder"
        onKeyUp={(e) => console.log(e)}
        required
        type='search'
        onChange={(e) => setInputSearch(e.inputValue)}
      />

      <Input
        label='Input label not dynamic with sample'
        sample='Input sample'
        help='Search helper input'
        onKeyUp={(e) => console.log(e)}
        required
        iconNameLeft={IconName.ARROW_LEFT}
      />

      <Input
        label='Input label not dynamic without sample'
        help='Search helper input'
        onKeyUp={(e) => console.log(e)}
        required
        iconNameLeft='tri-search'
      />

      <Input
        type={InputType.DATE}
        placeholder='Start'
        name='leavingDate'
        value={leavingDate}
        onChange={(e) => setLeavingDate(e.inputValue)}
      />

      <Input accessibilityLabel={'input base'} placeholder={'Label input'} />

      <Input
        minLength={10}
        maxLength={12}
        onKeyPress={() => console.log('key')}
        defaultValue='Input, with placeholder (without padding top)'
        help='Do not display upper padding when there is no placeholder'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
      />

      <Input
        defaultValue='Input, without placeholder, without search'
        help='Do not display upper padding when there is no placeholder'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
      />

      <Input
        defaultValue='Input, with placeholder, with search'
        help='this is my help message'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('lol')
        }}
        iconNameRight={IconName.ALERT}
        placeholder='Placeholder with activated search'
      />

      <Input
        defaultValue='Input, with search & customIcon'
        help='CustomIcon takes precedence over the display of the search to avoid displaying 2 icons, one above the other.'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
        iconNameRight={IconName.ALERT}
        placeholder='Placeholder with activated search'
      />

      <Input
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        status={InputStatus.SUCCESS}
        iconNameRight={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='This is my placeholder'
      />

      <Input
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        patternValidator={new RegExp(/^hello/, 'i')}
        iconNameRight={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Pattern start by hello'
      />

      <Input
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        customValidator={(value) => (value === 'machin' ? InputStatus.SUCCESS : InputStatus.WARNING)}
        iconNameRight={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Custom validator value="machin"'
      />

      <Input
        forceControl
        defaultValue='12'
        value={valueTextInput}
        status={InputStatus.SUCCESS}
        iconNameRight={IconName.BELL}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Forced control formatted normal input'
        onChange={(e) => {
          setValueTextInput(formatMontant(e.inputValue))
        }}
      />

      <AutoLayout>
        <Title level={TitleLevels.THREE}>Champs</Title>
        <Divider />

        <Input
          forceControl
          defaultValue='Input Success'
          value={valueTextInput}
          status={InputStatus.SUCCESS}
          iconNameRight={IconName.CHECK_CIRCLE}
          onIconClick={() => {
            window.alert('lol')
          }}
          placeholder='Placeholder in success input type'
          onChange={(e) => {
            setValueTextInput(formatMontant(e.inputValue))
          }}
        />

        <Input type={InputType.TEXT} placeholder='Input type texte' />
        <Input type={InputType.NUMBER} placeholder='Input type number' />
        <Input iconNameLeft='tri-alert' type={InputType.PASSWORD} placeholder='Input type password' />
        <Input type={InputType.DATE} placeholder='Input type date' />
        <Input type={InputType.EMAIL} placeholder='Input type mail' />
        <Input iconNameLeft='tri-alert' type={InputType.SEARCH} placeholder='Input type mail' />

        <Input
          help='This password does not meet the security requirements.'
          type={InputType.TEXT}
          status={InputStatus.ERROR}
          placeholder='This is an error message'
        />

        <Input help='this is my help message' type={InputType.TEXT} placeholder='This is my placeholder' />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          placeholder='This is my placeholder'
          iconNameLeft={IconName.INFOS_CIRCLE}
        />

        <Input
          type='password'
          securityGauge
          placeholder='this is my placeholder'
          minLength={8}
          maxLength={15}
          validationRules={{
            lowercase: true,
            uppercase: true,
            number: true,
            specialChars: true,
            length: { max: 4, min: 2 },
          }}
        />

        <Input type='password' help='test' placeholder='this is my placeholder' />
        <Input
          defaultValue='My 2nd default input value'
          help='this is my help message'
          type={InputType.TEXT}
          status={InputStatus.WARNING}
          iconNameRight={IconName.SEARCH}
          placeholder='This is my placeholder'
        />
      </AutoLayout>
    </Section>
  )
}
