import React from 'react'
import { Otp } from './index'
import { Columns, ColumnsItem } from '../columns'

const OtpExample: React.ReactNode =
  <div>
            <>
                <Columns>
                    <ColumnsItem size={4}>
                        <Otp
                            error
                            errorMessage="Ceci est un message  derreur"
                            label="Saisir votre otp"
                            onChange={function noRefCheck() { }}
                            onCompleted={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                        />
                        </ColumnsItem>
                        <ColumnsItem size={4}>
                        <Otp
                            label="Saisir votre otp"
                            onChange={function noRefCheck() { }}
                            onCompleted={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                        />
                        </ColumnsItem>
                    <ColumnsItem size={4}>
                        <Otp
                            disabled
                            label="Saisir votre otp"
                            onChange={function noRefCheck() { }}
                            onCompleted={function noRefCheck() { }}
                            onFocus={function noRefCheck() { }}
                        />
                    </ColumnsItem>
                </Columns>
            </>
  </div>

export default OtpExample
