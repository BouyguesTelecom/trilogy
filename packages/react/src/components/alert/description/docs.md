---
slug: alert-description
name: AlertDescription
family: Feedback
familyOrder: 2
order: 4
parent: alert
description: Provides supporting text beneath an alert heading.
---

## Examples

### Basic

Add supporting details below an alert title.

```tsx
<AlertDescription>
  Review your recent activity before continuing.
</AlertDescription>
```

### Choose Web markup

Choose an inline element when the description needs to fit within surrounding text.

```tsx
<AlertDescription markup="span">
  Additional details are available.
</AlertDescription>
```

## API Reference

| Prop        | Type                                                  | Default | Support      | Description                                                      |
| ----------- | ----------------------------------------------------- | ------- | ------------ | ---------------------------------------------------------------- |
| `children`  | `ReactNode`                                           | —       | Web · Mobile | Alert description content.                                       |
| `id`        | `string`                                              | —       | Web · Mobile | Element identifier.                                              |
| `testId`    | `string`                                              | —       | Web · Mobile | Testing identifier.                                              |
| `style`     | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —       | Web · Mobile | Inline style override, applied after built-in styles.            |
| `markup`    | `AlertDescriptionMarkup`                              | `p`     | Web          | Selects `p`, `span`, `div`, `h2`, `h3`, `h4`, `h5`, or `h6`.     |
| `className` | `string`                                              | —       | Web          | Additional CSS classes, hashed according to the Trilogy context. |
