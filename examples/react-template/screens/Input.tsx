import React, {useEffect} from 'react'
import {
  AutoLayout,
  Divider,
  IconName,
  Input,
  InputStatus,
  InputType,
  Link,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import {TrilogyColor} from "@trilogy-ds/react";

export const InputScreen = (): JSX.Element => {
  const [valueTextInput, setValueTextInput] = React.useState<string | undefined>()
  const [leavingDate, setLeavingDate] = React.useState('')

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
    <Section background={TrilogyColor.WHITE}>
      <Input
        hovered
        placeholder={'Input, search icon'}
        help="Search helper input"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('close')
        }}
        search
      />

      <Input
        type={InputType.DATE}
        placeholder='Start'
        name='leavingDate'
        value={leavingDate}
        onChange={(e) => setLeavingDate(e.inputValue)}
      />

      <Input accessibilityLabel={'input base'} placeholder={'Label input'}/>

      <Input
        minLength={10}
        maxLength={12}
        onKeyPress={() => console.log('key')}
        hovered
        hasIcon
        defaultValue='Input, with placeholder (without padding top)'
        help="Do not display upper padding when there is no placeholder"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert("test")
        }}
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, without placeholder, without search'
        help="Do not display upper padding when there is no placeholder"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, with placeholder, with search'
        help='this is my help message'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('lol')
        }}
        search
        customIcon={IconName.ALERT}
        placeholder='Placeholder with activated search'
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, with search & customIcon'
        help="CustomIcon takes precedence over the display of the search to avoid displaying 2 icons, one above the other."
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
        search
        customIcon={IconName.ALERT}
        placeholder='Placeholder with activated search'
      />

      <Input
        hovered
        hasIcon
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        status={InputStatus.SUCCESS}
        customIcon={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='This is my placeholder'
      />

      <Input
        hovered
        hasIcon
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        patternValidator={new RegExp(/^hello/, 'i')}
        customIcon={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Pattern start by hello'
      />

      <Input
        hovered
        hasIcon
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        customValidator={(value) => (value === 'machin' ? InputStatus.SUCCESS : InputStatus.WARNING)}
        customIcon={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Custom validator value="machin"'
      />

      <Input
        hovered
        hasIcon
        forceControl
        defaultValue='12'
        value={valueTextInput}
        status={InputStatus.SUCCESS}
        customIcon={IconName.BELL}
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
        <Divider/>

        <Input
          hovered
          hasIcon
          forceControl
          defaultValue='Input Success'
          value={valueTextInput}
          status={InputStatus.SUCCESS}
          customIcon={IconName.CHECK_CIRCLE}
          onIconClick={() => {
            window.alert('lol')
          }}
          placeholder='Placeholder in success input type'
          onChange={(e) => {
            setValueTextInput(formatMontant(e.inputValue))
          }}
        />

        <Input type={InputType.TEXT} placeholder='Input type texte'/>
        <Input type={InputType.NUMBER} placeholder='Input type number'/>
        <Input type={InputType.PASSWORD} placeholder='Input type password'/>
        <Input type={InputType.DATE} placeholder='Input type date'/>
        <Input type={InputType.EMAIL} placeholder='Input type mail'/>

        <Input
          help='This password does not meet the security requirements.'
          type={InputType.TEXT}
          status={InputStatus.ERROR}
          placeholder='This is an error message'
        />

        <Input
          hasIcon
          help='this is my help message'
          type={InputType.TEXT}
          placeholder='This is my placeholder'
        />

        <Input
          hasIcon
          help='this is my help message'
          type={InputType.TEXT}
          placeholder='This is my placeholder'
          customIconLeft={IconName.INFOS_CIRCLE}
        />

        <Input
          type='password'
          hasIcon
          securityGauge
          help={<Link>1ère connexion / Mot de passe oublié ?</Link>}
          placeholder='this is my placeholder'
          minLength={8}
          maxLength={15}
          validationRules={{
            lowercase: true,
            uppercase: true,
            number: true,
            specialChars: true,
            length: {max: 4, min: 2},
          }}
        />

        <Input type='password' help='test' placeholder='this is my placeholder'/>
        <Input
          defaultValue='My 2nd default input value'
          help='this is my help message'
          type={InputType.TEXT}
          status={InputStatus.WARNING}
          customIcon={IconName.SEARCH}
          placeholder='This is my placeholder'
        />
      </AutoLayout>
    </Section>
  )
}
