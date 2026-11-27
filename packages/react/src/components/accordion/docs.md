---
slug: accordion
name: Accordion
family: Actions
familyOrder: 1
order: 3
description: Organizes independently expandable sections of content.
---

## Examples

### Basic

Compose an item with a header, an optional expand icon and a body.

```tsx
<Accordion>
  <AccordionItem>
    <AccordionHeader
      expandIcon={
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      }
    >
      Details
    </AccordionHeader>
    <AccordionBody>More information about this item.</AccordionBody>
  </AccordionItem>
</Accordion>
```

### Independent items

Items open independently; multiple bodies may remain visible.

```tsx
<Accordion>
  <AccordionItem defaultOpen>
    <AccordionHeader expandIcon={<span>⌄</span>}>First section</AccordionHeader>
    <AccordionBody>First content.</AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader expandIcon={<span>⌄</span>}>
      Second section
    </AccordionHeader>
    <AccordionBody>Second content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type          | Default | Support      | Description                                                  |
| ------------------------------------ | ------------- | ------- | ------------ | ------------------------------------------------------------ |
| `children`                           | `ReactNode`   | —       | Web · Mobile | Accordion items.                                             |
| `id`, `testId`, `className`, `style` | `CommonProps` | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
