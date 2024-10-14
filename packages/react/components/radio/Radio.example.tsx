import React from 'react'
import { Radio } from './index'
import { Columns, ColumnsItem } from '../columns'

const RadioExample: React.ReactNode =

<Columns multiline>
    <ColumnsItem size={6}>
        <Radio
            description='On peut me cocher et ajouter une icône grâce au controls ↓ '
            horizontalTile
            iconTile='tri-check-circle'
            label='Radio tile horizontal'
            name='checkbox-horizontal'
            tile
            value='default value 1'
        />
        <Radio
            checked
            description='Je suis la description de la checkbox'
            horizontalTile
            iconTile='tri-infos-circle'
            label='Radio tile avec Icône'
            name='checkbox-horizontal'
            tile
            value='default value 1'
        />
        <Radio
            description='Je suis la description de la checkbox'
            disabled
            horizontalTile
            iconTile='tri-alert'
            label='Radio tile horizontal disabled'
            name='checkbox-horizontal'
            tile
            value='default value 1'
        />
    </ColumnsItem>
    <ColumnsItem size={6}>
        <Radio
            description='On peut me cocher et ajouter une icône grâce au controls ↓ '
            label='Radio Tile'
            name='checkbox-tile'
            tile
            value='default value 1'
        />
        <Radio
            checked
            description='Je suis la description de la checkbox'
            iconTile='tri-infos-circle'
            label='Radio tile avec Icône'
            name='checkbox-tile'
            tile
            value='default value 1'
        />
        <Radio
            description='Je suis la description de la checkbox'
            disabled
            iconTile='tri-check'
            label='Radio tile disabled'
            name='checkbox-tile'
            tile
            value='default value 1'
        />
    </ColumnsItem>
    <ColumnsItem>
        <Radio
            label='On peut me cocher grâce au controls ↓ '
            name='checkbox-classic'
            value='default value 1'
        />
        <Radio
            checked
            label='Je suis cochée'
            name='checkbox-classic'
            value='default value 2'
        />
        <Radio
            disabled
            label='Je suis disabled'
            name='checkbox-classic'
            value='default value 3'
        />
    </ColumnsItem>
</Columns>

export default RadioExample
