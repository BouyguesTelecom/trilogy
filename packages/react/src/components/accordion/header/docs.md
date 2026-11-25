---
slug: accordion-header
name: AccordionHeader
family: Actions
familyOrder: 1
order: 5
parent: accordion
description: Provides an accessible toggle for an accordion item.
---

## Examples

### Basic

Place the label and an optional indicator inside the header.

```tsx
<Accordion>
  <AccordionItem>
    <AccordionHeader>
      Details <AccordionIndicator>⌄</AccordionIndicator>
    </AccordionHeader>
    <AccordionBody>Details content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type          | Default | Support      | Description                                                  |
| ------------------------------------ | ------------- | ------- | ------------ | ------------------------------------------------------------ |
| `children`                           | `ReactNode`   | —       | Web · Mobile | Toggle label and optional indicator.                         |
| `accessibilityLabel`                 | `string`      | —       | Web · Mobile | Accessible toggle name.                                      |
| `id`, `testId`, `className`, `style` | `CommonProps` | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
