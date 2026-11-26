---
slug: card-group
name: CardGroup
family: Containers
familyOrder: 4
order: 5
parent: card
description: Stacks a card with add-ons placed above or below it.
---

## Examples

### Basic

Place a `CardGroupAddOn` before the card to sit on its top edge, or after it to sit on its bottom edge.

```tsx
<CardGroup>
  <CardGroupAddOn align="start">
    <span>New</span>
  </CardGroupAddOn>
  <Card>
    <CardContent>Card content</CardContent>
  </Card>
</CardGroup>
```

## API Reference

| Prop       | Type                                     | Default | Support      | Description               |
| ---------- | ---------------------------------------- | ------- | ------------ | ------------------------- |
| `children` | `ReactNode`                              | —       | Web · Mobile | A `Card` and its add-ons. |
| `style`    | `CSSProperties` / `StyleProp<ViewStyle>` | —       | Web · Mobile | Style override.           |
