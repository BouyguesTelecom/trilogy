import { AutoLayout, Section, IconName, Input, Textarea, TitleLevels } from '@trilogy-ds/react/components'
import React, { useEffect } from 'react'
import { InputType, InputStatus, Title, Divider, Link } from '@trilogy-ds/react'

export const FormScreen = (): JSX.Element => {
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
    <Section>

      <Input
        type={InputType.TEXT}
        placeholder='Placeholder dynamic value'
        name='text'
        onChange={(e) => console.log(e)}
        accessibilityLabel={'input base'}
      />
      <Input
        type={InputType.DATE}
        placeholder='Date of departure'
        name='leavingDate'
        value={leavingDate}
        onChange={(e) => setLeavingDate(e.inputValue)}
        accessibilityLabel={'input base'}
      />

      <Input
        minLength={10}
        maxLength={12}
        onKeyPress={() => console.log('key')}
        hovered
        hasIcon
        defaultValue='Input, without placeholder (and without padding at the top)'
        help="Don't show top padding when there is no placeholder"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert("wow ! How did you do ?")
        }}
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, without placeholder and search'
        help="Input, without placeholder (and without padding at the top)"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('lol')
        }}
        search
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, with placeholder, and with search'
        help='this is my help message'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('lol')
        }}
        search
        customIcon={IconName.EYE}
        placeholder='Placeholder with active search'
      />

      <Input
        hovered
        hasIcon
        defaultValue='Input, with search AND customIcon'
        help="The customIcon takes precedence over the search display so as not to display 2 icons one above the other"
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('lol')
        }}
        search
        customIcon={IconName.EYE}
        placeholder='Placeholder with active search'
      />

      <Input
        hovered
        hasIcon
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        status={InputStatus.SUCCESS}
        customIcon={IconName.EYE}
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
        customIcon={IconName.EYE}
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
        customIcon={IconName.EYE}
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
        customIcon={IconName.EYE}
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

        <Input type={InputType.TEXT} placeholder='Input type texte' />
        <Input type={InputType.NUMBER} placeholder='Input type number' />
        <Input type={InputType.SEARCH} placeholder='Input type search' />
        <Input type={InputType.PASSWORD} placeholder='Input type password' />
        <Input type={InputType.DATE} placeholder='Input type date' />
        <Input type={InputType.EMAIL} placeholder='Input type mail' />

        <Input
          hasIcon
          help='Ce mot de passe ne respecte pas les règles de sécurité'
          type={InputType.TEXT}
          status={InputStatus.ERROR}
          placeholder='This is an error message'
        />

        <Input
          hasIcon
          search
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
          customIconRight={IconName.SEARCH}
        />

        <Input
          type='password'
          hasIcon
          customIconLeft={IconName.INFOS_CIRCLE}
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
            length: { max: 4, min: 2 },
          }}
        />

        <Input type='password' help='test' placeholder='this is my placeholder' />
        <Input
          defaultValue='My 2nd default input value'
          help='this is my help message'
          type={InputType.TEXT}
          status={InputStatus.WARNING}
          customIcon={IconName.EYE}
          placeholder='This is my placeholder'
        />
      </AutoLayout>
    </Section>
  )
}
