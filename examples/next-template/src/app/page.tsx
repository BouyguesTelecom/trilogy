import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  Alignable,
  Box,
  BoxContent,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonMarkup,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Checkbox,
  CheckboxTile,
  CheckboxTiles,
  Chips,
  ChipsList,
  Column,
  Columns,
  Container,
  Countdown,
  Divider,
  Fab,
  Hero,
  Icon,
  IconName,
  Input,
  InputStatus,
  Link,
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  Otp,
  Pagination,
  Popover,
  Price,
  Progress,
  ProgressRadial,
  Radio,
  RadioList,
  Section,
  Select,
  SelectOption,
  Spacer,
  SpacerSize,
  StatusState,
  Step,
  Stepper,
  Sticker,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagList,
  TagVariant,
  Text,
  Textarea,
  TextLevels,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  Title,
  TitleLevels,
  TrilogyColor,
  TypographyAlign,
  View,
} from '@trilogy-ds/react'

export default function Home() {
  return (
    <main>
      <Section>
        <Title level={TitleLevels.TWO}>Base</Title>

        <Sticker iconName={IconName.EYE} label={'Sticker icon !'} variant={TagVariant.INFO} />

        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem to='#anchor'>Catalog</BreadcrumbItem>
          <BreadcrumbItem>Accessories</BreadcrumbItem>
          <BreadcrumbItem>Current page</BreadcrumbItem>
        </Breadcrumb>

        <Popover trigger={<Link>Popover</Link>}>
          <Tag variant={TagVariant.ERROR} label='Test' />
          <Icon name={IconName.TIMES} />
        </Popover>

        <Spacer size={SpacerSize.THREE} />
        <Accordion id='accordion-1'>
          <AccordionItem id='ONE' open>
            <AccordionHeader>
              <Title level={6}>Hello World 1</Title>
            </AccordionHeader>
            <AccordionBody data-id='totooooo-test-id'>
              <Text>Accordion Body 1</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='TWO'>
            <AccordionHeader>
              <Title level={6}>Hello World 2</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 2</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='THREE'>
            <AccordionHeader>
              <Title level={6}>Hello World 3</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 3</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem disabled id='FOUR'>
            <AccordionHeader>
              <Title level={6}>Hello World 4</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 4</Text>
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        <Input
          type='password'
          securityGauge
          placeholder='this is my placeholder'
          minLength={8}
          maxLength={15}
          validationRules={{
            lowercase: true,
            uppercase: true,
            number: true,
            specialChars: true,
            length: { max: 4, min: 2 },
          }}
        />

        <Textarea
          label='Textarea label not dynamic with sample'
          sample='Textarea sample'
          help='Search helper textarea'
          required
          rows={10}
          iconNameLeft={IconName.CHECK}
          iconNameRight='tri-exclamation-circle'
          dynamicPlaceholder={false}
          status={InputStatus.ERROR}
        />

        <Select name='option' label='label' id='id' iconName={IconName.ALERT}>
          <SelectOption id='id_four' value='disabled' label='disabled' disabled iconName='tri-bell' />
          <SelectOption id='id_one' value='opt_one' label='Virgile' iconName='tri-bell' />
          <SelectOption id='id_two' value='opt_two' label='Toto' iconName='tri-bell' />
          <SelectOption id='id_three' value='Venus' label='Venus' iconName='tri-bell' />
        </Select>

        <Countdown deadline={new Date('2023-12-24 18:00:00')} />

        <Otp label='Set your OTP' autoFocus length={12} />

        <Divider />

        <Columns multiline>
          <Column size={12} align={Alignable.ALIGNED_CENTER}>
            <Box>
              <BoxContent>
                <Checkbox name='name-1' label='Label 1' value='value' id='checkbox1' />
                <Checkbox name='name-1' label='Label 2' value='value' id='checkbox2' />
                <Checkbox name='name-1' label='Disable' value='value' disabled id='checkbox3' />
                <Checkbox name='name-1' label='Read only' value='value' readonly id='checkbox4' />
                <Checkbox label='Label 5' name='name-1' value='value' id='checkbox5'>
                  Multi line <br /> label with <strong>HTML</strong>.
                </Checkbox>
              </BoxContent>
              <Switch label='Switch one fullwidth' fullWidth name='switch one' />
            </Box>
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
      </Section>

      <Section backgroundColor={TrilogyColor.MAIN_FADE}>
        <Card active>
          <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
          <CardContent>
            <Title overline>Desktop Card Vertical Markup A</Title>
            <Title level={TitleLevels.ONE}>Card Title</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
              vera.
            </Text>
            <Button variant={ButtonVariant.PRIMARY}>Skeleton toogle click</Button>
          </CardContent>
        </Card>

        <Tabs>
          <TabList>
            <Tab label='Tab 1' iconName={IconName.ALERT} href='/hello' />
            <Tab label='Tab 2' iconName={IconName.ALERT} />
            <Tab label='Tab 3' iconName={IconName.ALERT} disabled />
          </TabList>
          <TabPanels>
            <TabPanel>
              <Title>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione impedit ipsam quidem autem ipsum
                tempora magnam dignissimos nulla consequuntur molestias architecto soluta at qui, delectus, repellat ea
                obcaecati numquam.
              </Title>
            </TabPanel>
            <TabPanel>
              <Title>Tab 2</Title>
            </TabPanel>
            <TabPanel>
              <Title>Tab 3</Title>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box>
          <BoxContent>
            <Stepper>
              <Step iconName={IconName.EYE} label='Recup' />
              <Step label='Compléments' />
              <Step error iconName={IconName.SEARCH} label='Coordonate' />
              <Step label='Livraison' />
              <Step iconName={IconName.EYE} label='Confirm' />
            </Stepper>
            <Progress value={30} status='INFO' />
            <ProgressRadial value={30} secondValue={30}>
              <View>
                <Title typo={TypographyAlign.TEXT_CENTERED} level={TitleLevels.THREE} marginless>
                  60
                </Title>
                <Text level={TextLevels.ONE} marginless typo={TypographyAlign.TEXT_CENTERED}>
                  / 100 Go
                </Text>
              </View>
            </ProgressRadial>
            <ChipsList scrollable multiple>
              <Chips id='1' active>
                Chips 1
              </Chips>
              <Chips>Chips 2</Chips>
              <Chips>Chips 3</Chips>
              <Chips disabled>Chips 4</Chips>
            </ChipsList>

            <Modal
              title='Hello'
              size={ModalSize.SMALL}
              trigger={<Button variant={ButtonVariant.CONVERSION}>Click to open modal CSR</Button>}
            >
              <ModalBody>
                <Text>Modal content</Text>
              </ModalBody>
              <ModalFooter>
                <Button variant={ButtonVariant.CONVERSION}>Close</Button>
              </ModalFooter>
            </Modal>

            <Alert
              banner
              status={StatusState.INFO}
              title='Banner Alert'
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
            />
          </BoxContent>
        </Box>

        <Hero backgroundColor={TrilogyColor.MAIN} inverted>
          <Container>
            <Text>Welcome Message</Text>
            <Title level={2}>Hero with Background Color</Title>
            {/* <button className='button'>Click me !</button> */}
            <Button
              markup={ButtonMarkup.BUTTON}
              variant={ButtonVariant.SECONDARY}
              onClick={() => alert('Click on hero btn')}
            >
              Click me !
            </Button>
          </Container>
        </Hero>

        <Price amount={10.99} level={1} align={Alignable.ALIGNED_CENTER} overline='À partir de' oldAmount={19.99} />
        <Timeline>
          <TimelineItem cancel>
            <TimelineMarker iconName={IconName.CHECK} />
            <TimelineContent
              heading='20 September'
              content='Modification de votre identifiant de connexion'
              linkTo='link'
              linkLabel='Check the email'
            />
          </TimelineItem>
          <TimelineItem done>
            <TimelineMarker iconName={IconName.CHECK} />
            <TimelineContent
              heading='20 September'
              content='Modification de votre identifiant de connexion'
              linkTo='link'
              linkLabel='Check the email'
            />
          </TimelineItem>
          <TimelineItem active>
            <TimelineMarker iconName={IconName.CHECK} />
            <TimelineContent
              heading='20 September'
              content='Modification de votre identifiant de connexion'
              linkTo='link'
              linkLabel='Check the email'
            />
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker iconName={IconName.CHECK} />
            <TimelineContent
              heading='20 September'
              content='Modification de votre identifiant de connexion'
              linkTo='link'
              linkLabel='Check the email'
            />
          </TimelineItem>
        </Timeline>

        <TagList>
          <Tag label='Tag secondaire' variant={TagVariant.INFO} />
          <Tag label='Tag secondaire' variant={TagVariant.WARNING} />
          <Tag label='Tag secondaire' variant={TagVariant.SUCCESS} />
          <Tag label='Tag secondaire' variant={TagVariant.ERROR} />
        </TagList>

        <RadioList>
          <Radio name='name-1' label='Label' value='one' id='r1' />
          <Radio name='name-1' label='Label' value='two' id='r2' />
          <Radio name='name-1' label='Label' value='three' disabled id='r3' />
          <Radio name='name-1' label='read only' value='four' readonly id='r4' />
        </RadioList>

        <Pagination length={70} />

        <Fab iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
          New Conversation
        </Fab>
      </Section>
    </main>
  )
}
