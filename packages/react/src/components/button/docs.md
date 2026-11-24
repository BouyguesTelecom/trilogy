---
slug: button
name: Button
family: Actions
familyOrder: 1
order: 1
description: Triggers an action or navigates to a destination with consistent Trilogy styling.
---

## Examples

### Basic

Use a primary button for the main action.

```tsx
<Button onClick={() => console.log("Saved")}>Save changes</Button>
```

### Variants

Choose one of the built-in visual variants. The default is `primary`.

```tsx
<div className="preview-row">
  <Button variant="primary">Continue</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="ghost">More options</Button>
  <Button variant="conversion">Upgrade</Button>
</div>
```

### Disabled

Disabled buttons do not invoke `onClick`. On Web, non-button links are also removed from keyboard navigation.

```tsx
<Button disabled>Saving is unavailable</Button>
```

### Link

Use `href` for a regular anchor or `to` with `routerLink` for a router component on Web.

```tsx
<Button href="/account">Open account</Button>
```

### Custom style

`style` is a code-only customization escape hatch. It accepts CSS properties on Web and React Native style values on Native; it is not a Figma variant.

```tsx
<Button style={{ opacity: 0.9 }}>Subtle action</Button>
```

## API Reference

| Prop                 | Type                                                  | Default                         | Support      | Description                                                                                  |
| -------------------- | ----------------------------------------------------- | ------------------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `variant`            | `ButtonVariant`                                       | `primary`                       | Web · Mobile | Visual variant: `primary`, `secondary`, `ghost`, or `conversion`.                            |
| `disabled`           | `boolean`                                             | `false`                         | Web · Mobile | Prevents activation and applies disabled styling.                                            |
| `onClick`            | `(event: ClickEvent) => void`                         | —                               | Web · Mobile | Called on activation; receives a mouse event on Web and a gesture responder event on Mobile. |
| `children`           | `ReactNode`                                           | —                               | Web · Mobile | Button label or composed content.                                                            |
| `accessibilityLabel` | `string`                                              | —                               | Web · Mobile | Accessible name announced by assistive technology.                                           |
| `id`                 | `string`                                              | —                               | Web · Mobile | Element identifier.                                                                          |
| `testId`             | `string`                                              | —                               | Web · Mobile | Testing identifier.                                                                          |
| `style`              | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —                               | Web · Mobile | Inline style override, applied after built-in styles.                                        |
| `markup`             | `ButtonMarkup`                                        | `button`                        | Web          | Selects `button`, `input`, `a`, or `div`; destination props can select an anchor.            |
| `loading`            | `boolean`                                             | `false`                         | Web          | Adds a `loading` class; it does not prevent activation and has no built-in package style.    |
| `fullwidth`          | `boolean`                                             | `false`                         | Web          | Adds a `fullwidth` class; no built-in full-width package style is defined.                   |
| `href`               | `string`                                              | —                               | Web          | Anchor destination.                                                                          |
| `to`                 | `string`                                              | —                               | Web          | Router destination.                                                                          |
| `routerLink`         | `ElementType`                                         | —                               | Web          | Router component used with `to`.                                                             |
| `name`               | `string`                                              | —                               | Web          | HTML form-control name.                                                                      |
| `type`               | `ButtonType`                                          | `button` (`submit` for `input`) | Web          | Native HTML button type: `button`, `reset`, or `submit`.                                     |
| `className`          | `string`                                              | —                               | Web          | Additional CSS classes, hashed according to the Trilogy context.                             |
