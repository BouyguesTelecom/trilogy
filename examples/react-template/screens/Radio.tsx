import { Alignable, TypographyAlign } from '@trilogy-ds/react'
import {
  Columns,
  ColumnsItem,
  Container,
  IconName,
  Radio,
  RadioTile,
  RadioTiles,
  Section,
  Text,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Text>
        <Columns multiline>
          <ColumnsItem size={12} align={Alignable.ALIGNED_CENTER}>
            <Radio name='name-1' label='Label' value='value' checked id='checkbox1' />
            <Radio name='name-1' label='Label' value='value' id='checkbox2' />
            <Radio name='name-1' label='Label' value='value' disabled id='checkbox3' />
            <Radio name='name-1' label='Label' value='value' readonly id='checkbox4' />
          </ColumnsItem>
          <ColumnsItem size={12} align={Alignable.ALIGNED_CENTER}>
            <RadioTiles>
              <RadioTile
                id='tile-1'
                label='label'
                value='value'
                description='Je suis une description simple'
                className='is-fullheight'
                name={'name-tile-1'}
              />
              <RadioTile
                id='tile-2'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
              <RadioTile
                id='tile-3'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
            </RadioTiles>
          </ColumnsItem>
          <ColumnsItem size={12} align={Alignable.ALIGNED_CENTER}>
            <RadioTiles align={Alignable.ALIGNED_CENTER}>
              <RadioTile
                id='tile-horizontal-1'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
              <RadioTile
                id='tile-horizontal-2'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
              <RadioTile
                id='tile-horizontal-3'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
            </RadioTiles>
          </ColumnsItem>
        </Columns>
      </Container>
    </Section>
  )
}
