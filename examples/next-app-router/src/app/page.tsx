import { Badge } from '@/components/badge'
import { Box, BoxContent, BoxFooter, BoxHeader } from '@/components/box'
import { Breadcrumb, BreadcrumbItem } from '@/components/breadcrumb'
import { Button, ButtonMarkup, ButtonVariant } from '@/components/button'
import { Card, CardContent, CardImage } from '@/components/card'
import { Checkbox } from '@/components/checkbox'
import { Chips } from '@/components/chips'
import ChipsList from '@/components/chips/list/ChipsList'
import { Container } from '@/components/container'
import { Countdown } from '@/components/countdown'
import { Fab } from '@/components/fab'
import { Hero } from '@/components/hero'
import { Icon, IconName } from '@/components/icon'
import { Image } from '@/components/image'
import { List, ListIconStatus, ListItem, ListItemDescription } from '@/components/list'
import { Otp } from '@/components/otp'
import { Pagination } from '@/components/pagination'
import { Popover } from '@/components/popover'
import { Price } from '@/components/price'
import { Progress, ProgressItem, ProgressRadial } from '@/components/progress'
import { Radio } from '@/components/radio'
import { Range } from '@/components/range'
import { RowItem, Rows } from '@/components/rows'
import { Section } from '@/components/section'
import { SegmentControl, SegmentControlItem } from '@/components/segment-control'
import { Select, SelectOption } from '@/components/select'
import { Stepper, StepperStep } from '@/components/stepper'
import { Sticker } from '@/components/sticker'
import { Switch } from '@/components/switch'
import { Tabs, TabsItem } from '@/components/tabs'
import { Tag, TagVariant } from '@/components/tag'
import { Text, TextLevels } from '@/components/text'
import { Timeline, TimelineContent, TimelineItem, TimelineMarker } from '@/components/timeline'
import { View } from '@/components/view'
import { StatusState, TrilogyColor, TypographyAlign, VariantState } from '@/objects'
import { Textarea } from '@trilogy-ds/react/components/textarea'
import { Title, TitleLevels } from '@trilogy-ds/react/components/title'
import '@trilogy-ds/styles/dist/default/trilogy.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Section>
          <View>
            <Tag variant={TagVariant.WARNING}>Tag</Tag>
            <Title>Je suis un titre SSR</Title>
            <Textarea />
            <Timeline>
              <TimelineItem cancel>
                <TimelineMarker iconName={IconName.CHECK} />
                <TimelineContent
                  heading='20 September'
                  content='Modification de votre identifiant de connexion'
                  link='link'
                  contentLink='Check the email'
                />
              </TimelineItem>
              <TimelineItem done>
                <TimelineMarker iconName={IconName.CHECK} />
                <TimelineContent
                  heading='20 September'
                  content='Modification de votre identifiant de connexion'
                  link='link'
                  contentLink='Check the email'
                />
              </TimelineItem>
              <TimelineItem active>
                <TimelineMarker iconName={IconName.CHECK} />
                <TimelineContent
                  heading='20 September'
                  content='Modification de votre identifiant de connexion'
                  link='link'
                  contentLink='Check the email'
                />
              </TimelineItem>
              <TimelineItem undone>
                <TimelineMarker iconName={IconName.CHECK} />
                <TimelineContent
                  heading='20 September'
                  content='Modification de votre identifiant de connexion'
                  link='link'
                  contentLink='Check the email'
                />
              </TimelineItem>
            </Timeline>

            <Tabs activeIndex={0}>
              <TabsItem iconName={IconName.BELL}>One</TabsItem>
              <TabsItem iconName={IconName.BELL}>Two</TabsItem>
              <TabsItem iconName={IconName.BELL}>Three</TabsItem>
            </Tabs>

            <Tabs inverted>
              <TabsItem iconName={IconName.BELL} active>
                Centered
              </TabsItem>
              <TabsItem iconName={IconName.BELL}>Two</TabsItem>
              <TabsItem iconName={IconName.BELL}>Three</TabsItem>
            </Tabs>

            <Switch
              status={StatusState.ERROR}
              label='Switch one'
              name='switch one'
              onChange={(e) => {
                console.log('SwitchState =>', e.switchState)
                console.log('SwitchSName =>', e.switchName)
              }}
              onClick={(e) => {
                console.log('SwitchState =>', e.switchState)
                console.log('SwitchSName =>', e.switchName)
              }}
            />
            <Sticker>Sticker</Sticker>
            <Sticker variant={'ACCENT'}>Sticker</Sticker>
            <Sticker variant={'INFO'}>Sticker</Sticker>
            <Sticker variant={VariantState.ACCENT} small>
              Sticker
            </Sticker>

            <Stepper>
              <StepperStep done iconName={IconName.EYE} label='Recup' step={1} />
              <StepperStep current label='Compléments' step={2} />
              <StepperStep error iconName={IconName.SEARCH} label='Coordonate' step={3} />
              <StepperStep label='Livraison' step={4} />
              <StepperStep iconName={IconName.EYE} label='Confirm' step={5} />
            </Stepper>

            <Select name='option' label='label' id='id' iconName={IconName.ALERT} native>
              <SelectOption id='id_four' value='disabled' label='disabled' disabled iconName='tri-bell' />
              <SelectOption id='id_one' value='opt_one' label='Virgile' iconName='tri-bell' />
              <SelectOption id='id_two' value='opt_two' label='Toto' iconName='tri-bell' />
              <SelectOption id='id_three' value='Venus' label='Venus' iconName='tri-bell' />
            </Select>

            <SegmentControl>
              <SegmentControlItem active onClick={() => alert('Appels')}>
                Item 1
              </SegmentControlItem>
              <SegmentControlItem onClick={() => alert('SMS')}>Item 2</SegmentControlItem>
              <SegmentControlItem onClick={() => alert('Équipements')}>Item 3</SegmentControlItem>
              <SegmentControlItem disabled>Item 4</SegmentControlItem>
            </SegmentControl>

            <Range
              min={0}
              max={100}
              labelValueCursorMin={'€'}
              labelValueCursorMax={'€'}
              valueCursorMin={0}
              valueCursorMax={50}
              label='Ceci est un label'
              idMin='min'
              idMax='max'
              nameMax='max'
              nameMin='min'
              onChangeMin={(e) => console.log(e)}
              onChangeMax={(e) => console.log(e)}
              gap={0}
            />

            <Rows>
              <RowItem>
                <Text typo={TypographyAlign.TEXT_CENTERED}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </Text>
              </RowItem>
            </Rows>

            <Radio
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.radioValue, e.radioChecked)}
            />

            <ProgressRadial percent={30} secondPercent={30}>
              <Title level={TitleLevels.THREE} marginless>
                60
              </Title>
              <Text level={TextLevels.ONE} marginless>
                / 100 Go
              </Text>
            </ProgressRadial>

            <Progress stacked>
              <ProgressItem percent={15} status={StatusState.SUCCESS} />
              <ProgressItem percent={15} status={StatusState.INFO} />
              <ProgressItem percent={15} status={StatusState.WARNING} />
              <ProgressItem percent={15} status={StatusState.ERROR} />
            </Progress>

            <Price
              accessibilityLabel='Price label'
              overline='A partir de'
              strikedAmount={10.99}
              level={1}
              amount={24.99}
              showCents={false}
              period={'mois'}
              tagAmount={10}
              tagSymbol={'€'}
            />
            <Popover content='Voici une simple popover'>
              <Text>Popover</Text>
            </Popover>

            <Pagination onClick={(e) => console.log('event', e)} count={50} defaultPage={2} />

            <Otp label='Set your OTP' autoFocus code='111111' />
            <Badge reversed={true} content={2} />
            <Card active backgroundColor={TrilogyColor.BACKGROUND}>
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

            <Checkbox
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label='Lorem ipsum dolor'
              name='radio1'
              value='default value 1'
            />
            <ChipsList>
              <Chips>Chips 1</Chips>
              <Chips>Chips 2</Chips>
              <Chips>Chips 3</Chips>
              <Chips>Chips 4</Chips>
            </ChipsList>

            <List>
              <ListItem
                deletable
                status={ListIconStatus.ERROR}
                customIcon={IconName.TIMES}
                action={<Icon name='tri-trash' size='small' />}
                title='Ceci est le titre'
                description='Lorem ipsum dolor sit amet consectetur '
              ></ListItem>
              <ListItem
                customIcon={<Icon name='tri-trash' size='small' />}
                action={<Switch name='switch' onChange={(e) => console.log(e.switchState)} />}
              >
                <Title level={6}>Ceci est le titre</Title>
                <ListItemDescription>Lorem ipsum dolor sit amet consectetur adipisicing</ListItemDescription>
              </ListItem>
            </List>

            <Image width={150} height={150} src='https://picsum.photos/id/1/1500/600' />

            <Hero backgroundSrc={'https://picsum.photos/id/1/1500/600'} inverted>
              <Container>
                <Text>Welcome Message</Text>
                <Title level={1}>Hero with image background</Title>
                {/* <button className='button'>Click me !</button> */}
                <Button markup={ButtonMarkup.BUTTON} variant={'PRIMARY'}>
                  Click me !
                </Button>
              </Container>
            </Hero>

            <Fab iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
              New Conversation
            </Fab>

            <Countdown deadline={new Date('2025-12-24 20:00:00')}></Countdown>

            <Breadcrumb>
              <BreadcrumbItem href='https://Home.fr'>Home</BreadcrumbItem>
              <BreadcrumbItem to='#anchor'>Catalog</BreadcrumbItem>
              <BreadcrumbItem>Accessories</BreadcrumbItem>
              <BreadcrumbItem>Current page</BreadcrumbItem>
            </Breadcrumb>

            <Box highlighted={TrilogyColor.ERROR} className='is-fullheight'>
              <BoxHeader>Test</BoxHeader>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Highlited box</Title>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim
                  velit ultricies justo ultrices sed leo cras.
                </Text>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim
                  velit ultricies justo ultrices sed leo cras.
                </Text>
              </BoxContent>
              <BoxFooter>
                <Button variant={ButtonVariant.CONVERSION}>Test</Button>
              </BoxFooter>
            </Box>
          </View>
        </Section>
      </main>
    </div>
  )
}
