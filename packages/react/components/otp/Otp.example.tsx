import React from 'react'
import { Otp } from './index'
import { Columns, ColumnsItem } from '../columns'

const OtpExample: React.ReactNode = (
  <Columns>
    <ColumnsItem size={4}>
      <Otp error errorMessage='Ceci est un message  derreur' label='Saisir votre otp' />
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Otp label='Saisir votre otp' />
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Otp disabled label='Saisir votre otp' />
    </ColumnsItem>
  </Columns>
)

export default OtpExample
