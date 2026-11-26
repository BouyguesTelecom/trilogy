---
slug: badge-anchor
name: BadgeAnchor
family: Feedback
familyOrder: 2
order: 7
parent: badge
description: Wraps an element and places a Badge on one of its corners.
---

## Examples

### Basic

Place the element and the Badge inside the anchor. The badge sits on the top right corner by default.

```tsx
<BadgeAnchor>
  <Avatar />
  <Badge background="error">5</Badge>
</BadgeAnchor>
```

### Position

Choose the corner with `position`.

```tsx
<BadgeAnchor position="top-left">
  <Avatar />
  <Badge background="error">5</Badge>
</BadgeAnchor>
<BadgeAnchor position="bottom-right">
  <Avatar />
  <Badge background="success" size="small">
    1
  </Badge>
</BadgeAnchor>
```

## API Reference

The anchor hugs the size of the wrapped element. The badge is taken out of the layout and its center sits a quarter of its own size inside the chosen corner.

| Prop        | Type                                                      | Default     | Support      | Description                                  |
| ----------- | --------------------------------------------------------- | ----------- | ------------ | -------------------------------------------- |
| `position`  | `top-left` / `top-right` / `bottom-left` / `bottom-right` | `top-right` | Web · Mobile | Corner of the wrapped element for the Badge. |
| `children`  | `ReactNode`                                               | —           | Web · Mobile | The wrapped element, followed by the Badge.  |
| `style`     | `CSSProperties` / `StyleProp<ViewStyle>`                  | —           | Web · Mobile | Style override.                              |
| `className` | `string`                                                  | —           | Web          | Additional CSS classes.                      |
