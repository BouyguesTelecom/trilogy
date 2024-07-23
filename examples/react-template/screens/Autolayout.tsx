import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  AlertState,
  AutoLayout,
  TrilogyColor,
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
} from '@trilogy-ds/react'
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

      <Box background={TrilogyColor.MAIN} inverted>
        <BoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta. Etiam
            non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor vulputate
            justo, ut luctus justo eros sed erat. Fusce finibus dolor ex.
          </Text>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.TWO}>Title followed by Card</Title>

      <Card>
        <CardContent>
          <Text>Card content</Text>
        </CardContent>
      </Card>

      <Title level={TitleLevels.ONE}>Im a Title</Title>

      <Text level={TextLevels.ONE}>Lorem ipsum dolor sit amet</Text>

      <Button variant={'PRIMARY'}>Click</Button>

      <Accordion>
        <AccordionItem id='UN' active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id='DEUX'>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem id='UN' active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id='DEUX'>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <Alert
        display
        alert={AlertState.SUCCESS}
        title={'Test alert'}
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />

      <Input.AutoComplete customIcon={IconName.ALERT} displayMenu={true} data={['1', '2']} />
    </AutoLayout>
  )
}
