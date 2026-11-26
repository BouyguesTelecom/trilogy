---
slug: card-content
name: CardContent
family: Containers
familyOrder: 4
order: 3
parent: card
description: Contains the main content of a card.
---

## Examples

### Basic

Compose arbitrary card content.

```tsx
<Card>
  <CardContent>Card content</CardContent>
</Card>
```

## API Reference

| Prop         | Type               | Default | Support      | Description                   |
| ------------ | ------------------ | ------- | ------------ | ----------------------------- |
| `background` | `BackgroundColors` | —       | Web · Mobile | Optional semantic background. |
| `children`   | `ReactNode`        | —       | Web · Mobile | Card content.                 |
