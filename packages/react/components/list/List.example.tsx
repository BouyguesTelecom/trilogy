import React from 'react'
import { List, ListItem, ListItemDescription } from './index'
import { Columns, ColumnsItem } from '../columns'

const ListExample: React.ReactNode =
<Columns>
    <List hasIcon>
        <ColumnsItem>

            <ListItem
                customIcon='tri-check'
                status='SUCCESS'
            >
                Bonjour
            </ListItem>
        </ColumnsItem>
        <ColumnsItem>

            <ListItem
                customIcon='tri-times'
                status='ERROR'
            >
                Bonjour
            </ListItem>
        </ColumnsItem>
        <ColumnsItem>

            <ListItem
                customIcon='tri-times'
                status='ERROR'
            >
                Bonjour
            </ListItem>
        </ColumnsItem>
        <Columns>

            <List>
                <ListItem title='Title'>
                    <ListItemDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </ListItemDescription>
                </ListItem>
            </List>
        </Columns>

    </List>
</Columns>

export default ListExample
