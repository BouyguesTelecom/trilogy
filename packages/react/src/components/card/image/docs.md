---
slug: card-image
name: CardImage
family: Containers
familyOrder: 4
order: 4
parent: card
description: Displays an image within a card.
---

## Examples

### Basic

Provide an image URI and an accessible description.

```tsx
<Card>
  <CardImage src="https://placehold.co/600x300" alt="Example" aspectRatio={2} />
  <CardContent>Content</CardContent>
</Card>
```

### Inset

Detach the image from the card edges with a margin and rounded corners.

```tsx
<Card>
  <CardImage src="https://placehold.co/600x300" alt="Example" inset />
  <CardContent>Content</CardContent>
</Card>
```

## API Reference

| Prop          | Type      | Default                                                | Support      | Description                                                               |
| ------------- | --------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------- |
| `src`         | `string`  | —                                                      | Web · Mobile | Image URI.                                                                |
| `alt`         | `string`  | —                                                      | Web · Mobile | Accessible description.                                                   |
| `aspectRatio` | `number`  | `2` when vertical; natural image ratio when horizontal | Web · Mobile | Width-to-height ratio.                                                    |
| `inset`       | `boolean` | `false`                                                | Web · Mobile | Detaches the image from the card edges with a margin and rounded corners. |
