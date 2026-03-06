import { SpacerSize, TypographyAlign, TypographyBold } from '@trilogy-ds/react'
import {
  Checkbox,
  CheckboxList,
  CheckboxTile,
  CheckboxTiles,
  Column,
  Columns,
  Container,
  IconName,
  Section,
  Spacer,
  Text,
  Title,
} from '@trilogy-ds/react/components'
import { Alignable } from '@trilogy-ds/react/objects'

export const CheckboxScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Title level={4}>Accessibility example</Title>
        <Text id='xx'>How would you like to be contacted ? *</Text>
        <CheckboxList label='Contact Method' accessibilityLabelledBy='xx'>
          <Checkbox name='Email' label='Email' value='Email' checked id='checkbox1' required />
          <Checkbox name='Phone' label='PhoneTéléphone' value='Phone' id='checkbox2' />
          <Checkbox required name='letter' label='letter' value='letter' disabled id='checkbox3' />
        </CheckboxList>
        <Spacer size={SpacerSize.FIVE} />

        <Title level={4}>Vertical checkbox with columns</Title>
        <Text id='yy'>How would you like to be contacted ? *</Text>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <CheckboxList accessibilityLabelledBy='yy' verticalDesktop>
              <Checkbox name='name-1' label='Label1' value='value1' checked id='checkbox4' />
              <Checkbox name='name-2' label='Label2' value='value2' id='checkbox5' />
              <Checkbox name='name-3' label='Label3' value='value3' disabled id='checkbox6' />
              <Checkbox name='name-4' label='Label4' value='value4' readonly id='checkbox7' />
            </CheckboxList>
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>CheckboxTiles centered</Title>
            <Spacer size={SpacerSize.FIVE} />
            <Text id='zz'>CheckboxTiles centered</Text>
            <CheckboxTiles
              accessibilityLabelledBy='zz'
              align={Alignable.ALIGNED_CENTER}
              verticalAlign={Alignable.ALIGNED_CENTER}
            >
              <CheckboxTile
                id='tile-1'
                label='label1'
                value='value1'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
              <CheckboxTile
                sticker='Avantage'
                id='tile-2'
                label='label2'
                value='value2'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
              <CheckboxTile
                sticker='Avantage'
                id='tile-3'
                label='label3'
                value='value3'
                description='Je suis une description simple'
              />
            </CheckboxTiles>
            {/* 
            // OLD VERSION
            <Text id='zz'>CheckboxTiles centered (OLD)</Text>
            <div
              role='group'
              aria-labelledby='zz'
              className='checkbox-tiles_410 is-justified-center_410 is-aligned-center_410'
            >
              <div className='checkbox-tile_410'>
                <input type='checkbox' id='tile-1' value='value1' />
                <label htmlFor='tile-1' className='checkbox-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span className='checkbox-title_410'>label1</span>
                  <span className='checkbox-description_410'>Je suis une description simple</span>
                </label>
              </div>
              <div className='checkbox-tile_410'>
                <input type='checkbox' id='tile-2' value='value2' />
                <label htmlFor='tile-2' className='checkbox-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span className='checkbox-title_410'>label2</span>
                  <span className='checkbox-description_410'>Je suis une description simple</span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 checkbox-sticker_410 is-vcentered_410'>Avantage</p>
              </div>
              <div className='checkbox-tile_410'>
                <input type='checkbox' id='tile-3' value='value3' />
                <label htmlFor='tile-3' className='checkbox-label_410'>
                  <span className='checkbox-title_410'>label3</span>
                  <span className='checkbox-description_410'>Je suis une description simple</span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 checkbox-sticker_410 is-vcentered_410'>Avantage</p>
              </div>
            </div> */}
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>CheckboxTiles horizontal</Title>
            <Text id='ww'>CheckboxTiles horizontal</Text>
            <Spacer size={SpacerSize.FIVE} />
            <CheckboxTiles accessibilityLabelledBy='ww' align={Alignable.ALIGNED_CENTER}>
              <CheckboxTile
                id='tile-horizontal-1'
                label='label-t-1'
                value='value-t-1'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
              />
              <CheckboxTile
                sticker='Avantages'
                id='tile-horizontal-2'
                label='label-t-2'
                value='value-t-2'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus est
                aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste nihil
                similique animi.'
                icon={IconName.ALERT}
                horizontal
              />

              <CheckboxTile
                sticker='Avantages'
                id='tile-horizontal-3'
                label='label-t-3'
                value='value-t-3'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus est
                aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste nihil
                similique animi.s'
                horizontal
              />
            </CheckboxTiles>
            {/* <Text id='ww'>CheckboxTiles horizontal (OLD)</Text>

            <div role='group' aria-labelledby='ww' className='checkbox-tiles_410 is-justified-center_410'>
              <div className='checkbox-tile_410 is-horizontal_410'>
                <input type='checkbox' id='tile-horizontal-1' value='value-t-1' />
                <label htmlFor='tile-horizontal-1' className='checkbox-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span>
                    <span className='checkbox-title_410'>label-t-1</span>
                    <span className='checkbox-description_410'>Je suis une description simple</span>
                  </span>
                </label>
              </div>
              <div className='checkbox-tile_410 is-horizontal_410'>
                <input type='checkbox' id='tile-horizontal-2' value='value-t-2' />
                <label htmlFor='tile-horizontal-2' className='checkbox-label_410'>
                  <span className='icon_410 is-medium_410'>
                    <i className='tri-alert_410' aria-hidden='true'></i>
                  </span>
                  <span>
                    <span className='checkbox-title_410'>label-t-2</span>
                    <span className='checkbox-description_410'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus
                      est aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste
                      nihil similique animi.
                    </span>
                  </span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 checkbox-sticker_410 is-vcentered_410'>
                  Avantages
                </p>
              </div>
              <div className='checkbox-tile_410 is-horizontal_410'>
                <input type='checkbox' id='tile-horizontal-3' value='value-t-3' />
                <label htmlFor='tile-horizontal-3' className='checkbox-label_410'>
                  <span>
                    <span className='checkbox-title_410'>label-t-3</span>
                    <span className='checkbox-description_410'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum molestiae itaque commodi minus
                      est aliquam maxime illum laudantium, hic fugiat cupiditate sapiente velit quidem. Voluptates iste
                      nihil similique animi.s
                    </span>
                  </span>
                </label>
                <p className='sticker_410 is-accent_410 is-small_410 checkbox-sticker_410 is-vcentered_410'>
                  Avantages
                </p>
              </div>
            </div> */}
          </Column>

          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>CheckboxTiles Grid</Title>
            <Text id='ww'>CheckboxTiles Grid</Text>
            <Spacer size={SpacerSize.FIVE} />
            <CheckboxTiles
              accessibilityLabelledBy='ww'
              align={Alignable.ALIGNED_CENTER}
              numberCols={{ desktop: 3, mobile: 2, tablet: 2 }}
            >
              <CheckboxTile
                id='tile-horizontal-1'
                label={<Text typo={[TypographyBold.TEXT_WEIGHT_BOLD, TypographyAlign.TEXT_CENTERED]}>label-t-1</Text>}
                value='value-t-1'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
              <CheckboxTile
                sticker='Avantages'
                id='tile-horizontal-2'
                label='label-t-2'
                value='value-t-2'
                description='Lorem ipsum dolor sit amet'
                icon={IconName.ALERT}
              />

              <CheckboxTile
                sticker='Avantages'
                id='tile-horizontal-3'
                label='label-t-3'
                value='value-t-3'
                description='Lorem ipsum dolor sit amet'
              />
            </CheckboxTiles>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
