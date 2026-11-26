---
slug: card-header
name: CardHeader
family: Containers
familyOrder: 4
order: 2
parent: card
description: Provides an optional card header.
---

## Examples

### Basic

Place any header content inside the card.

```tsx
<Card>
  <CardHeader>Header</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## API Reference

| Prop         | Type               | Default | Support      | Description                   |
| ------------ | ------------------ | ------- | ------------ | ----------------------------- |
| `background` | `BackgroundColors` | —       | Web · Mobile | Optional semantic background. |
| `children`   | `ReactNode`        | —       | Web · Mobile | Header content.               |
