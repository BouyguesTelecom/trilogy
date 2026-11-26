---
slug: sticker
name: Sticker
family: Feedback
familyOrder: 2
order: 5
description: Displays a short piece of information in a fixed-size pill that never wraps.
---

## Examples

### Basic

A sticker holds a short piece of information. It keeps a fixed height and never wraps.

```tsx
<Sticker>Information</Sticker>
```

### Size

The `default` size is 32px high and the `small` size is 24px high. The height is fixed to avoid surprises.

```tsx
<Sticker>Default</Sticker>
<Sticker size="small">Small</Sticker>
```

### Background

Change the color with a semantic background. The text color is picked automatically: the default text color on a light background, white otherwise.

```tsx
<Sticker background="accent">Code Promo</Sticker>
<Sticker background="warning">Attention</Sticker>
<Sticker background="brand">New</Sticker>
```

### Icon

Children can contain an icon next to the text.

```tsx
<Sticker background="success">
  <IconCheck />
  Confirmed
</Sticker>
```

### Text color from a background

`getTextColorFromBackground` returns the readable text color for any color value: the default text color (`primary`) when the color is close to white, `inverse` (white) otherwise.

```tsx
getTextColorFromBackground("#f6bb33") // "inverse"
getTextColorFromBackground("#ccf2f8") // "primary"
getTextColorFromBackground("#062b3f") // "inverse"
```

## API Reference

The content is meant for short information: it never wraps and the height never changes. The text color is computed from the background: the default text color on a light background, white otherwise. On Web it is computed from the light theme colors; on Mobile it follows the active theme mode.

| Prop         | Type                                     | Default     | Support      | Description                                   |
| ------------ | ---------------------------------------- | ----------- | ------------ | --------------------------------------------- |
| `size`       | `default` / `small`                      | `default`   | Web · Mobile | Fixed size: 32px or 24px high.                |
| `background` | `BackgroundColors`                       | `secondary` | Web · Mobile | Semantic background color.                    |
| `children`   | `ReactNode`                              | —           | Web · Mobile | Short content: text, optionally with an icon. |
| `style`      | `CSSProperties` / `StyleProp<ViewStyle>` | —           | Web · Mobile | Style override.                               |
| `className`  | `string`                                 | —           | Web          | Additional CSS classes.                       |

### getTextColorFromBackground

| Argument     | Type     | Description                                                                                         |
| ------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `background` | `string` | Hex (`#rgb`, `#rrggbb`, with alpha), `rgb()`/`rgba()` or `transparent` color. Returns `TextColors`. |
