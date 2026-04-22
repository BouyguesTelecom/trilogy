import {
  Box,
  BoxContent,
  Column,
  Columns,
  Icon,
  IconName,
  Input,
  Row,
  Rows,
  ScrollView,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  TypographyAlign,
  View,
} from '@trilogy-ds/react'
import { useCallback, useState } from 'react'

const screens = [
  'alert',
  'auto-layout',
  'box',
  'button',
  'checkbox',
  'divider',
  'icon',
  'input',
  'modal',
  'select',
  'switch',
  'text',
  'title',
]

export default function HomeScreen() {
  const [list, setList] = useState(screens)

  const handleSearch = useCallback((e: string) => {
    if (screens.includes(e.toLocaleLowerCase())) {
      setList([e])
    }
  }, [])

  return (
    <View markup='main' className='main-content'>
      <ScrollView>
        <Section>
          <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
            You need to test components in other screens
          </Title>
          <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
            This home screen is only for navigation
          </Text>
          <Input placeholder='Rechercher un composant' onChange={(e) => handleSearch(e.inputValue)} />
          <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
            Screens
          </Title>
          <Rows gap={2}>
            {list.map((name, index) => {
              return (
                <Row key={index}>
                  <Box
                    onClick={() => {
                      if (navigation) {
                        navigation.navigate(name)
                      }
                    }}
                  >
                    <BoxContent>
                      <Columns verticalAlign='ALIGNED_CENTER' gap={0}>
                        <Column>
                          <Title level={TitleLevels.THREE}>{name}</Title>
                        </Column>
                        <Column narrow>
                          <Icon name={IconName.ARROW_RIGHT} />
                        </Column>
                      </Columns>
                    </BoxContent>
                  </Box>
                </Row>
              )
            })}
          </Rows>
        </Section>
      </ScrollView>
    </View>
  )
}
