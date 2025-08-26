import { TitleLevels, TrilogyColor } from '@trilogy-ds/react'
import { Box, BoxContent, Card, CardContent, Section, Stack, Text, Title } from '@trilogy-ds/react/components'
import { DirectionEnum } from '@trilogy-ds/react/lib/objects/facets/Direction'

export const StackScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Title level={TitleLevels.THREE}>Card without Wrapper </Title>
      <Box flat>
        <BoxContent>
          <Card>
            <CardContent>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                aliquid, similique necessitatibus.
              </Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                aliquid, similique necessitatibus.
              </Text>
            </CardContent>
          </Card>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.THREE}>Card with Stack without gap</Title>
      <Box flat>
        <BoxContent>
          <Stack>
            <Card>
              <CardContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                  aliquid, similique necessitatibus.
                </Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                  aliquid, similique necessitatibus.
                </Text>
              </CardContent>
            </Card>
          </Stack>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.THREE}>Card with Stack with gap 6</Title>
      <Box flat>
        <BoxContent>
          <Stack gap={6}>
            <Card>
              <CardContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                  aliquid, similique necessitatibus.
                </Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                  aliquid, similique necessitatibus.
                </Text>
              </CardContent>
            </Card>
          </Stack>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.THREE}>Card imbrication in Stack</Title>
      <Box flat>
        <BoxContent>
          <Stack>
            <Card>
              <CardContent>
                <Card>
                  <CardContent>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                      aliquid, similique necessitatibus.
                    </Text>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
                      aliquid, similique necessitatibus.
                    </Text>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Stack>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.THREE}>Row Stack</Title>
      <Box flat>
        <BoxContent>
          <Stack direction={DirectionEnum.ROW} gap={6}>
            <Card>
              <CardContent>
                <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
              </CardContent>
            </Card>
          </Stack>
        </BoxContent>
      </Box>
    </Section>
  )
}
