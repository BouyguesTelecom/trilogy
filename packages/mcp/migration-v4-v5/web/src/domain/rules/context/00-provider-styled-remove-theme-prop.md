---
id: "provider-styled-remove-theme-prop"
phase: "2"
risk: "medium"
description: "Remove theme prop from TrilogyProviderStyled - styling now loaded via link tag"
pattern: "<TrilogyProviderStyled\\s+theme=['\"](?:default|mangled|none)['\"]"
flags: "g"
replacement: "<TrilogyProviderStyled"
---

## Migration: Remove theme prop from TrilogyProviderStyled

The `theme` prop is being deprecated. Styling is now loaded via a `<link>` tag in the document head instead.

### What changed
- Removed: `theme` prop from `TrilogyProviderStyled`
- Added: `<link rel="stylesheet" href="...">` in HTML head

### Before
```jsx
<TrilogyProviderStyled theme="default">
  <App />
</TrilogyProviderStyled>
```

### After
```jsx
<TrilogyProviderStyled>
  <App />
</TrilogyProviderStyled>
```

And in your HTML head or framework equivalent:
```html
<link rel="stylesheet" href="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-styles@5.0.0/default/trilogy.css">
```
