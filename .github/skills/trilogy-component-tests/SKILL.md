---
name: trilogy-component-tests
description: "Create, maintain, and run Web and Native unit tests, stories, and verification for Trilogy components in both Figma/React synchronization directions."
---

# Trilogy Component Tests and Validation

- For every component or subcomponent created or modified in code, add or update its Web and Native unit tests in its own folder, alongside the implementation: `<name>.web.test.tsx` and `<name>.native.test.tsx`. Use the existing infrastructure: Vitest and Testing Library for Web, Jest with Expo and React Native Testing Library for Native. Do not replace the test infrastructure without a reason.
- Cover as many relevant cases as possible: children and order, UI values and variants with parameterized tests, defaults and boundaries, component-specific Web classes and styles, Native styles and Light/Dark themes, accessibility, refs, events and disabled states, composition, and functional-prop regression. Test observable behavior; do not mock the component under test or its primary behavior. Computed styles require an environment that actually loads the styles.
- On Web, verify that rendered classes match component SCSS selectors in both normal and hashed modes. For composition with a child that hashes its own `className`, verify passed classes are hashed exactly once and that variants and custom classes remain present.
- For every variant, verify its complete default styles and that no helper classes are added when override props are absent; then test each helper alone and in combination. Each override must actually take precedence for the intended property without affecting other variant styles. Verify the same precedence on React Native. Use compiled styles and an environment that actually loads them for cascade and computed-style checks.
- Add or update stories, including a complete composition story for a compound component. Run `pnpm test`, `pnpm --filter @trilogy-ds/react typecheck:tests`, and `pnpm test:coverage` when relevant. Cover meaningful branches without artificial assertions; report commands, failures, and cases that could not be verified. Verify component style cascade and preserve helpers used by consumers.
- For code-to-Figma synchronization **without code changes**, inspect existing stories and tests as sources of information and run relevant verification when possible; do not create or modify tests, stories, or behavior without explicit request or authorization. Report gaps and observed differences.
