import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownGroup } from '@trilogy-ds/react/components/dropdown'
import { Section } from '@trilogy-ds/react/components/section'
import { Title } from '@trilogy-ds/react/components/title'
import { Text } from '@trilogy-ds/react/components/text'
import { Button } from '@trilogy-ds/react/components/button'
import { IconName } from '@trilogy-ds/react/components/icon'

export const DropdownScreen = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <Section>
      <Title level={1}>Dropdown Component</Title>
      <Text>Examples of using the Dropdown component as a simple wrapper.</Text>

      {/* Simple dropdown */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Simple Dropdown</Title>
        <Text>Basic dropdown with simple items and external trigger.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <Button
            onClick={() => setIsOpen1(!isOpen1)}
            variant="SECONDARY"
            fullwidth
          >
            {selectedValue || 'Choose an option'} {isOpen1 ? '▲' : '▼'}
          </Button>

          {isOpen1 && (
            <Dropdown isActive={isOpen1}>
              <DropdownItem
                iconName={IconName.CHECK}
                onSelect={() => {
                  setSelectedValue('Option 1')
                  setIsOpen1(false)
                }}
              >
                Option 1
              </DropdownItem>
              <DropdownItem
                iconName={IconName.CALENDAR}
                onSelect={() => {
                  setSelectedValue('Option 2')
                  setIsOpen1(false)
                }}
              >
                Option 2
              </DropdownItem>
              <DropdownItem
                iconName={IconName.SEARCH}
                onSelect={() => {
                  setSelectedValue('Option 3')
                  setIsOpen1(false)
                }}
              >
                Option 3
              </DropdownItem>
              <DropdownItem iconName={IconName.TIMES} disabled>
                Disabled option
              </DropdownItem>
            </Dropdown>
          )}
        </div>
        {selectedValue && (
          <Text style={{ marginTop: '0.5rem' }}>
            Selected value: <strong>{selectedValue}</strong>
          </Text>
        )}
      </div>

      {/* Dropdown with groups */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Dropdown with Groups</Title>
        <Text>Dropdown with item groups organized by category.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <Button
            onClick={() => setIsOpen2(!isOpen2)}
            variant="SECONDARY"
            fullwidth
          >
            Select an action {isOpen2 ? '▲' : '▼'}
          </Button>

          {isOpen2 && (
            <Dropdown isActive={isOpen2}>
              <DropdownGroup title="Actions">
                <DropdownItem
                  iconName={IconName.CHECK}
                  onSelect={() => setIsOpen2(false)}
                >
                  Create
                </DropdownItem>
                <DropdownItem
                  iconName={IconName.CALENDAR}
                  onSelect={() => setIsOpen2(false)}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  iconName={IconName.TRASH}
                  onSelect={() => setIsOpen2(false)}
                >
                  Delete
                </DropdownItem>
              </DropdownGroup>

              <DropdownGroup title="Navigation">
                <DropdownItem
                  iconName={IconName.ARROW_LEFT}
                  onSelect={() => setIsOpen2(false)}
                >
                  Home
                </DropdownItem>
                <DropdownItem
                  iconName={IconName.EYE}
                  onSelect={() => setIsOpen2(false)}
                >
                  Profile
                </DropdownItem>
                <DropdownItem
                  iconName={IconName.SEARCH}
                  onSelect={() => setIsOpen2(false)}
                >
                  Settings
                </DropdownItem>
              </DropdownGroup>

              <DropdownGroup title="Help">
                <DropdownItem
                  iconName={IconName.INFOS_CIRCLE}
                  onSelect={() => setIsOpen2(false)}
                >
                  Documentation
                </DropdownItem>
                <DropdownItem
                  iconName={IconName.EXCLAMATION_CIRCLE}
                  onSelect={() => setIsOpen2(false)}
                >
                  Support
                </DropdownItem>
              </DropdownGroup>
            </Dropdown>
          )}
        </div>
      </div>

      {/* Item states */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Item States</Title>
        <Text>Items with different states (normal, active, disabled).</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <Button
            onClick={() => setIsOpen3(!isOpen3)}
            variant="SECONDARY"
            fullwidth
          >
            Item states {isOpen3 ? '▲' : '▼'}
          </Button>

          {isOpen3 && (
            <Dropdown isActive={isOpen3}>
              <DropdownItem
                iconName={IconName.CHECK}
                onSelect={() => setIsOpen3(false)}
              >
                Normal item
              </DropdownItem>
              <DropdownItem
                iconName={IconName.CALENDAR}
                active
                onSelect={() => setIsOpen3(false)}
              >
                Active item
              </DropdownItem>
              <DropdownItem
                iconName={IconName.SEARCH}
                onSelect={() => setIsOpen3(false)}
              >
                Another normal item
              </DropdownItem>
              <DropdownItem iconName={IconName.TIMES} disabled>
                Disabled item
              </DropdownItem>
            </Dropdown>
          )}
        </div>
      </div>

      {/* Always open dropdown for demonstration */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Always Open Dropdown</Title>
        <Text>Example of always visible dropdown to see the styles.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <Dropdown isActive={true}>
            <DropdownItem iconName={IconName.CHECK}>Item with icon</DropdownItem>
            <DropdownItem>Item without icon</DropdownItem>
            <DropdownItem iconName={IconName.CALENDAR} active>Active item</DropdownItem>
            <DropdownItem iconName={IconName.TIMES} disabled>Disabled item</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Section>
  )
}
