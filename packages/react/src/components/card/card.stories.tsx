import { Card } from "./card.web"
import { CardContent } from "./content/cardContent.web"
import { CardHeader } from "./header/cardHeader.web"
import { CardImage } from "./image/cardImage.web"
import { CardOverlay } from "./overlay/cardOverlay.web"

const meta: { title: string; component: typeof Card } = {
  title: "Components/Card",
  component: Card,
}
export default meta

export const Composition: { render: () => React.JSX.Element } = {
  render: () => (
    <Card>
      <CardOverlay align="center">
        <span>New</span>
      </CardOverlay>
      <CardImage src="https://placehold.co/600x300" alt="Example" />
      <CardContent>Card content</CardContent>
    </Card>
  ),
}
export const Outlined: { render: () => React.JSX.Element } = {
  render: () => (
    <Card appearance="outlined">
      <CardHeader>Header</CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  ),
}
export const AccentStart: { render: () => React.JSX.Element } = {
  render: () => (
    <Card appearance="accent-start">
      <CardHeader>Header</CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  ),
}
