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

### Horizontal

Place the sections side by side instead of stacking them.

```tsx
<Card orientation="horizontal">
  <CardContent>Card content</CardContent>
  <CardImage src="https://placehold.co/600x300" alt="Example" inset />
</Card>
```

### Radius and padding

Override the corner radius or add padding around the sections with a theme token.

```tsx
<Card borderRadius="sm" padding="md">
  <CardContent>Compact card</CardContent>
</Card>
```

## API Reference

Place `CardGroup` around a `Card` to attach a `CardGroupAddOn` to its top or bottom edge. A section's background override does not automatically change the color of its text.

| Prop           | Type                                                               | Default    | Support      | Description                                          |
| -------------- | ------------------------------------------------------------------ | ---------- | ------------ | ---------------------------------------------------- |
| `appearance`   | `shadow` / `outlined` / `accent-start`                             | `shadow`   | Web · Mobile | Surface treatment.                                   |
| `orientation`  | `vertical` / `horizontal`                                          | `vertical` | Web · Mobile | Stacks sections top to bottom or side by side.       |
| `borderRadius` | `full` / `lg` / `md` / `sm` / `xs` / `none`                        | `lg`       | Web · Mobile | Overrides the corner radius with a theme token.      |
| `padding`      | `xxxl` / `xxl` / `xl` / `lg` / `md` / `sm` / `xs` / `xxs` / `none` | none       | Web · Mobile | Adds padding around the sections with a theme token. |
| `children`     | `ReactNode`                                                        | —          | Web · Mobile | Card sections.                                       |
| `style`        | `CSSProperties` / `StyleProp<ViewStyle>`                           | —          | Web · Mobile | Style override.                                      |
