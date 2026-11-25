---
slug: accordion-body
name: AccordionBody
family: Actions
familyOrder: 1
order: 6
parent: accordion
description: Contains the content revealed by an accordion item.
---

## Examples

### Basic

The body is hidden while its item is closed.

```tsx
<Accordion>
  <AccordionItem defaultOpen>
    <AccordionHeader>Details</AccordionHeader>
    <AccordionBody>Expandable content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type          | Default | Support      | Description                                                  |
| ------------------------------------ | ------------- | ------- | ------------ | ------------------------------------------------------------ |
| `children`                           | `ReactNode`   | —       | Web · Mobile | Expandable content.                                          |
| `id`, `testId`, `className`, `style` | `CommonProps` | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
