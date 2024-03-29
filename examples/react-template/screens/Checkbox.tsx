import React from 'react'
import {
  AutoLayout,
  Button,
  ButtonList,
  Checkbox,
  Columns,
  ColumnsItem,
  Container,
  Divider,
  Icon,
  IconName,
  Section,
  Spacer,
  SpacerSize,
  Title,
  TitleLevels,
  Text, IconSize, Rows, RowItem,
} from '@trilogy-ds/react/components'
import { TypographyAlign } from '@trilogy-ds/react/objects'

export const CheckboxScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
      <Container>
        <Checkbox horizontalTile tile label="Checkbox horizontal tile label" />

        <Checkbox
          label="Checkbox 1"
          name="checkbox1"
          value="default value 1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked
        />

        <Checkbox
          label="Checkbox 2"
          name="checkbox1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          value="default value 2"
        />
        <Checkbox
          disabled
          label="Checkbox 2"
          name="checkbox1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          value="default value 2"
        />
        <Checkbox
          iconTile={IconName.PICTO_PAYMENT_PAYPAL}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          description="toto est trés content de faire parti dune tuile"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          iconTile={IconName.EYE_SLASH}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          description="toto est trés content de faire parti dune tuile"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          iconTile={IconName.INFOS_CIRCLE}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          description="toto est trés content de faire parti dune tuile"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          disabled
          iconTile={IconName.INFOS_CIRCLE}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          description="toto est trés content de faire parti dune tuile"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          disabled
          iconTile={IconName.BELL}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          horizontalTile
          disabled
          iconTile={IconName.INFOS_CIRCLE}
          tile
          label="Checkbox tile"
          name="checkbox"
          value="default value 1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          iconTile={IconName.ARROW_RIGHT}
          horizontalTile
          tile
          label="checkbox tile"
          name="checkbox"
          value="default value 1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox
          horizontalTile
          tile
          label="checkbox tile"
          name="checkbox"
          value="default value 1"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
          checked={false}
        />
        <Checkbox horizontalTile tile label="label" />
        <Checkbox tile label="label small" />

      </Container>

        <Columns>
          <ColumnsItem>
            <Container fluid>
              <Spacer size={SpacerSize.HUGE} />
              <Icon size="large" name={IconName.CHECK_CIRCLE} align="ALIGNED_CENTER" />
              <Spacer size={SpacerSize.HUGE} />

              <Title level={TitleLevels.THREE} typo={TypographyAlign.TEXT_CENTERED}>
                Sucess
              </Title>
              <Spacer size={SpacerSize.HUGE} />
              <Columns>
                <ColumnsItem size={1}>
                  <Checkbox id="checkBox" data-testid="checkBox"></Checkbox>
                </ColumnsItem>
                <ColumnsItem>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi aperiam dignissimos dolore
                    doloribus, eaque eos hic id in ipsam ipsum pariatur possimus praesentium quibusdam quidem ratione
                    sint
                    veritatis, voluptatem?
                  </Text>
                </ColumnsItem>
              </Columns>
              <Spacer size={SpacerSize.HUGE} />
              <ButtonList centered>
                <Button variant="PRIMARY">Validate</Button>
                <Button variant="SECONDARY">Cancel</Button>
              </ButtonList>
            </Container>
          </ColumnsItem>
        </Columns>
      </AutoLayout>
    </Section>
  )
}
