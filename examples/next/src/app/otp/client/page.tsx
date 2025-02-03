'use client'
import { Otp } from '@trilogy-ds/react/lib/components/otp'

export default function OTPClient() {
  return (
    <div>
      <main>
        <Otp
          onChange={(code) => console.log('onChange', code)}
          onCompleted={(code) => console.log('onCompleted', code)}
          label='Set your OTP'
          autoFocus
          length={12}
          value={'123456789012'}
        />
      </main>
    </div>
  )
}
