import {
  Card,
  CardContent,
  CardGroup,
  CardGroupAddOn,
  CardHeader,
  CardImage,
  Text,
  Title,
} from "@trilogy-ds/react"

import { ScrollView } from "@/components/scrollView/scrollView"

import { Wrapper } from "../components/wrapper"

export default function CardScreen() {
  return (
    <ScrollView>
      <Wrapper title="Card">
        <Card borderRadius="sm">
          <CardContent padding="md">
            <Text size="sm">borderRadius sm + padding md</Text>
          </CardContent>
        </Card>

        <Card orientation="horizontal">
          <CardContent>
            <Text size="sm">image collée au bord</Text>
          </CardContent>
          <CardImage
            src="https://www.bouyguestelecom.fr/static/wbm/media/hub/Actu-1-WiFi-N1.webp"
            alt="Wi-Fi"
          />
        </Card>

        <Card orientation="horizontal" padding="none">
          <CardContent>
            <Text size="sm">image inset</Text>
          </CardContent>
          <CardImage
            src="https://www.bouyguestelecom.fr/static/wbm/media/hub/Actu-1-WiFi-N1.webp"
            alt="Wi-Fi"
            inset
          />
        </Card>

        <Card appearance="outlined">
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card>
          <CardImage
            src="https://www.bouyguestelecom.fr/static/wbm/media/hub/Actu-1-WiFi-N1.webp"
            alt="Wi-Fi"
            aspectRatio={3}
          />
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <CardGroup>
          <CardGroupAddOn>
            <Title size="base">Black friday</Title>
          </CardGroupAddOn>
          <Card appearance="outlined">
            <CardImage
              src="https://via.placeholder.com/150"
              alt="Black friday"
              aspectRatio={3}
            />
            <CardContent>
              <Text size="sm">lorem ipsum</Text>
            </CardContent>
          </Card>
        </CardGroup>

        <Card appearance="accent-start">
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <CardGroup>
          <CardGroupAddOn>
            <Title size="base">Black friday</Title>
          </CardGroupAddOn>
          <Card appearance="accent-start">
            <CardImage
              src="https://via.placeholder.com/150"
              alt="Black friday"
              aspectRatio={3}
            />
            <CardContent>
              <Text size="sm">lorem ipsum</Text>
            </CardContent>
          </Card>
        </CardGroup>

        <CardGroup>
          <CardGroupAddOn>
            <Title size="base">Black friday</Title>
          </CardGroupAddOn>
          <Card appearance="accent-start">
            <CardContent>
              <Text size="sm">lorem ipsum</Text>
            </CardContent>
          </Card>
        </CardGroup>

        <Card appearance="accent-start">
          <CardHeader>
            <Title size="base">Black friday</Title>
          </CardHeader>
          <CardContent padding="xl">
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>
      </Wrapper>
    </ScrollView>
  )
}
