---
slug: accordion-item
name: AccordionItem
family: Actions
familyOrder: 1
order: 4
parent: accordion
description: Manages one independently expandable accordion section.
---

## Examples

### Basic

Use `defaultOpen` to expand an uncontrolled item initially.

On Web, each item renders a native `details` element and its header renders a
`summary` element. The open state remains independently controlled per item.

```tsx
<Accordion>
  <AccordionItem defaultOpen>
    <AccordionHeader expandIcon={<span>⌄</span>}>Details</AccordionHeader>
    <AccordionBody>Expanded content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

### Disabled

Disabled items do not change state when activated.

```tsx
<Accordion>
  <AccordionItem disabled>
    <AccordionHeader expandIcon={<span>⌄</span>}>Unavailable</AccordionHeader>
    <AccordionBody>Content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type                      | Default | Support      | Description                                                  |
| ------------------------------------ | ------------------------- | ------- | ------------ | ------------------------------------------------------------ |
| `open`                               | `boolean`                 | —       | Web · Mobile | Controlled open state.                                       |
| `defaultOpen`                        | `boolean`                 | `false` | Web · Mobile | Initial uncontrolled state.                                  |
| `onOpenChange`                       | `(open: boolean) => void` | —       | Web · Mobile | Reports a requested state change.                            |
| `disabled`                           | `boolean`                 | `false` | Web · Mobile | Prevents activation.                                         |
| `children`                           | `ReactNode`               | —       | Web · Mobile | Header and body.                                             |
| `id`, `testId`, `className`, `style` | `CommonProps`             | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
