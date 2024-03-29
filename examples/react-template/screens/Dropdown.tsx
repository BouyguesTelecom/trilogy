import React from 'react'
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownTrigger, Section } from '@trilogy-ds/react/components'

export const DropdownScreen = (): JSX.Element => {
  const [itemDropdown, setItemDropdown] = React.useState<Array<string | undefined>>([])

  return (
    <Section>
      {/* N EXISTE PAS EN MOBILE */}
      <Dropdown>
        <DropdownTrigger value={itemDropdown} label='Dropdown label' placeholder='Dropdown placeholder' />
        <DropdownMenu>
          <DropdownItem
            label='Item label 1Item'
            name='item1'
            value='Value 1'
            // eslint-disable-next-line no-console
            onChange={(e) => {
              setItemDropdown((curr) => {
                if (curr.includes(e.itemLabel)) return curr.filter((item) => item !== e.itemLabel)
                return [...curr, e.itemLabel]
              })
            }}
          />
          <DropdownItem
            label='Item label 2Item'
            name='item2'
            value='Value 2'
            // eslint-disable-next-line no-console
            onChange={(e) => {
              setItemDropdown((curr) => {
                if (curr.includes(e.itemLabel)) return curr.filter((item) => item !== e.itemLabel)
                return [...curr, e.itemLabel]
              })
            }}
          />
          <DropdownItem
            label='Item label 3Item'
            name='item3'
            value='Value 3'
            onChange={(e) => {
              setItemDropdown((curr) => {
                if (curr.includes(e.itemLabel)) return curr.filter((item) => item !== e.itemLabel)
                return [...curr, e.itemLabel]
              })
            }}
          />
          <DropdownDivider />
        </DropdownMenu>
      </Dropdown>
    </Section>
  )
}
