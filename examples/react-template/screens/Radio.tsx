import { Alignable, Popover, SpacerSize, TypographyBold, TypographyColor } from '@trilogy-ds/react'
import {
  Column,
  Columns,
  Container,
  Divider,
  Icon,
  IconName,
  Radio,
  RadioList,
  RadioTile,
  RadioTiles,
  Section,
  Spacer,
  Text,
  TextLevels,
  Title,
} from '@trilogy-ds/react/components'
import { isMobile } from '@trilogy-ds/react/helpers'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  const [radio, setRadio] = React.useState('one')
  const [radioTile, setRadioTile] = React.useState('one')
  const [radioTileHorizontal, setRadioTileHoriztonal] = React.useState('one')
  const [radioGrid, setRadioGrid] = React.useState('one')

  return (
    <Section>
      <Container>
        <Title level={4}>Accessibility example</Title>
        <Text id='xx'>How would you like to be contacted ? *</Text>
        <RadioList label='Contact Method' accessibilityLabelledBy='xx'>
          <Radio name='Email' label='Email' value='Email' checked id='checkbox1' required />
          <Radio name='Phone' label='PhoneTéléphone' value='Phone' id='checkbox2' />
          <Radio required name='letter' label='letter' value='letter' disabled id='checkbox3' />
        </RadioList>
        <Spacer size={SpacerSize.FIVE} />

        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>Simple Radio's</Title>
            <Text id='yy'>Simple Radio's</Text>
            <RadioList accessibilityLabelledBy='yy'>
              <Radio
                checked={radio === 'one'}
                required={true}
                name='name-1'
                label='Label 1'
                value='one'
                id='checkbox4'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'two'}
                name='name-2'
                label='Label 2'
                value='two'
                id='checkbox5'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'three'}
                name='name-3'
                label='Label 3'
                value='three'
                id='checkbox6'
                onChange={(e) => setRadio(e.radioValue)}
              />
              <Radio
                checked={radio === 'four'}
                name='name-4'
                label='Label 4'
                value='four'
                id='checkbox6'
                onChange={(e) => setRadio(e.radioValue)}
              />
            </RadioList>
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>Tiles Radio's</Title>
            <Text id='zz'>Tiles Radio's</Text>
            <RadioTiles accessibilityLabelledBy='zz'>
              <RadioTile
                disabled
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
                sticker='Avantages'
                description={
                  <>
                    <Text marginless typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                      Description
                    </Text>
                    <Text typo={TypographyBold.TEXT_WEIGHT_BOLD}>FREE</Text>
                    <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD, TypographyColor.TEXT_INFO]} level={4}>
                      Between the 20/02 and 23/02
                      {!isMobile && <Popover trigger={<Icon name='tri-infos-circle' size='smaller' />}></Popover>}
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
                sticker='Avantage'
                onChange={(e) => setRadioTile(e.radioValue)}
                checked={radioTile === 'four'}
                id='tile-4'
                label='Label 4'
                value='four'
                description='Je suis une description simple'
                name={'name-tile-1'}
              />
            </RadioTiles>
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>Horizontal Tiles Radio's</Title>
            <Text id='ww'>Tiles Radio's</Text>
            <RadioTiles align={Alignable.ALIGNED_CENTER} accessibilityLabelledBy='ww'>
              <RadioTile
                checked={radioTileHorizontal === 'one'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-1'
                label='Label 1'
                value='one'
                description={
                  <>
                    <Text level={TextLevels.THREE}>Téléphone échangeable dès 12 mois</Text>
                    <Text level={TextLevels.THREE}>Paiement en 36 mois sans frais</Text>
                    <Divider />
                    <Text level={2}>À payer aujourd'hui : 199,90 €</Text>
                  </>
                }
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-horizontal-1'}
              />
              <RadioTile
                disabled
                sticker='Avantages'
                checked={radioTileHorizontal === 'two'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-2'
                label='Label 2'
                value='two'
                description=' Lorem ipsum dolor sit amet'
                icon={IconName.ALERT}
                horizontal
                name={'name-tile-horizontal-1'}
              />
              <RadioTile
                sticker='Avantages'
                checked={radioTileHorizontal === 'three'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-3'
                label='Label 3'
                value='three'
                description=' Lorem ipsum dolor sit amet'
                horizontal
                name={'name-tile-horizontal-1'}
              />
            </RadioTiles>
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>Grid Tiles Radio's</Title>
            <Text id='zz'>Grid Radio's</Text>
            <RadioTiles accessibilityLabelledBy='zz' numberCols={{ desktop: 3, mobile: 2, tablet: 2 }}>
              <RadioTile
                icon={IconName.ALERT}
                onChange={(e) => setRadioGrid(e.radioValue)}
                checked={radioGrid === 'one'}
                id='grid-1'
                label={<Text>Label 1</Text>}
                value='one'
                description='Description'
                name={'grid-tile-1'}
              />
              <RadioTile
                disabled
                onChange={(e) => setRadioGrid(e.radioValue)}
                checked={radioGrid === 'two'}
                id='grid-2'
                label='Label 2'
                value='two'
                description='Description'
                icon={IconName.ALERT}
                name={'grid-tile-1'}
              />
              <RadioTile
                sticker='Avantages'
                description={
                  <>
                    <Text marginless typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                      Description
                    </Text>
                    <Text typo={TypographyBold.TEXT_WEIGHT_BOLD}>FREE</Text>
                    <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD, TypographyColor.TEXT_INFO]} level={4}>
                      Between the 20/02 and 23/02
                      {!isMobile && <Popover trigger={<Icon name='tri-infos-circle' size='smaller' />}></Popover>}
                    </Text>
                  </>
                }
                onChange={(e) => setRadioGrid(e.radioValue)}
                checked={radioGrid === 'three'}
                icon={IconName.ALERT}
                name='grid-tile-1'
                label={'Label 3'}
                value='three'
              />
              <RadioTile
                sticker='Avantage'
                onChange={(e) => setRadioGrid(e.radioValue)}
                checked={radioGrid === 'four'}
                id='grid-4'
                label='Label 4'
                value='four'
                description='Je suis une description simple'
                name={'grid-tile-1'}
              />
            </RadioTiles>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
