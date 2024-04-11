import React from 'react'
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
  TitleLevels
} from '@trilogy-ds/react/components'
import {RadioList} from '@trilogy-ds/react/components/radio/list'
import {Spacer, SpacerSize, TypographyAlign} from "@trilogy-ds/react";

export const RadioScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...</Text>
        <Columns>
          <ColumnsItem centered>
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
          <ColumnsItem>
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
        <Spacer size={SpacerSize.MEDIUM}/>
        <Columns>
          <ColumnsItem centered>
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
          <ColumnsItem>
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
        <Spacer size={20}/>
        <RadioList isMobile>
          <Radio checked iconTile={IconName.EYE} horizontalTile label='abc narrow' narrow marginless/>
          <Radio disabled horizontalTile label='abc narrow' narrow marginless/>
          <Radio description={'lorem kenenf ns k '} horizontalTile label='abc narrow' narrow marginless/>


          <Radio
            horizontalTile
            label='Radio tile'
            name='radio'
            value='default value 1'
            description='toto est content detre dans une tuile horizontal'
            // eslint-disable-next-line no-console
            onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            checked={false}
          >
            <Icon name={IconName.EYE} size={IconSize.LARGE}/>
            <Icon name={IconName.EYE_SLASH} size={IconSize.LARGE}/>
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.LARGE}/>
          </Radio>
        </RadioList>
        <Radio
          horizontalTile
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.radioValue, e.radioChecked)}
          checked={false}
        >
          <Icon name={IconName.EXCLAMATION_CIRCLE}/>
          <Rows>
            <RowItem>
              <Title level={TitleLevels.THREE} markup={'div'} className={'is-marginless'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Title>
            </RowItem>
            <RowItem>
              <Text level={TitleLevels.THREE} markup={'div'} className={'is-marginless'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium id sem quis auctor. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula semper leo, a scelerisque erat tristique
                id.
              </Text>
            </RowItem>
          </Rows>
        </Radio>
      </Container>
    </AutoLayout>
  )
}
