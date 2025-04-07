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
        <Text id='xx'>How would you like to be contacted ? *</Text>
        <CheckboxList accessibilityLabelledBy='xx'>
          <Checkbox name='Email' label='Email' value='Email' checked id='checkbox1' required />
          <Checkbox name='Phone' label='PhoneTéléphone' value='Phone' id='checkbox2' />
          <Checkbox name='letter' label='letter' value='letter' disabled id='checkbox3' />
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
                id='tile-2'
                label='label2'
                value='value2'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
              <CheckboxTile
                id='tile-3'
                label='label3'
                value='value3'
                description='Je suis une description simple'
                icon={IconName.ALERT}
              />
            </CheckboxTiles>
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
                id='tile-horizontal-2'
                label='label-t-2'
                value='value-t-2'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                horizontal
              />
              <CheckboxTile
                id='tile-horizontal-3'
                label='label-t-3'
                value='value-t-3'
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
