import { Otp, Section, Spacer, SpacerSize, Title, TitleLevels } from '@trilogy-ds/react/components'

export const OtpScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>OTP</Title>
      <Otp
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='Set your OTP'
        autoFocus
        length={12}
        value={'123456789012'}
      />
      <Spacer size={SpacerSize.SIX} />

      <Otp
        disabled
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='OTP Disabled'
      />
      <Spacer size={SpacerSize.SIX} />
      <Otp
        error
        help={'This is an error message'}
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='OTP Error'
      />
      <Spacer size={SpacerSize.SIX} />

      <Otp
        help={'This is a message'}
        length={4}
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='OTP code Size 4'
      />
    </Section>
  )
}
