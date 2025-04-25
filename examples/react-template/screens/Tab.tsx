import {
  Box,
  BoxContent,
  IconName,
  Section,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Title,
} from '@trilogy-ds/react/components'
import { Alignable } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const TabScreen = (): JSX.Element => {
  const [index, setIndex] = React.useState(0)

  return (
    <Section>
      {/* <Columns fullheight>
        <Column>
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
                  <Tab
                    active={index === 2}
                    label='Tab 3'
                    iconName={IconName.ALERT}
                    onClick={() => setIndex(2)}
                    disabled
                  />
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
              <Columns align='ALIGNED_CENTER'>
                <Column narrow>
                  <Button variant='CONVERSION' onClick={() => setIndex(1)}>
                    Set Tab 2
                  </Button>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </Column>

        <Column>
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
        </Column>
      </Columns>

      <Spacer size={SpacerSize.EIGHT} />

      <Columns>
        <Column>
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
        </Column>
        <Column>
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
        </Column>
      </Columns> */}

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>ARROWS</Title>
          <Tabs>
            <TabList align={Alignable.ALIGNED_END}>
              <Tab label='Tab 1' iconName={IconName.ALERT} />
              <Tab label='Tab 2' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
              <Tab label='Tab 3' iconName={IconName.ALERT} />
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

      {/* <Tabs small>
        <TabList align={Alignable.ALIGNED_END}>
          <Tab label='Tab 1' iconName={IconName.ALERT} />
          <Tab label='Tab 2' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
          <Tab label='Tab 3' iconName={IconName.ALERT} />
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
      </Tabs> */}
    </Section>
  )
}
