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

Place `CardGroup` around a `Card` to attach a `CardGroupAddOn` to its top or bottom edge. A section's background override does not automatically change the color of its text.

| Prop         | Type                                     | Default  | Support      | Description        |
| ------------ | ---------------------------------------- | -------- | ------------ | ------------------ |
| `appearance` | `shadow` / `outlined` / `accent-start`   | `shadow` | Web · Mobile | Surface treatment. |
| `children`   | `ReactNode`                              | —        | Web · Mobile | Card sections.     |
| `style`      | `CSSProperties` / `StyleProp<ViewStyle>` | —        | Web · Mobile | Style override.    |
