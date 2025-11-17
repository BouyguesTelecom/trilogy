import {
  Box,
  BoxContent,
  Button,
  IconName,
  Section,
  Spacer,
  SpacerSize,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Title,
} from '@trilogy-ds/react/components'
import { isMobile } from '@trilogy-ds/react/helpers'
import { Alignable } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const TabScreen = (): JSX.Element => {
  const [index, setIndex] = React.useState(0)

  return (
    <Section>
      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Default size</Title>
          <Tabs>
            <TabList>
              <Tab
                active={index === 0}
                label='Tab 1'
                iconName={IconName.ALERT}
                href='/hello'
                onClick={() => setIndex(0)}
              />
              <Tab active={index === 1} label='Tab 2' iconName={IconName.ALERT} onClick={() => setIndex(1)} />
              <Tab active={index === 2} label='Tab 3' iconName={IconName.ALERT} onClick={() => setIndex(2)} disabled />
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Tab 1</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 2</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 3</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button variant='CONVERSION' onClick={() => setIndex(1)}>
            Set Tab 2
          </Button>
        </BoxContent>
      </Box>

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Full width</Title>
          <Tabs fullwidth>
            <TabList>
              <Tab
                active={index === 0}
                label='Tab long text content 1'
                iconName={IconName.ALERT}
                href='/hello'
                onClick={() => setIndex(0)}
              />
              <Tab active={index === 1} label='Tab 2' iconName={IconName.ALERT} onClick={() => setIndex(1)} />
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Tab 1</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 2</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </BoxContent>
      </Box>

      <Box flat fullheight>
        <BoxContent>
          <Title className='is-centered'>Small size</Title>
          <Tabs small>
            <TabList>
              <Tab label='Tab 1' iconName={IconName.ALERT} />
              <Tab label='Tab 2' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Tab 1</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 2</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 3</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.EIGHT} />

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Alignable start</Title>
          <Tabs>
            <TabList align={Alignable.ALIGNED_START}>
              <Tab label='Tab 1' iconName={IconName.ALERT} />
              <Tab label='Tab 2' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
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
        </BoxContent>
      </Box>

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Alignable end</Title>
          <Tabs>
            <TabList align={Alignable.ALIGNED_END}>
              <Tab label='Tab 1' iconName={IconName.ALERT} />
              <Tab label='Tab 2' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
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
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.EIGHT} />

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Scrollable</Title>
          <Tabs>
            <TabList align={Alignable.ALIGNED_START}>
              {[...Array(isMobile ? 8 : 16).keys()].map((_, i) => {
                return <Tab key={i} label={`Tab ${i + 1}`} iconName={IconName.ALERT} />
              })}
            </TabList>
            <TabPanels>
              {[...Array(isMobile ? 8 : 16).keys()].map((_, i) => {
                return (
                  <TabPanel key={i}>
                    <Title>Tab {i + 1}</Title>
                  </TabPanel>
                )
              })}
            </TabPanels>
          </Tabs>
        </BoxContent>
      </Box>

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Small tabs scrollable (web)</Title>
          <Tabs small>
            <TabList align={Alignable.ALIGNED_START}>
              {[...Array(isMobile ? 6 : 20).keys()].map((_, i) => {
                return <Tab key={i} label={`Tab${i + 1}`} iconName={IconName.ALERT} />
              })}
            </TabList>
            <TabPanels>
              {[...Array(isMobile ? 6 : 20).keys()].map((_, i) => {
                return (
                  <TabPanel key={i}>
                    <Title>Tab {i + 1}</Title>
                  </TabPanel>
                )
              })}
            </TabPanels>
          </Tabs>
        </BoxContent>
      </Box>
    </Section>
  )
}
