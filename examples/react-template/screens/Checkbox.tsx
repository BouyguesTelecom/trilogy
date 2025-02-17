import {
  Checkbox,
  CheckboxTile,
  CheckboxTiles,
  Column,
  Columns,
  Container,
  IconName,
  Section,
  Text,
} from '@trilogy-ds/react/components'
import { Alignable, TypographyAlign } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const CheckboxScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Text>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Checkbox name='name-1' label='Label' value='value' checked id='checkbox1' />
            <Checkbox name='name-1' label='Label' value='value' id='checkbox2' />
            <Checkbox name='name-1' label='Label' value='value' disabled id='checkbox3' />
            <Checkbox name='name-1' label='Label' value='value' readonly id='checkbox4' />
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <CheckboxTiles align={Alignable.ALIGNED_CENTER} verticalAlign={Alignable.ALIGNED_CENTER}>
              <CheckboxTile
                id='tile-1'
                label='label'
                value='value'
                description='Je suis une description simple'
                className='is-fullheight'
              />
              <CheckboxTile
                id='tile-2'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
              <CheckboxTile
                id='tile-3'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
            </CheckboxTiles>
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <CheckboxTiles align={Alignable.ALIGNED_CENTER}>
              <CheckboxTile
                id='tile-horizontal-1'
                label='label'
                value='value'
                description='Je suis une description simple'
                horizontal
              />
              <CheckboxTile
                id='tile-horizontal-2'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
              />
              <CheckboxTile
                id='tile-horizontal-3'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
              />
            </CheckboxTiles>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
