import { Alignable, RadioList, Section, TypographyAlign } from '@trilogy-ds/react'
import { Column, Columns, Container, IconName, Radio, RadioTile, RadioTiles, Text } from '@trilogy-ds/react/components'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  const [radio, setRadio] = React.useState('one')
  const [radioTile, setRadioTile] = React.useState('one')
  const [radioTileHorizontal, setRadioTileHoriztonal] = React.useState('one')

  return (
    <Section>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Text>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <RadioList>
              <Radio
                checked={radio === 'one'}
                name='name-1'
                label='Label'
                value='one'
                id='checkbox1'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'two'}
                name='name-1'
                label='Label'
                value='two'
                id='checkbox2'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'three'}
                name='name-1'
                label='Label'
                value='three'
                disabled
                id='checkbox3'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'four'}
                name='name-1'
                label='read only'
                value='four'
                readonly
                id='checkbox4'
                onChange={(e) => setRadio(e.radioValue)}
              />
            </RadioList>
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <RadioTiles>
              <RadioTile
                checked={radioTile === 'one'}
                disabled
                id='tile-1'
                label='label'
                value='one'
                description='Je suis'
                className='is-fullheight'
                name={'name-tile-1'}
              />
              <RadioTile
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'two'}
                id='tile-2'
                label='label'
                value='two'
                description='Je suis une'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
              <RadioTile
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'three'}
                id='tile-3'
                label='label'
                value='three'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
            </RadioTiles>
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <RadioTiles align={Alignable.ALIGNED_CENTER}>
              <RadioTile
                checked={radioTileHorizontal === 'one'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-1'
                label='label'
                value='one'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
              <RadioTile
                checked={radioTileHorizontal === 'two'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-2'
                label='label'
                value='two'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
              <RadioTile
                checked={radioTileHorizontal === 'three'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-3'
                label='label'
                value='three'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-2'}
              />
            </RadioTiles>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
