import { Spacer, SpacerSize, TextLevels, TypographyAlign } from '@trilogy-ds/react'
import {
  AutoLayout,
  Columns,
  ColumnsItem,
  Container,
  Icon,
  IconName,
  IconSize,
  Radio,
  RowItem,
  Rows,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { RadioList } from '@trilogy-ds/react/components/radio/list'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Container>
        <Rows>
          <RowItem>
            <Text typo={TypographyAlign.TEXT_CENTERED}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </Text>
          </RowItem>
          <RowItem>
            <Text typo={TypographyAlign.TEXT_CENTERED}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </Text>
          </RowItem>
        </Rows>

        <Columns>
          <ColumnsItem size={6} centered>
            <Radio
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.radioValue, e.radioChecked)}
              checked
            />
          </ColumnsItem>
          <ColumnsItem size={6}>
            <Radio
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={SpacerSize.FIVE} />
        <Columns>
          <ColumnsItem size={6} centered>
            <Radio
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            />
          </ColumnsItem>
          <ColumnsItem size={6}>
            <Radio
              disabled
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={8} />
        <RadioList isMobile>
          <Radio checked iconTile={IconName.EYE} tile horizontalTile label='abc narrow' narrow marginless />
          <Radio disabled horizontalTile label='abc narrow' tile narrow marginless />
          <Radio description={'lorem kenenf ns k '} tile horizontalTile label='abc narrow' narrow marginless />

          <Radio
            tile
            horizontalTile
            label='Radio tile'
            name='radio'
            value='default value 1'
            description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
            // eslint-disable-next-line no-console
            onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            checked={false}
          >
            <Icon name={IconName.EYE} size={IconSize.LARGE} />
            <Icon name={IconName.EYE_SLASH} size={IconSize.LARGE} />
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.LARGE} />
          </Radio>
        </RadioList>
        <Radio
          tile
          horizontalTile
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.radioValue, e.radioChecked)}
          checked={false}
        >
          <Icon name={IconName.EXCLAMATION_CIRCLE} />
          <Rows>
            <RowItem>
              <Title level={TitleLevels.THREE} markup={'div'} className={'is-marginless'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Title>
            </RowItem>
            <RowItem>
              <Text level={TextLevels.THREE} markup={'div'} className={'is-marginless'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium id sem quis auctor. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula semper leo, a scelerisque erat tristique
                id.
              </Text>
            </RowItem>
          </Rows>
        </Radio>
        <Spacer size={8} />
        <RadioList isMobile>
          <Radio checked label='abc narrow' narrow marginless />
          <Radio disabled label='abc narrow' narrow marginless />
          <Radio description={'lorem kenenf ns k '} label='abc narrow' narrow marginless />
        </RadioList>
      </Container>
    </AutoLayout>
  )
}
