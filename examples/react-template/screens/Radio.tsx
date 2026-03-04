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
                      {!isMobile && (
                        <Popover trigger={<Icon name='tri-infos-circle' size='smaller' />}>Popover active</Popover>
                      )}
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
            {/* <Text id='zz'>Tiles Radio's (OLD)</Text>
            <div role='radiogroup' aria-labelledby='zz' className='radio-tiles_410'>
              <div className='radio-tile_410'>
                <input type='radio' id='tile-1' name='name-tile-1' value='one' checked='' />
                <label htmlFor='tile-1' className='radio-label_410'>
                  <span className='radio-title_410'>Label 1</span>
                  <span className='radio-description_410'>Description</span>
                </label>
              </div>
              <div className='radio-tile_410'>
                <input type='radio' id='tile-2' name='name-tile-1' value='two' />
                <label htmlFor='tile-2' className='radio-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span className='radio-title_410'>Label 2</span>
                  <span className='radio-description_410'>Description</span>
                </label>
              </div>
              <div className='radio-tile_410'>
                <input type='radio' id=':r9:' name='name-tile-1' value='three' />
                <label htmlFor=':r9:' className='radio-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span className='radio-title_410'>Label 3</span>
                  <span className='radio-description_410'>
                    <p className='text_410 has-text-weight-bold_410 is-marginless_410'>Description</p>
                    <p className='text_410 has-text-weight-bold_410'>FREE</p>
                    <p className='text_410 is-level-4_410 has-text-weight-bold_410 has-text-info_410'>
                      Between the 20/02 and 23/02
                      <span className='popover'>
                        <span className='icon_410 is-smaller_410'>
                          <i className='tri-infos-circle_410' aria-hidden='true'></i>
                        </span>
                        <span className='popover-content'>Popover active</span>
                      </span>
                    </p>
                  </span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 radio-sticker_410 is-vcentered_410'>Avantages</p>
              </div>
              <div className='radio-tile_410'>
                <input type='radio' id='tile-4' name='name-tile-1' value='four' />
                <label htmlFor='tile-4' className='radio-label_410'>
                  <span className='radio-title_410'>Label 4</span>
                  <span className='radio-description_410'>Je suis une description simple</span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 radio-sticker_410 is-vcentered_410'>Avantage</p>
              </div>
            </div> */}
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
                sticker='Avantages'
                checked={radioTileHorizontal === 'two'}
                onChange={(e) => setRadioTileHoriztonal(e.radioValue)}
                id='tile-horizontal-2'
                label='Label 2'
                value='two'
                description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus est
                aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste nihil
                similique animi.s'
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
                description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus est
                aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste nihil
                similique animi.s'
                horizontal
                name={'name-tile-horizontal-1'}
              />
            </RadioTiles>
            {/* <Text id='ww'>Tiles Radio's (OLD)</Text>
            <div role='radiogroup' aria-labelledby='ww' className='radio-tiles_410 is-justified-center_410'>
              <div className='radio-tile_410 is-horizontal_410'>
                <input type='radio' id='tile-horizontal-1' name='name-tile-horizontal-1' value='one' />
                <label htmlFor='tile-horizontal-1' className='radio-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span>
                    <span className='radio-title_410'>Label 1</span>
                    <span className='radio-description_410'>
                      <p className='text_410 is-level-3_410'>Téléphone échangeable dès 12 mois</p>
                      <p className='text_410 is-level-3_410'>Paiement en 36 mois sans frais</p>
                      <div data-testid='separator' className='divider_410'>
                        <p className='divider-content_410'></p>
                      </div>
                      <p className='text_410 is-level-2_410'>À payer aujourd'hui : 199,90 €</p>
                    </span>
                  </span>
                </label>
              </div>
              <div className='radio-tile_410 is-horizontal_410'>
                <input type='radio' id='tile-horizontal-2' name='name-tile-horizontal-1' value='two' />
                <label htmlFor='tile-horizontal-2' className='radio-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span>
                    <span className='radio-title_410'>Label 2</span>
                    <span className='radio-description_410'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus
                      est aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste
                      nihil similique animi.s
                    </span>
                  </span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 radio-sticker_410 is-vcentered_410'>Avantages</p>
              </div>
              <div className='radio-tile_410 is-horizontal_410'>
                <input type='radio' id='tile-horizontal-3' name='name-tile-horizontal-1' value='three' checked='' />
                <label htmlFor='tile-horizontal-3' className='radio-label_410'>
                  <span>
                    <span className='radio-title_410'>Label 3</span>
                    <span className='radio-description_410'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus
                      est aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste
                      nihil similique animi.s
                    </span>
                  </span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 radio-sticker_410 is-vcentered_410'>Avantages</p>
              </div>
            </div> */}
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
                      {!isMobile && (
                        <Popover trigger={<Icon name='tri-infos-circle' size='smaller' />}>children</Popover>
                      )}
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
