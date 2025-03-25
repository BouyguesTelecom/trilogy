import {
  Alignable,
  Icon,
  Popover,
  RadioList,
  Section,
  TypographyBold,
  TypographyColor,
} from '@trilogy-ds/react'
import { Column, Columns, Container, IconName, Radio, RadioTile, RadioTiles, Text } from '@trilogy-ds/react/components'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  const [radio, setRadio] = React.useState('one')
  const [radioTile, setRadioTile] = React.useState('one')
  const [radioTileHorizontal, setRadioTileHoriztonal] = React.useState('one')

  return (
    <Section>
      <Container>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Text>Simple Radio's :</Text>
            <RadioList>
              <Radio
                checked={radio === 'one'}
                required={true}
                name='name-1'
                label='Label 1'
                value='one'
                id='checkbox1'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'two'}
                name='name-1'
                label='Label 2'
                value='two'
                id='checkbox2'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'three'}
                name='name-1'
                label='Label 3'
                value='three'
                id='checkbox3'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'four'}
                name='name-1'
                label='Label 4'
                value='four'
                id='checkbox4'
                onChange={(e) => setRadio(e.radioValue)}
              />
            </RadioList>
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Text>Tiles Radio's :</Text>
            <RadioTiles>
              <RadioTile
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'one'}
                id='tile-1'
                label='Label 1'
                value='one'
                description='Description'
                name={'name-tile-1'}
              />
              <RadioTile
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'two'}
                id='tile-2'
                label='Label 2'
                value='two'
                description='Description'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
              <RadioTile
                description={
                  <>
                    <Text marginless typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                      Description
                    </Text>
                    <Text typo={TypographyBold.TEXT_WEIGHT_BOLD}>GRATUIT</Text>
                    <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD, TypographyColor.TEXT_INFO]} level={4}>
                      Between the 20/02 and 23/02
                      <Popover trigger={<Icon name='tri-infos-circle' size='smaller' />}>Popover active</Popover>
                    </Text>
                  </>
                }
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'three'}
                icon={IconName.ALERT}
                name='name-tile-1'
                label={'Label 3'}
                value='three'
              />
              <RadioTile
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'four'}
                id='tile-4'
                label='Label 4'
                value='four'
                description='Description'
                icon={IconName.ALERT}
                name={'name-tile-1'}
              />
            </RadioTiles>
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Text>Horizontal Tiles Radio's :</Text>
            <RadioTiles align={Alignable.ALIGNED_CENTER}>
              <RadioTile
                checked={radioTileHorizontal === 'one'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-1'
                label='Label 1'
                value='one'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-horizontal-1'}
              />
              <RadioTile
                checked={radioTileHorizontal === 'two'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-2'
                label='Label 2'
                value='two'
                description='A simple description'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-horizontal-1'}
              />
              <RadioTile
                checked={radioTileHorizontal === 'three'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-3'
                label='Label 3'
                value='three'
                description='A simple description'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-horizontal-1'}
              />
            </RadioTiles>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
