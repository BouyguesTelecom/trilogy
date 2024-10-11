import React from 'react'
import { Fab } from './index'
import { Columns, ColumnsItem } from '../columns';


const FabExample: React.ReactNode = 

<>
<Columns>
<ColumnsItem>
    <Fab
        iconName="tri-check"
        onClick={function noRefCheck() { }}
    >
        Ecrire
    </Fab>
    </ColumnsItem>
    <ColumnsItem>
    <Fab
        extended
        iconName="tri-bell"
        onClick={function noRefCheck() { }}
    >
        Extended fab
    </Fab>
    </ColumnsItem>
    </Columns>
</>

export default FabExample;
