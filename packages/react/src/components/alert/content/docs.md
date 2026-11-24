---
slug: alert-content
name: AlertContent
family: Feedback
familyOrder: 2
order: 2
parent: alert
description: Groups alert message sections into a vertical content area.
---

## Examples

### Basic

Group a title and supporting message inside an alert.

```tsx
<AlertContent>
  <AlertTitle>Payment received</AlertTitle>
  <AlertDescription>Your receipt is ready to download.</AlertDescription>
</AlertContent>
```

### Compose alert content

Compose a title and description inside a success alert.

```tsx
<Alert status="success">
  <AlertContent>
    <AlertTitle>Payment received</AlertTitle>
    <AlertDescription>Your receipt is ready to download.</AlertDescription>
  </AlertContent>
</Alert>
```

## API Reference

| Prop        | Type                                                  | Default | Support      | Description                                                      |
| ----------- | ----------------------------------------------------- | ------- | ------------ | ---------------------------------------------------------------- |
| `children`  | `ReactNode`                                           | —       | Web · Mobile | Content grouped inside the alert.                                |
| `testId`    | `string`                                              | —       | Web · Mobile | Testing identifier.                                              |
| `style`     | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —       | Web · Mobile | Inline style override, applied after built-in styles.            |
| `id`        | `string`                                              | —       | Web          | Element identifier.                                              |
| `className` | `string`                                              | —       | Web          | Additional CSS classes, hashed according to the Trilogy context. |
