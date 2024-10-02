import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  AutoLayout,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  IconName,
  Input,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  Icon,
  IconSize,
  Card,
  CardContent,
  Divider,
} from '@trilogy-ds/react/components'
import { StatusState, TrilogyColor } from '@trilogy-ds/react'
import * as React from 'react'

export const AutolayoutScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Title level={TitleLevels.TWO}>Title followed by Icon</Title>
      <Icon size={IconSize.LARGE} name={IconName.ALERT} />
      <Title level={TitleLevels.TWO}>Title followed by Box</Title>
      <Box>
        <BoxHeader>Simple</BoxHeader>
        <BoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta. Etiam
            non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor vulputate
            justo, ut luctus justo eros sed erat. Fusce finibus dolor ex.
          </Text>
        </BoxContent>
      </Box>
      <Box backgroundColor={TrilogyColor.MAIN} inverted>
        <BoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta. Etiam
            non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor vulputate
            justo, ut luctus justo eros sed erat. Fusce finibus dolor ex.
          </Text>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.TWO}>Title followed by Card</Title>

      <Card active>
        <CardContent>
          <Text>Card content</Text>
        </CardContent>
      </Card>

      <Title level={TitleLevels.ONE}>Im a Title</Title>

      <Text level={TextLevels.ONE}>Lorem ipsum dolor sit amet</Text>

      <Button variant={'PRIMARY'}>Click</Button>

      <Accordion>
        <AccordionItem id="ONE" active={true}>
          <AccordionHeader>
            <Text >Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody dataId="totooooo-test-id" testId="totooooo">
            <Text>Lorem ipsum dolor sit amet lorem</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id="TWO">
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem id="THREE">
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Collpased by default</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem disabled id="FOUR">
          <AccordionHeader>
            <Text>Hello World 3</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Alert
        display
        status={StatusState.SUCCESS}
        title={'Test alert'}
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />

      <Input.AutoComplete customIcon={IconName.ALERT} displayMenu={true} data={['1', '2']} />
    </AutoLayout>
  )
}
