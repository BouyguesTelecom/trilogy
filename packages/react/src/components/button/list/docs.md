---
slug: button-list
name: ButtonList
family: Actions
familyOrder: 1
order: 2
parent: button
description: Arranges related actions in a configurable flex layout.
---

## Examples

### Basic

Group related secondary and primary actions in a horizontal row.

```tsx
<ButtonList direction="row" justifyContent="flex-end">
  <Button variant="secondary">Cancel</Button>
  <Button>Save</Button>
</ButtonList>
```

### Horizontal actions

Group secondary and primary actions together and let them wrap when needed.

```tsx
<ButtonList
  direction="row"
  alignItems="center"
  justifyContent="flex-end"
  wrap="wrap"
>
  <Button variant="secondary">Cancel</Button>
  <Button>Save</Button>
</ButtonList>
```

### Native style customization

The shared `style` prop accepts a React Native `StyleProp<ViewStyle>` on Native and inline CSS properties on Web.

```tsx
<ButtonList style={{ gap: 12, marginTop: 16 }}>
  <Button>Continue</Button>
  <Button variant="secondary">Back</Button>
</ButtonList>
```

## API Reference

| Prop                 | Type                                                  | Default                                 | Support      | Description                                                                                     |
| -------------------- | ----------------------------------------------------- | --------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------- |
| `alignItems`         | `ButtonListAlignItems`                                | `center` on Web; `stretch` on Mobile    | Web · Mobile | Cross-axis alignment: `center`, `flex-start`, `flex-end`, or `stretch`.                         |
| `justifyContent`     | `ButtonListJustifyContent`                            | `center` on Web; `flex-start` on Mobile | Web · Mobile | Main-axis distribution: `center`, `flex-start`, `flex-end`, `space-between`, or `space-around`. |
| `direction`          | `ButtonListDirection`                                 | `column` on both                        | Web · Mobile | Layout direction: `column` or `row`.                                                            |
| `wrap`               | `"wrap" \| "nowrap"`                                  | `nowrap` on Web; unset on Mobile        | Web · Mobile | Controls whether children wrap.                                                                 |
| `children`           | `ReactNode`                                           | —                                       | Web · Mobile | Actions or other content to arrange.                                                            |
| `id`                 | `string`                                              | —                                       | Web · Mobile | Container identifier.                                                                           |
| `testId`             | `string`                                              | —                                       | Web · Mobile | Testing identifier.                                                                             |
| `accessibilityLabel` | `string`                                              | —                                       | Web · Mobile | Declared by the shared props type but currently not forwarded by either implementation.         |
| `style`              | `CSSProperties` / `StyleProp<ViewStyle \| TextStyle>` | —                                       | Web · Mobile | Inline style override, applied after built-in layout styles.                                    |
| `className`          | `string`                                              | —                                       | Web          | Additional CSS classes, hashed according to the Trilogy context.                                |

## Notes

The Web implementation defaults `alignItems` and `justifyContent` to `center`. Native leaves unset layout values to React Native's flexbox defaults.
