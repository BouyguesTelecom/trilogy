import {
  Button,
  ButtonVariant,
  Column,
  Columns,
  Icon,
  IconName,
  Link,
  Popover,
  PopoverDirection,
  Section,
  Tag,
  TagVariant,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'

export const PopoverScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Popover</Title>
        <Columns>
          <Column>
            <Popover trigger={<Link>Simple</Link>}>
              <Tag variant={TagVariant.ERROR} label='Test' />
              <Icon name={IconName.TIMES} />
            </Popover>
          </Column>
          <Column>
            <Popover trigger={<Link>Simple</Link>} direction={PopoverDirection.RIGHT}>
              <Tag variant={TagVariant.ERROR} label='Test' />
              <Icon name={IconName.TIMES} />
            </Popover>
          </Column>
          <Column>
            <Popover active trigger={<Button variant={ButtonVariant.PRIMARY}>Active</Button>}>
              <Text>Popover active</Text>
            </Popover>
          </Column>
        </Columns>
      </Section>
    </>
  )
}
