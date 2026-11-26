import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  CardOverlay,
  Text,
  Title,
} from "@trilogy-ds/react"

import { ScrollView } from "@/components/scrollView/scrollView"

import { Wrapper } from "../components/wrapper"

export default function CardScreen() {
  return (
    <ScrollView>
      <Wrapper title="Card">
        <Card appearance="outlined">
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card>
          <CardImage
            src="https://www.bouyguestelecom.fr/static/wbm/media/hub/Actu-1-WiFi-N1.webp"
            aspectRatio={3}
          />
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card appearance="outlined">
          <CardOverlay>
            <Title size="base">Black friday</Title>
          </CardOverlay>
          <CardImage src="https://via.placeholder.com/150" aspectRatio={3} />
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card appearance="accent-start">
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card appearance="accent-start">
          <CardOverlay>
            <Title size="base">Black friday</Title>
          </CardOverlay>
          <CardImage src="https://via.placeholder.com/150" aspectRatio={3} />
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card appearance="accent-start">
          <CardOverlay>
            <Title size="base">Black friday</Title>
          </CardOverlay>
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>

        <Card appearance="accent-start">
          <CardHeader>
            <Title size="base">Black friday</Title>
          </CardHeader>
          <CardContent>
            <Text size="sm">lorem ipsum</Text>
          </CardContent>
        </Card>
      </Wrapper>
    </ScrollView>
  )
}
