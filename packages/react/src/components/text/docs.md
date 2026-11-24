---
slug: text
name: Text
family: Typography
familyOrder: 3
order: 2
description: Displays body copy with adjustable size, color, and font weight.
---

## Examples

### Basic

Use body text for a clear explanation of the current screen.

```tsx
<Text size="base">A clear explanation for the current screen.</Text>
```

### Size and color

Use a smaller size and secondary color for supporting information.

```tsx
<Text size="sm" color="secondary">
  Supporting information
</Text>
```

### Emphasis

Use a stronger weight and accent color to draw attention to important copy.

```tsx
<Text fontWeight="bold" color="accent">
  Important notice
</Text>
```

### Custom style

Apply a one-off layout adjustment when the surrounding composition needs it.

```tsx
<Text style={{ marginTop: 12 }}>Consumer-specific spacing</Text>
```

## API Reference

| Prop                 | Type                                                  | Default   | Support      | Description                                                                       |
| -------------------- | ----------------------------------------------------- | --------- | ------------ | --------------------------------------------------------------------------------- |
| `size`               | `TextSize`                                            | `xxxxl`   | Web · Mobile | Typography size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`. |
| `color`              | `TextColor`                                           | `primary` | Web · Mobile | Semantic text color.                                                              |
| `fontWeight`         | `TextFontWeight`                                      | `regular` | Web · Mobile | Font weight: `regular`, `medium`, `semibold`, or `bold`.                          |
| `children`           | `ReactNode`                                           | —         | Web · Mobile | Text content.                                                                     |
| `accessibilityLabel` | `string`                                              | —         | Web · Mobile | Accessible label announced by assistive technology.                               |
| `id`                 | `string`                                              | —         | Web · Mobile | Element identifier.                                                               |
| `testId`             | `string`                                              | —         | Web · Mobile | Testing identifier.                                                               |
| `style`              | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —         | Web · Mobile | Inline style override, applied after typography styles.                           |
| `markup`             | `TextMarkup`                                          | `p`       | Web          | HTML element: `h1`–`h6`, `p`, `span`, or `div`.                                   |
| `className`          | `string`                                              | —         | Web          | Additional CSS classes, hashed according to the Trilogy context.                  |
