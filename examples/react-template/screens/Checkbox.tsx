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
  const [checked, setChecked] = React.useState<string>()
  const [checkedTile, setCheckedTile] = React.useState<string>()

  const setId = (e: { checkboxValue: string; checkboxName: string; checkboxChecked: boolean; checkboxId: string }) => {
    setChecked(e.checkboxId)
  }

  const setIdTile = (e: {
    checkboxValue: string
    checkboxName: string
    checkboxChecked: boolean
    checkboxId: string
  }) => {
    setCheckedTile(e.checkboxId)
  }

  return (
    <Section>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </Text>
        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Checkbox
              name='name-1'
              label='Label 1'
              value='value'
              checked={checked === 'checkbox1'}
              id='checkbox1'
              onChange={setId}
            />
            <Checkbox
              name='name-1'
              label='Label 2'
              value='value'
              id='checkbox2'
              onChange={setId}
              checked={checked === 'checkbox2'}
            />
            <Checkbox
              name='name-1'
              label='Disable'
              value='value'
              disabled
              id='checkbox3'
              onChange={setId}
              checked={checked === 'checkbox3'}
            />
            <Checkbox
              name='name-1'
              label='Read only'
              value='value'
              readonly
              id='checkbox4'
              onChange={setId}
              checked={checked === 'checkbox4'}
            />
            <Checkbox
              label='Label 5'
              name='name-1'
              value='value'
              id='checkbox5'
              onChange={setId}
              checked={checked === 'checkbox5'}
            >
              Multi line <br /> label with <strong>HTML</strong>.
            </Checkbox>
          </Column>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <CheckboxTiles align={Alignable.ALIGNED_CENTER} verticalAlign={Alignable.ALIGNED_CENTER}>
              <CheckboxTile
                id='tile-1'
                label='label'
                value='value'
                description='Je suis une description simple'
                className='is-fullheight'
                onChange={setIdTile}
                checked={checkedTile === 'tile-1'}
              />
              <CheckboxTile
                id='tile-2'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                onChange={setIdTile}
                checked={checkedTile === 'tile-2'}
              />
              <CheckboxTile
                id='tile-3'
                label='label'
                value='value'
                description='Je suis une description simple'
                icon={IconName.ALERT}
                onChange={setIdTile}
                checked={checkedTile === 'tile-3'}
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
