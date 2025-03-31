import { SpacerSize } from '@trilogy-ds/react'
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
import * as React from 'react'

export const CheckboxScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Title level={4}>Accessibility example</Title>
        <Text id='xx'>Comment souhaitez-vous être contacté ? *</Text>
        <CheckboxList accessibilityLabelledBy='xx'>
          <Checkbox name='Email' label='Email' value='Email' checked id='checkbox1' required />
          <Checkbox name='Téléphone' label='Téléphone' value='Téléphone' id='checkbox2' />
          <Checkbox name='Courrier' label='Courrier' value='Courrier' disabled id='checkbox3' />
        </CheckboxList>
        <Spacer size={SpacerSize.FIVE} />

        <Title level={4}>Vertical checkbox with columns</Title>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Checkbox name='name-1' label='Label' value='value' checked id='checkbox1' />
            <Checkbox name='name-1' label='Label' value='value' id='checkbox2' />
            <Checkbox name='name-1' label='Label' value='value' disabled id='checkbox3' />
            <Checkbox name='name-1' label='Label' value='value' readonly id='checkbox4' />
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Title level={4}>CheckboxTiles centered</Title>
            <Spacer size={SpacerSize.FIVE} />

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
            <Title level={4}>CheckboxTiles horizontal</Title>
            <Spacer size={SpacerSize.FIVE} />
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
