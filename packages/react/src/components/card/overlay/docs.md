---
slug: card-overlay
name: CardOverlay
family: Containers
familyOrder: 4
order: 5
parent: card
description: Places content across the top edge of a card.
---

## Examples

### Basic

Add an overlay as a direct child of the card. Its content overhangs the top edge.

```tsx
<Card>
  <CardOverlay align="start">New</CardOverlay>
  <CardContent>Content</CardContent>
</Card>
```

## API Reference

| Prop       | Type                       | Default  | Support      | Description                   |
| ---------- | -------------------------- | -------- | ------------ | ----------------------------- |
| `align`    | `start` / `center` / `end` | `center` | Web · Mobile | Logical horizontal alignment. |
| `children` | `ReactNode`                | —        | Web · Mobile | Overlay content.              |
