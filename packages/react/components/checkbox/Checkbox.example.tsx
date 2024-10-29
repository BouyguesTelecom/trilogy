import React from 'react'
import Checkbox from '@/components/checkbox/Checkbox'
import { Columns, ColumnsItem } from '../columns'

const CheckboxExample: React.ReactNode =

<Columns multiline>
    <ColumnsItem size={6}>
        <Checkbox
            description='On peut me cocher et ajouter une icône grâce au controls ↓ '
            horizontalTile
            iconTile='tri-check-circle'
            label='Radio tile horizontal'
            name='checkbox-horizontal'
            tile
            value='default value 1'
        />
        <Checkbox
            checked
            description='Je suis la description de la checkbox'
            horizontalTile
            iconTile='tri-infos-circle'
            label='Radio tile avec Icône'
            name='checkbox-horizontal'
            tile
            value='default value 1'
        />
        <Checkbox
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
        <Checkbox
            description='On peut me cocher et ajouter une icône grâce au controls ↓ '
            label='Radio Tile'
            name='checkbox-tile'
            tile
            value='default value 1'
        />
        <Checkbox
            checked
            description='Je suis la description de la checkbox'
            iconTile='tri-infos-circle'
            label='Radio tile avec Icône'
            name='checkbox-tile'
            tile
            value='default value 1'
        />
        <Checkbox
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
        <Checkbox
            label='On peut me cocher grâce au controls ↓ '
            name='checkbox-classic'
            value='default value 1'
        />
        <Checkbox
            checked
            label='Je suis cochée'
            name='checkbox-classic'
            value='default value 2'
        />
        <Checkbox
            disabled
            label='Je suis disabled'
            name='checkbox-classic'
            value='default value 3'
        />
    </ColumnsItem>
</Columns>

export default CheckboxExample
