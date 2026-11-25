---
slug: accordion-indicator
name: AccordionIndicator
family: Actions
familyOrder: 1
order: 7
parent: accordion
description: Positions and rotates a caller-provided decorative icon.
---

## Examples

### Basic

Provide an icon as a child; the indicator rotates when its item opens.

```tsx
<Accordion>
  <AccordionItem>
    <AccordionHeader>
      Details{" "}
      <AccordionIndicator>
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
      </AccordionIndicator>
    </AccordionHeader>
    <AccordionBody>Details content.</AccordionBody>
  </AccordionItem>
</Accordion>
```

## API Reference

| Prop                                 | Type          | Default | Support      | Description                                                  |
| ------------------------------------ | ------------- | ------- | ------------ | ------------------------------------------------------------ |
| `children`                           | `ReactNode`   | —       | Web · Mobile | Decorative icon supplied by the caller.                      |
| `id`, `testId`, `className`, `style` | `CommonProps` | —       | Web · Mobile | Identifiers and style overrides; `className` applies on Web. |
