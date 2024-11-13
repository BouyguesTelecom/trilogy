import * as React from 'react'
import {
  Button,
  Columns,
  Column,
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
          <Column>
            <Popover>
              <PopoverContent>
                <Tag variant={TagVariant.ERROR} label="Test"/>
                <Icon name={IconName.TIMES} />
              </PopoverContent>
              <Link>Simple</Link>
            </Popover>
          </Column>
          <Column>
            <Popover>
              <Button variant={'PRIMARY'}>Without content</Button>
            </Popover>
          </Column>
          <Column>
            <Popover>
              <PopoverContent>
                <Tag variant={TagVariant.ERROR} label="Test"/>
                <Icon name={IconName.TIMES} />
              </PopoverContent>
              <Button variant={'PRIMARY'}>Node content</Button>
            </Popover>
          </Column>
          <Column>
            <Popover active>
              <PopoverContent>
                <Text>Popover active</Text>
              </PopoverContent>
              <Button variant={'PRIMARY'}>Active</Button>
            </Popover>
          </Column>
        </Columns>
      </Section>
    </>
  )
}
