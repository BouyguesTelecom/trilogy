import {
  Button,
  Icon,
  IconName,
  Section,
  Spacer,
  SpacerSize,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Title,
  TitleLevels,
  View
} from '@trilogy-ds/react/components'
import {Alignable} from '@trilogy-ds/react/objects'
import * as React from 'react'

export const TabScreen = (): JSX.Element => {
  const [index, setIndex] = React.useState(0)
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Srollable Tabs with arrow</Title>

      <Tabs className={'is-flex is-aligned-center is-justified-center'}>
        <TabList>
          <Tab label='Tab 1' iconName={IconName.ALERT}/>
          <Tab label='Tab 2' iconName={IconName.ALERT}/>
          <Tab label='Tab 3' iconName={IconName.ALERT}/>
          <Tab label='Tab 4' iconName={IconName.ALERT}/>
          <Tab label='Tab 5' iconName={IconName.ALERT}/>
          <Tab label='Tab 6' iconName={IconName.ALERT}/>
        </TabList>
        <Spacer size={SpacerSize.THREE} horizontal/>
        <Icon name={IconName.ARROW_RIGHT}/>
      </Tabs>

      <div
        className='tabs is-flex is-aligned-center is-justified-center'
        data-tabs-context=''
        data-tab-initialized='true'
      >
        <div className='tab-list is-aligned-center'>
          <a
            href='/offres-internet/combo-box/smart-tv'
            className='tab is-active'
            data-index='0'
            id='smart-tv'

          >
            <div className='tab-icon'>
              <span className='icon is-small'>
                <i className='tri-tv' aria-hidden='true'></i>
              </span>
            </div>
            Smart TV
          </a>
          <a href='/offres-internet/combo-box/ps5' className='tab' data-index='1' id='ps5'>
            <div className='tab-icon'>
              <span className='icon is-small'>
                <i className='tri-gamepad' aria-hidden='true'></i>
              </span>
            </div>
            PS5
          </a>
          <a href='/offres-internet/combo-box/gaming' className='tab' data-index='2' id='gaming'>
            <div className='tab-icon'>
              <span className='icon is-small'>
                <i className='tri-gamepad-online' aria-hidden='true'></i>
              </span>
            </div>
            Xbox
          </a>
          <a href='/offres-internet/combo-box/ipad' className='tab' data-index='3' id='ipad'>
            <div className='tab-icon'>
              <span className='icon is-small'>
                <i className='tri-tablet' aria-hidden='true'></i>
              </span>
            </div>
            iPad
          </a>
          <a
            href='/offres-internet/combo-box/videoprojecteur'
            className='tab'
            data-index='4'
            id='videoprojecteur'
          >
            <div className='tab-icon'>
              <span className='icon is-small'>
                <i className='tri-video-camera' aria-hidden='true'></i>
              </span>
            </div>
            Vidéoprojecteur
          </a>
        </div>
        <div className='' style={{marginLeft: "12px"}}></div>
        <span className='icon is-hidden-tablet'>
          <i className='tri-arrow-right' aria-hidden='true'></i>
        </span>
      </div>

      <Title level={TitleLevels.THREE}>Simple</Title>

      <Tabs>
        <TabList>
          <Tab active={index === 0} label='Tab 1' iconName={IconName.ALERT} href='/hello' onClick={() => setIndex(0)}/>
          <Tab active={index === 1} label='Tab 2' iconName={IconName.ALERT} onClick={() => setIndex(1)}/>
          <Tab active={index === 2} label='Tab 3' iconName={IconName.ALERT} onClick={() => setIndex(2)} disabled/>
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

      <Button variant='CONVERSION' onClick={() => setIndex(1)}>
        Set Tab 2
      </Button>

      <Tabs>
        <TabList align={Alignable.ALIGNED_START}>
          <Tab label='Tab 1' iconName={IconName.ALERT}/>
          <Tab label='Tab 2' iconName={IconName.ALERT}/>
          <Tab label='Tab 3' iconName={IconName.ALERT}/>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Tab 1</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 2</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 3</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs>
        <TabList align={Alignable.ALIGNED_END}>
          <Tab label='Tab 1' iconName={IconName.ALERT}/>
          <Tab label='Tab 2' iconName={IconName.ALERT}/>
          <Tab label='Tab 3' iconName={IconName.ALERT}/>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Title>Tab 1</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 2</Title>
          </TabPanel>
          <TabPanel>
            <Title>Tab 3</Title>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Section>
  )
}
