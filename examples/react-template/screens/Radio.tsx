import {
  Alignable,
  Icon,
  Popover,
  RadioList,
  Section,
  Spacer,
  SpacerSize,
  TypographyBold,
  TypographyColor,
} from '@trilogy-ds/react'
import {
  Column,
  Columns,
  Container,
  IconName,
  Radio,
  RadioTile,
  RadioTiles,
  Text,
  Title,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const RadioScreen = (): JSX.Element => {
  const [radio, setRadio] = React.useState('one')
  const [radioTile, setRadioTile] = React.useState('one')
  const [radioTileHorizontal, setRadioTileHoriztonal] = React.useState('one')

  return (
    <Section>
      <Container>
        <Title level={4}>Accessibility example</Title>
        <Text id='xx'>How would you like to be contacted ? *</Text>
        <RadioList  accessibilityLabelledBy='xx'>
          <Radio name='Email' label='Email' value='Email' checked id='checkbox1' required />
          <Radio name='Phone' label='PhoneTéléphone' value='Phone' id='checkbox2' />
          <Radio name='letter' label='letter' value='letter' disabled id='checkbox3' />
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
                    <Text typo={TypographyBold.TEXT_WEIGHT_BOLD}>FREE</Text>
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
            <Title level={4}>Horizontal Tiles Radio's</Title>
            <Text id='ww'>Tiles Radio's</Text>
            <RadioTiles align={Alignable.ALIGNED_CENTER} accessibilityLabelledBy='ww'>
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
