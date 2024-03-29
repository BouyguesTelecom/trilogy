import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  Columns,
  ColumnsItem,
  Popover,
  Tag,
  TagVariant,
  PopoverDirection,
  Button,
  Icon,
  IconName,
} from '@trilogy-ds/react/components'

export const PopoverScreen = (): JSX.Element => {
  return (
    <Section>
      <Section>
        <Title level={TitleLevels.THREE}>Popover</Title>
        <Columns>
          <ColumnsItem>
            <Popover content='Voici une simple popover'>
              <Button variant={'PRIMARY'}>Simple</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover>
              <Button variant={'PRIMARY'}>Without content</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover
              content={
                <>
                  <Tag variant={TagVariant.ERROR}>Test</Tag>
                  <Icon name={IconName.TIMES} />
                </>
              }
            >
              <Button variant={'PRIMARY'}>Node content</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover active content='Popover active'>
              <Button variant={'PRIMARY'}>Active</Button>
            </Popover>
          </ColumnsItem>
        </Columns>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Popover direction</Title>
        <Columns>
          <ColumnsItem>
            <Popover content='En haut'>
              <Button variant={'PRIMARY'}>Top</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover direction={PopoverDirection.BOTTOM} content='En bas'>
              <Button variant={'PRIMARY'}>Bottom</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover direction={PopoverDirection.RIGHT} content='A droite'>
              <Button variant={'PRIMARY'}>Right</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover direction={PopoverDirection.LEFT} content='A gauche'>
              <Button variant={'PRIMARY'}>Left</Button>
            </Popover>
          </ColumnsItem>
        </Columns>
      </Section>
    </Section>
  )
}
