import { isMobile, Spacer, SpacerSize, TrilogyColor } from '@trilogy-ds/react'
import {
  AutoLayout,
  Button,
  Divider,
  IconName,
  Input,
  InputStatus,
  InputType,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const InputScreen = (): JSX.Element => {
  const [valueTextInput, setValueTextInput] = React.useState<string | undefined>()
  const [leavingDate, setLeavingDate] = React.useState('')
  const [inputSearch, setInputSearch] = React.useState('')

  const form = useForm<{
    toto: string
  }>({
    defaultValues: {
      toto: 'test value',
    },
  })

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
      <Title level={4}>Readonly input</Title>
      <Input
        disabled
        value={'ReadOnly Input value with a long value to testing if is possible to navigate into the readOnly input'}
        label='ReadOnly input'
        help='ReadOnly input'
        placeholder='ReadOnly input'
        readOnly
      />

      <Title level={4}>Input react-hook-form control</Title>
      {!isMobile && (
        <form onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}>
          <Input {...form.register('toto', { required: true })} accessibilityLabel='label' label='label' />
          <Button type='submit' variant='PRIMARY'>
            Submit
          </Button>
          <Spacer size={SpacerSize.FIVE} />
        </form>
      )}

      <Title level={4}>Input with label and without accessibilityLabel</Title>
      <Input
        label='Input label without accessibilityLabel'
        sample='Input sample'
        help='Search helper input'
        onKeyUp={(e) => console.log(e)}
        required
        iconNameLeft={IconName.ARROW_LEFT}
        accessibilityLabel='Input label not dynamic with sample'
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input without label and with accessibilityLabel</Title>
      <Input
        onKeyUp={(e) => console.log(e)}
        required
        iconNameLeft='tri-search'
        accessibilityLabel='Input with accessibilityLabel'
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input type search & set value with button</Title>
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
      <Button onClick={() => setInputSearch('Toto')} variant='PRIMARY'>
        Set Input Value to Toto
      </Button>
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input Max length </Title>
      <Input
        maxLength={20}
        onKeyPress={() => console.log('key')}
        defaultValue='Max length 20'
        help='Do not display upper padding when there is no placeholder'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
      />

      <Title level={4}>Input, without placeholder, without search</Title>
      <Input
        help='Do not display upper padding when there is no placeholder'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input, with search & customIcon</Title>
      <Input
        help='CustomIcon takes precedence over the display of the search to avoid displaying 2 icons, one above the other.'
        type={InputType.TEXT}
        onIconClick={() => {
          window.alert('test')
        }}
        iconNameRight={IconName.BELL}
        placeholder='Placeholder'
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input with pattern validator</Title>
      <Input
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        iconNameRight={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Pattern start by hello'
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Input with pattern validator and custom status</Title>
      <Input
        defaultValue='My default input value'
        help='this is my help message'
        type={InputType.TEXT}
        iconNameRight={IconName.ALERT}
        onIconClick={() => {
          window.alert('lol')
        }}
        placeholder='Custom validator value="machin"'
      />
      <Spacer size={SpacerSize.FIVE} />

      <Title level={4}>Forced control formatted normal input</Title>
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
      <Spacer size={SpacerSize.FIVE} />

      <AutoLayout>
        <Title level={TitleLevels.THREE}>Status</Title>
        <Divider />

        {Object.values(InputStatus).map((status, key) => {
          if (status === 'danger') return <React.Fragment key={key} />
          return (
            <React.Fragment key={key}>
              <Input
                help='this is my help message'
                type={InputType.TEXT}
                status={status}
                iconNameRight={IconName.ALERT}
                onIconClick={() => {
                  window.alert('lol')
                }}
                placeholder={`input ${status} status`}
              />
              <Spacer size={SpacerSize.FIVE} />
            </React.Fragment>
          )
        })}
      </AutoLayout>

      <AutoLayout>
        <Title level={TitleLevels.THREE}>Champs</Title>
        <Divider />

        <Input type={InputType.TEXT} placeholder='Input type texte' />
        <Input type={InputType.NUMBER} placeholder='Input type number' />
        <Input type={InputType.PASSWORD} placeholder='Input type password' />
        <Input type={InputType.DATE} placeholder='Input type date' />
        <Input iconNameLeft='tri-alert' type={InputType.EMAIL} placeholder='Input type mail with custom icon left' />
      </AutoLayout>

      <Spacer size={SpacerSize.FIVE} />
      <Title level={4}>Input with security gauge</Title>
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
    </Section>
  )
}
