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

Pass the label as children and the optional decorative icon through `expandIcon`.

```tsx
<Accordion>
  <AccordionItem>
    <AccordionHeader expandIcon={<span>⌄</span>}>Details</AccordionHeader>
    <AccordionBody>Details content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type          | Default | Support      | Description                                                  |
| ------------------------------------ | ------------- | ------- | ------------ | ------------------------------------------------------------ |
| `children`                           | `ReactNode`   | —       | Web · Mobile | Toggle label and header content.                             |
| `expandIcon`                         | `ReactNode`   | —       | Web · Mobile | Optional decorative icon, rotated when the item opens.       |
| `accessibilityLabel`                 | `string`      | —       | Web · Mobile | Accessible toggle name.                                      |
| `id`, `testId`, `className`, `style` | `CommonProps` | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
