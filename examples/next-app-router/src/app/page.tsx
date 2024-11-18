import { IconName } from '@/components/icon'
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
import { StatusState, TypographyAlign, VariantState } from '@/objects'
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
          </View>
        </Section>
      </main>
    </div>
  )
}
