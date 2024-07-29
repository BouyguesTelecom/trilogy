import React from 'react'
import { List, ListItem } from './index'

const ListExample: React.ReactNode =
  <List hasIcon>
    <ListItem
      customIcon="tri-check"
      status="SUCCESS"
    >
      Bonjour
    </ListItem>
    <ListItem
      customIcon="tri-times"
      status="ERROR"
    >
      Bonjour
    </ListItem>
    <ListItem
      customIcon="tri-times"
      status="ERROR"
    >
      Bonjour
    </ListItem>
  </List>

export default ListExample;
