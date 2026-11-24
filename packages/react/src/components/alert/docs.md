---
slug: alert
name: Alert
family: Feedback
familyOrder: 2
order: 1
description: Communicates contextual information, success, warnings, or errors.
---

## Examples

### Basic

Show a concise success message in context.

```tsx
<Alert status="success">Your changes were saved.</Alert>
```

### Status variants

Use the status that best communicates the message’s meaning.

```tsx
<div className="preview-stack">
  <Alert status="information">
    <AlertContent>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>A new version is available.</AlertDescription>
    </AlertContent>
  </Alert>
  <Alert status="success">
    <AlertContent>
      <AlertTitle>success</AlertTitle>
      <AlertDescription>Your changes were saved.</AlertDescription>
    </AlertContent>
  </Alert>
  <Alert status="warning">
    <AlertContent>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Review this information.</AlertDescription>
    </AlertContent>
  </Alert>
  <Alert status="error">
    <AlertContent>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>Something went wrong.</AlertDescription>
    </AlertContent>
  </Alert>
</div>
```

### Composed message

Add a title and description when the message needs a clear content hierarchy.

```tsx
<Alert status="information">
  <AlertContent>
    <AlertTitle>Scheduled maintenance</AlertTitle>
    <AlertDescription>
      Service may be unavailable from 02:00 to 03:00.
    </AlertDescription>
  </AlertContent>
</Alert>
```

### Icon above content

Place a decorative Lucide success icon above the grouped title and description.

```tsx
<Alert status="success">
  <CheckCircle2 aria-hidden="true" size={20} />
  <AlertContent>
    <AlertTitle>Profile updated</AlertTitle>
    <AlertDescription>Your changes are now saved.</AlertDescription>
  </AlertContent>
</Alert>
```

## API Reference

| Prop        | Type                                                  | Default                               | Support      | Description                                                                   |
| ----------- | ----------------------------------------------------- | ------------------------------------- | ------------ | ----------------------------------------------------------------------------- |
| `status`    | `AlertStatus`                                         | unset on Web; `information` on Mobile | Web · Mobile | Visual status: `information`, `warning`, `success`, or `error`.               |
| `children`  | `ReactNode`                                           | —                                     | Web · Mobile | Arbitrary alert content. Plain text on Native receives the status text style. |
| `id`        | `string`                                              | —                                     | Web · Mobile | Element identifier.                                                           |
| `testId`    | `string`                                              | —                                     | Web · Mobile | Testing identifier.                                                           |
| `style`     | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —                                     | Web · Mobile | Inline style override, applied after built-in styles.                         |
| `markup`    | `AlertMarkup`                                         | `div`                                 | Web          | Selects `p`, `h2`, `h3`, `h4`, `h5`, or `h6`.                                 |
| `className` | `string`                                              | —                                     | Web          | Additional CSS classes, hashed according to the Trilogy context.              |
