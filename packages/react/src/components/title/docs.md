---
slug: title
name: Title
family: Typography
familyOrder: 3
order: 1
description: Establishes heading hierarchy with Trilogy typography tokens.
---

## Examples

### Basic

Use a page-level title to identify the current screen.

```tsx
<Title size="xxl">Settings</Title>
```

### Section heading

Use a section-level heading for the next content group.

```tsx
<Title size="xl">Profile details</Title>
```

### Compact heading with an explicit weight

Use an explicit weight when a compact heading needs stronger emphasis.

```tsx
<Title size="md" fontWeight="bold" color="accent">
  Advanced options
</Title>
```

## API Reference

| Prop                 | Type                                                  | Default        | Support      | Description                                                                       |
| -------------------- | ----------------------------------------------------- | -------------- | ------------ | --------------------------------------------------------------------------------- |
| `size`               | `TitleSize`                                           | `xxxxl`        | Web · Mobile | Typography size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`. |
| `color`              | `TitleColor`                                          | `primary`      | Web · Mobile | Semantic text color.                                                              |
| `fontWeight`         | `TitleFontWeight`                                     | Size-dependent | Web · Mobile | Overrides the size default: `medium` for `xxxl`/`xxxxl`, otherwise `semibold`.    |
| `children`           | `ReactNode`                                           | —              | Web · Mobile | Heading content.                                                                  |
| `accessibilityLabel` | `string`                                              | —              | Web · Mobile | Accessible label announced by assistive technology.                               |
| `id`                 | `string`                                              | —              | Web · Mobile | Element identifier.                                                               |
| `testId`             | `string`                                              | —              | Web · Mobile | Testing identifier.                                                               |
| `style`              | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —              | Web · Mobile | Inline style override, applied after typography styles.                           |
| `markup`             | `TitleMarkup`                                         | `h1`           | Web          | HTML element: `h1`–`h6`, `p`, `span`, or `div`.                                   |
| `className`          | `string`                                              | —              | Web          | Additional CSS classes, hashed according to the Trilogy context.                  |
