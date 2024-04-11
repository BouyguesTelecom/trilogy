import React from 'react'
import {
  AutoLayout,
  Checkbox,
  Columns,
  ColumnsItem,
  Container,
  Icon,
  IconName,
  IconSize,
  Spacer,
  SpacerSize,
  Text,
} from '@trilogy-ds/react/components'
import {TypographyAlign} from '@trilogy-ds/react/objects'

export const CheckboxScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...</Text>
        <Columns>
          <ColumnsItem centered>
            <Checkbox
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
              checked
            />
          </ColumnsItem>
          <ColumnsItem>
            <Checkbox
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={SpacerSize.MEDIUM}/>
        <Columns>
          <ColumnsItem centered>
            <Checkbox
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
          <ColumnsItem>
            <Checkbox
              disabled
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={20}/>
        <AutoLayout>
          <Checkbox checked iconTile={IconName.EYE} horizontalTile label='Checkbox checked'/>
          <Checkbox disabled horizontalTile label='Checkbox Disabled'/>
          <Checkbox description={'lorem kenenf ns k '} horizontalTile label='Checkbox simple'/>

          <Checkbox
            iconTile={IconName.CHECK_CIRCLE}
            horizontalTile
            label='Checkbox tile'
            name='radio'
            value='default value 1'
            description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            // eslint-disable-next-line no-console
            onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            checked={false}
          >
            <Icon name={IconName.EYE} size={IconSize.LARGE}/>
            <Icon name={IconName.EYE_SLASH} size={IconSize.LARGE}/>
            <Icon name={IconName.INFOS_CIRCLE} size={IconSize.LARGE}/>
          </Checkbox>
        </AutoLayout>
      </Container>
    </AutoLayout>
  )
}
