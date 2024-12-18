import {RadioList, StatusState, TrilogyColor} from '@trilogy-ds/react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  AutoComplete,
  AutoLayout,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  Card,
  CardContent, CheckboxTile, CheckboxTiles,
  Icon,
  IconName,
  IconSize, Radio, RadioTile, RadioTiles,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  View
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const AutolayoutScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Title level={TitleLevels.ONE}>Title followed by subtitle</Title>
      <Title subtitle>subtitle</Title>

      <Title level={TitleLevels.TWO}>Title followed by subtitle</Title>
      <Title subtitle>subtitle</Title>

      <Title level={TitleLevels.THREE}>Title followed by subtitle</Title>
      <Title subtitle>subtitle</Title>

      <Title level={TitleLevels.ONE}>Title followed by subtitle</Title>
      <Title subtitle>subtitle</Title>

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
        <AccordionItem id='ONE' active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody dataId='totooooo-test-id' testId='totooooo'>
            <Text>Lorem ipsum dolor sit amet lorem</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id='TWO'>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem id='THREE'>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Collpased by default</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem disabled id='FOUR'>
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

      <AutoComplete customIcon={IconName.ALERT} displayMenu={true} data={['1', '2']} />

      <CheckboxTiles>
        <CheckboxTile
          id='tile-1'
          label='label'
          value='value'
          description='Je suis une description simple'
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

      <RadioList>
        <Radio
          name='name-1'
          label='Label'
          value='one'
          id='checkbox1'
        />
        <Radio
          name='name-1'
          label='Label'
          value='two'
          id='checkbox2'
        />
        <Radio
          name='name-1'
          label='Label'
          value='three'
          disabled
          id='checkbox3'
        />
      </RadioList>

      <Alert
        display
        status={StatusState.SUCCESS}
        title={'Test alert'}
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
    </AutoLayout>
  )
}
