---
slug: card-group-add-on
name: CardGroupAddOn
family: Containers
familyOrder: 4
order: 6
parent: card
description: Places content on the edge of the adjacent card inside a card group.
---

## Examples

### Basic

The add-on stays in the layout flow and its content straddles the edge of the neighbouring card.

```tsx
<CardGroup>
  <CardGroupAddOn>
    <span>Black friday</span>
  </CardGroupAddOn>
  <Card>
    <CardContent>Card content</CardContent>
  </Card>
</CardGroup>
```

### Alignment

Align the content to the logical start, center or end.

```tsx
<CardGroup>
  <Card>
    <CardContent>Card content</CardContent>
  </Card>
  <CardGroupAddOn align="end">
    <span>Offer</span>
  </CardGroupAddOn>
</CardGroup>
```

## API Reference

| Prop       | Type                       | Default  | Support      | Description                   |
| ---------- | -------------------------- | -------- | ------------ | ----------------------------- |
| `align`    | `start` / `center` / `end` | `center` | Web · Mobile | Logical horizontal alignment. |
| `children` | `ReactNode`                | —        | Web · Mobile | Content shown on the edge.    |
