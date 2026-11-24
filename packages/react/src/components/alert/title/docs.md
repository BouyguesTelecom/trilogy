---
slug: alert-title
name: AlertTitle
family: Feedback
familyOrder: 2
order: 3
parent: alert
description: Adds a short heading to a composed alert message.
---

## Examples

### Basic

Give a composed alert a concise heading.

```tsx
<AlertTitle>Action required</AlertTitle>
```

### Choose Web markup

Choose a heading level that fits the surrounding page hierarchy.

```tsx
<AlertTitle markup="h3">Account security</AlertTitle>
```

## API Reference

| Prop        | Type                                                  | Default | Support      | Description                                                      |
| ----------- | ----------------------------------------------------- | ------- | ------------ | ---------------------------------------------------------------- |
| `children`  | `ReactNode`                                           | —       | Web · Mobile | Alert heading content.                                           |
| `id`        | `string`                                              | —       | Web · Mobile | Element identifier.                                              |
| `testId`    | `string`                                              | —       | Web · Mobile | Testing identifier.                                              |
| `style`     | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —       | Web · Mobile | Inline style override, applied after built-in styles.            |
| `markup`    | `AlertTitleMarkup`                                    | `p`     | Web          | Selects `p`, `h2`, `h3`, `h4`, `h5`, or `h6`.                    |
| `className` | `string`                                              | —       | Web          | Additional CSS classes, hashed according to the Trilogy context. |
