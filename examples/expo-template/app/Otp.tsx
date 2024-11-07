import { Otp, Section, Spacer, SpacerSize, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export default function OtpScreen(): JSX.Element {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>OTP</Title>
      <Otp
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='Set your OTP'
        autoFocus
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
        errorMessage={'This is an error message'}
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='OTP Error'
      />
      <Spacer size={SpacerSize.SIX} />

      <Otp
        errorMessage={'This is a message'}
        codeSize={4}
        onChange={(code) => console.log('onChange', code)}
        onCompleted={(code) => console.log('onCompleted', code)}
        label='OTP code Size 4'
      />
    </Section>
  )
}
