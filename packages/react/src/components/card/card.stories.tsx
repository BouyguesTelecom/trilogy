import { Card } from "./card.web"
import { CardContent } from "./content/cardContent.web"
import { CardGroup } from "./group/cardGroup.web"
import { CardGroupAddOn } from "./groupAddOn/cardGroupAddOn.web"
import { CardHeader } from "./header/cardHeader.web"
import { CardImage } from "./image/cardImage.web"

const meta: { title: string; component: typeof Card } = {
  title: "Components/Card",
  component: Card,
}
export default meta

export const Composition: { render: () => React.JSX.Element } = {
  render: () => (
    <CardGroup>
      <CardGroupAddOn align="center">
        <span>New</span>
      </CardGroupAddOn>
      <Card>
        <CardImage src="https://placehold.co/600x300" alt="Example" />
        <CardContent>Card content</CardContent>
      </Card>
    </CardGroup>
  ),
}
export const Horizontal: { render: () => React.JSX.Element } = {
  render: () => (
    <Card orientation="horizontal">
      <CardContent>Card content</CardContent>
      <CardImage src="https://placehold.co/600x300" alt="Example" inset />
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
