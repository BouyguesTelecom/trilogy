import React from 'react'
import { Countdown } from './index'
import { Columns, ColumnsItem } from '../columns'

const CountdownExample: React.ReactNode =
<Columns>
        <ColumnsItem>
            <Countdown
                deadline={new Date("2023-12-24T17:00:00.000Z")}
            />
        </ColumnsItem>

        <ColumnsItem>
            <Countdown
                deadline={new Date("2023-12-24T17:00:00.000Z")}
                small
            />
        </ColumnsItem>
    </Columns>
export default CountdownExample
