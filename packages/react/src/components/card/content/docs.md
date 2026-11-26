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

### Padding

Override the default padding with a theme token.

```tsx
<Card>
  <CardContent padding="md">Compact content</CardContent>
</Card>
```

## API Reference

| Prop         | Type                                                               | Default | Support      | Description                               |
| ------------ | ------------------------------------------------------------------ | ------- | ------------ | ----------------------------------------- |
| `background` | `BackgroundColors`                                                 | —       | Web · Mobile | Optional semantic background.             |
| `padding`    | `xxxl` / `xxl` / `xl` / `lg` / `md` / `sm` / `xs` / `xxs` / `none` | `lg`    | Web · Mobile | Overrides the padding with a theme token. |
| `children`   | `ReactNode`                                                        | —       | Web · Mobile | Card content.                             |
