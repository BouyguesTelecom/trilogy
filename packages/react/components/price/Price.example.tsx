import React from 'react'
import { Price } from './index'
import { Columns, ColumnsItem } from '../columns'

const PriceExample: React.ReactNode =

<Columns>
    <ColumnsItem>
        <Price
            align='ALIGNED_START'
            amount={24.99}
            period='mois'
            showCents
        />
    </ColumnsItem>
    <ColumnsItem>
        <Price
            amount={24.99}
            mention='(1)'
            period='mois'
            showCents
            strikedAmount={29.99}
        />
    </ColumnsItem>
    <ColumnsItem>
        <Price
            amount={24.99}
            mention='(1)'
            period='mois'
            showCents
        />
    </ColumnsItem>
</Columns>

export default PriceExample
