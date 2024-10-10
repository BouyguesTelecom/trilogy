import React from 'react'
import Checkbox from '@/components/checkbox/Checkbox'
import { Columns, ColumnsItem } from '../columns'

const CheckboxExample: React.ReactNode = <div>
            <>
                <Columns multiline>
                    <ColumnsItem size={4}>
                        <Checkbox
                            label="On peut me cocher grâce au controls ↓ "
                            name="checkbox1"
                            value="default value 1"
                        />
                    </ColumnsItem>

                    <ColumnsItem size={4}>
                        <Checkbox
                            checked
                            label="Je suis cochée"
                            name="checkbox2"
                            value="default value 2"
                        />
                    </ColumnsItem>

                    <ColumnsItem size={4}>
                        <Checkbox
                            disabled
                            label="Je suis disabled"
                            name="checkbox3"
                            value="default value 3"
                        />
                    </ColumnsItem>
                    <ColumnsItem size={4}>
                    <Checkbox
                        description="On peut me cocher et ajouter une icône grâce au controls ↓ "
                        horizontalTile
                        iconTile="tri-check-circle"
                        label="Checkbox tile horizontal"
                        name="checkbox"
                        tile
                        value="default value 1"
                    />
                    </ColumnsItem>
                    <ColumnsItem size={4}>
                    <Checkbox
                        checked
                        description="Je suis la description de la checkbox"
                        horizontalTile
                        iconTile="tri-infos-circle"
                        label="Checkbox tile avec Icône"
                        name="checkbox"
                        tile
                        value="default value 1"
                    />
                    </ColumnsItem>
                    <ColumnsItem size={4}>
                    <Checkbox
                        description="Je suis la description de la checkbox"
                        disabled
                        horizontalTile
                        iconTile="tri-alert"
                        label="Checkbox tile horizontal disabled"
                        name="checkbox"
                        tile
                        value="default value 1"
                    />
                    </ColumnsItem>
                </Columns>

            </>
</div>

export default CheckboxExample
