import { TrilogyColor } from '@trilogy-ds/react'
import { Card, CardContent, Section, Stack, Text } from '@trilogy-ds/react/components'

export const StackScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Stack>
        <Card>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
              aliquid, similique necessitatibus perferendis quis nulla corporis voluptate atque praesentium assumenda.
              Fuga est modi facere ducimus.
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta, unde cupiditate, ad sit
              aliquid, similique necessitatibus perferendis quis nulla corporis voluptate atque praesentium assumenda.
              Fuga est modi facere ducimus.
            </Text>
          </CardContent>
        </Card>
      </Stack>
    </Section>
  )
}
