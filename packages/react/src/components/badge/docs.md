---
slug: badge
name: Badge
family: Feedback
familyOrder: 2
order: 6
description: Displays a short count, word or icon in a fixed-size pill, usually on the corner of another element.
---

## Examples

### Basic

A badge holds a very short piece of information. It keeps a fixed height and never wraps: a single character or an icon gives a circle, longer content a pill.

```tsx
<Badge>5</Badge>
<Badge>New</Badge>
<Badge>99+</Badge>
```

### Size

The `default` size is 24px high and the `small` size is 16px high. The height is fixed to avoid surprises.

```tsx
<Badge>5</Badge>
<Badge size="small">5</Badge>
```

### Background

Change the color with a semantic background. The text color is picked automatically: the default text color on a light background, white otherwise.

```tsx
<Badge background="error">5</Badge>
<Badge background="accent">New</Badge>
<Badge background="brand">3</Badge>
```

### On another element

Wrap the element and the badge in a [BadgeAnchor](/components/badge-anchor) to place the badge on one of its corners.

```tsx
<BadgeAnchor position="top-right">
  <Avatar />
  <Badge background="error">5</Badge>
</BadgeAnchor>
```

## API Reference

The content is meant for short information: it never wraps and the height never changes. On Web, the text color is computed from the light theme colors; on Mobile it follows the active theme mode.

| Prop         | Type                                     | Default     | Support      | Description                                |
| ------------ | ---------------------------------------- | ----------- | ------------ | ------------------------------------------ |
| `size`       | `default` / `small`                      | `default`   | Web · Mobile | Fixed size: 24px or 16px high.             |
| `background` | `BackgroundColors`                       | `secondary` | Web · Mobile | Semantic background color.                 |
| `children`   | `ReactNode`                              | —           | Web · Mobile | Short content: a count, a word or an icon. |
| `style`      | `CSSProperties` / `StyleProp<ViewStyle>` | —           | Web · Mobile | Style override.                            |
| `className`  | `string`                                 | —           | Web          | Additional CSS classes.                    |
