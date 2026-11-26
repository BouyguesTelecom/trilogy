---
slug: card
name: Card
family: Containers
familyOrder: 4
order: 1
description: Groups composable content inside a rounded surface.
---

## Examples

### Basic

Compose a card with an optional header and content.

```tsx
<Card>
  <CardHeader>Header</CardHeader>
  <CardContent>Card content</CardContent>
</Card>
```

### Outlined

Choose a surface treatment without changing its layout.

```tsx
<Card appearance="outlined">
  <CardContent>Outlined card</CardContent>
</Card>
```

## API Reference

Place `CardOverlay` directly inside `Card` so it can extend beyond the card. The overlay is rendered in front of the other children, which retain their relative order. A section's background override does not automatically change the color of its text.

| Prop         | Type                                     | Default  | Support      | Description                                |
| ------------ | ---------------------------------------- | -------- | ------------ | ------------------------------------------ |
| `appearance` | `shadow` / `outlined` / `accent-start`   | `shadow` | Web · Mobile | Surface treatment.                         |
| `children`   | `ReactNode`                              | —        | Web · Mobile | Card sections and optional direct overlay. |
| `style`      | `CSSProperties` / `StyleProp<ViewStyle>` | —        | Web · Mobile | Style override.                            |
