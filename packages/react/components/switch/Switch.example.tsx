import React from 'react'
import { Switch } from './index'
import { RowItem, Rows } from '../rows'

const SwitchExample: React.ReactNode =

<Rows>
    <RowItem>
        <Switch
            label='Switch one'
            name='switch one'
        />
    </RowItem>
    <RowItem>
        <Switch
            checked
            label='Switch checked'
            name='switch checked'
        />
    </RowItem>
    <RowItem>
        <Switch
            disabled
            label='Switch disabled'
            name='switch disabled'
        />
    </RowItem>
</Rows>

export default SwitchExample
