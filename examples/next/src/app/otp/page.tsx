import { Otp } from '@trilogy-ds/react/lib/components/otp'

export default function OTPSSR() {
  return (
    <div>
      <main>
        <Otp label='Set your OTP' autoFocus length={12} />
      </main>
    </div>
  )
}
