import * as React from 'react'
import {
  Button,
  Columns,
  ColumnsItem,
  Icon,
  IconName,
  Popover,
  Section,
  Tag,
  TagVariant,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { Link, PopoverContent, Text } from '@trilogy-ds/react'

export const PopoverScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Popover</Title>
        <Columns>
          <ColumnsItem>
            <Popover>
              <PopoverContent>
                <Tag variant={TagVariant.ERROR}>Test</Tag>
                <Icon name={IconName.TIMES} />
              </PopoverContent>
              <Link>Simple</Link>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover>
              <Button variant={'PRIMARY'}>Without content</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover>
              <PopoverContent>
                <Tag variant={TagVariant.ERROR}>Test</Tag>
                <Icon name={IconName.TIMES} />
              </PopoverContent>
              <Button variant={'PRIMARY'}>Node content</Button>
            </Popover>
          </ColumnsItem>
          <ColumnsItem>
            <Popover active>
              <PopoverContent>
                <Text>Popover active</Text>
              </PopoverContent>
              <Button variant={'PRIMARY'}>Active</Button>
            </Popover>
          </ColumnsItem>
        </Columns>
      </Section>
    </>
  )
}
