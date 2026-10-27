import { Screen } from '@/components/screen'
import { useRouter } from '@/libs/router'
import { SCREEN_ROUTES } from '@/data/screenRoutes'
import {
  Box,
  BoxContent,
  Column,
  Columns,
  Rows,
  Row,
  Icon,
  IconName,
  Input,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  View,
  TypographyAlign,
} from '@trilogy-ds/react'
import * as React from 'react'

export default function HomeScreen(): JSX.Element {
  const router = useRouter()
  const [list, setList] = React.useState<string[]>([...SCREEN_ROUTES])

  const handleSearch = React.useCallback((e: string) => {
    const query = e.trim().toLocaleLowerCase()
    setList(SCREEN_ROUTES.filter((screen) => screen.includes(query)))
  }, [])

  return (
    <View markup='main' className='main-content' style={{ flex: 1 }}>
      <Screen scrollable>
        <Rows gap={2}>
          <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
            This home screen is only for navigation
          </Text>
          <Input placeholder='Search component' onChange={(e) => handleSearch(e.inputValue)} />
          <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
            Screens
          </Title>
          {list.map((pathName, index) => {
            return (
              <Row key={index}>
                <Box
                  onClick={() => {
                    router.push(pathName)
                  }}
                >
                  <BoxContent>
                    <Columns verticalAlign='ALIGNED_CENTER' gap={0}>
                      <Column>
                        <Title level={TitleLevels.THREE}>{pathName}</Title>
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
      </Screen>
    </View>
  )
}
