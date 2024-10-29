import React from 'react'
import { Sticker } from './index'
import { Columns, ColumnsItem } from '../columns'

const StickerExample: React.ReactNode =
<Columns multiline>
    <ColumnsItem size={12}>
        <Sticker variant='MAIN'>
            Code Promo
        </Sticker>
    </ColumnsItem>
    <ColumnsItem size={12}>
        <Sticker
            small
            variant='MAIN'
        >
            Code Promo
        </Sticker>
    </ColumnsItem>
</Columns>

export default StickerExample
