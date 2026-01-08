import React, { useState } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownGroup,
  DropdownTrigger
} from '@trilogy-ds/react/components/dropdown'
import { Section } from '@trilogy-ds/react/components/section'
import { Title } from '@trilogy-ds/react/components/title'
import { Text } from '@trilogy-ds/react/components/text'
import { Button } from '@trilogy-ds/react/components/button'
import { IconName } from '@trilogy-ds/react/components/icon'

export const DropdownScreen = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <Section>
      <Title level={1}>Dropdown Component</Title>
      <Text>Examples of using the Dropdown component with automatic state management.</Text>

      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Automatic Dropdown</Title>
        <Text>Dropdown with automatic state management using Dropdown and DropdownTrigger.</Text>
        <div>
          <Dropdown onToggle={(isOpen: boolean) => console.log('Dropdown toggled:', isOpen)}>
            <DropdownTrigger>
              <Button variant='CONVERSION'>
                {selectedValue || 'Choose an option'} ▼
              </Button>
            </DropdownTrigger>
            <DropdownItem
              iconName={IconName.CHECK}
              onSelect={() => setSelectedValue('Option 1')}
            >
              Option 1
            </DropdownItem>
            <DropdownItem
              iconName={IconName.CALENDAR}
              onSelect={() => setSelectedValue('Option 2')}
            >
              Option 2
            </DropdownItem>
            <DropdownItem
              iconName={IconName.SEARCH}
              onSelect={() => setSelectedValue('Option 3')}
            >
              Option 3
            </DropdownItem>
            <DropdownItem iconName={IconName.TIMES} disabled>
              Disabled option
            </DropdownItem>
          </Dropdown>
        </div>
        {selectedValue && (
          <Text>
            Selected value: <strong>{selectedValue}</strong>
          </Text>
        )}
      </div>

      <div>
        <Title level={3}>Manual Dropdown</Title>
        <Text>Basic dropdown with manual state management and external trigger.</Text>
        <div>
          <Button
            onClick={() => setIsOpen1(!isOpen1)}
            variant="SECONDARY"
            fullwidth
          >
            Manual control {isOpen1 ? '▲' : '▼'}
          </Button>

          {isOpen1 && (
            <Dropdown isActive={isOpen1}>
              <DropdownItem
                iconName={IconName.CHECK}
                onSelect={() => {
                  console.log('Manual option selected')
                  setIsOpen1(false)
                }}
              >
                Manual Option 1
              </DropdownItem>
              <DropdownItem
                iconName={IconName.CALENDAR}
                onSelect={() => {
                  console.log('Manual option selected')
                  setIsOpen1(false)
                }}
              >
                Manual Option 2
              </DropdownItem>
            </Dropdown>
          )}
        </div>
      </div>

      <div>
        <Title level={3}>Automatic Dropdown with Item States</Title>
        <Text>Dropdown with automatic state management showing different item states.</Text>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button variant='CONVERSION'>
                Choose an option ▼
              </Button>
            </DropdownTrigger>
            <DropdownItem iconName={IconName.CHECK}>
              Normal item
            </DropdownItem>
            <DropdownItem iconName={IconName.CALENDAR} active>
              Active item
            </DropdownItem>
            <DropdownItem iconName={IconName.SEARCH}>
              Another normal item
            </DropdownItem>
            <DropdownItem iconName={IconName.TIMES} disabled>
              Disabled item
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* Always open dropdown for demonstration */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Always Open Dropdown</Title>
        <Text>Example of always visible dropdown to see the styles.</Text>
        <div>
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
