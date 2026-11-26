---
slug: card-footer
name: CardFooter
family: Containers
familyOrder: 4
order: 7
parent: card
description: Adds a footer to a card, separated from the content by a top border.
---

## Examples

### Basic

A footer sits below the content and is separated from it by a top border.

```tsx
<Card>
  <CardContent>Card content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Background

The top border takes the color of the background when one is provided.

```tsx
<Card>
  <CardContent>Card content</CardContent>
  <CardFooter background="secondary">Footer</CardFooter>
</Card>
```

### Padding

Override the default padding with a theme token.

```tsx
<Card>
  <CardContent>Card content</CardContent>
  <CardFooter padding="sm">Compact footer</CardFooter>
</Card>
```

## API Reference

A background override does not automatically change the color of the footer text.

| Prop         | Type                                                               | Default | Support      | Description                                                   |
| ------------ | ------------------------------------------------------------------ | ------- | ------------ | ------------------------------------------------------------- |
| `background` | `BackgroundColors`                                                 | —       | Web · Mobile | Optional semantic background; the top border takes its color. |
| `padding`    | `xxxl` / `xxl` / `xl` / `lg` / `md` / `sm` / `xs` / `xxs` / `none` | `md`    | Web · Mobile | Overrides the padding with a theme token.                     |
| `children`   | `ReactNode`                                                        | —       | Web · Mobile | Footer content.                                               |
| `style`      | `CSSProperties` / `StyleProp<ViewStyle>`                           | —       | Web · Mobile | Style override.                                               |
