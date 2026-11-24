---
name: figma-to-react
description: "Sync a verified Figma component with its Trilogy React Web and React Native implementations while preserving functional behavior and adding unit tests. Use to translate Figma into React or update its UI."
argument-hint: "Figma component link, UI props, and compatibility requirements"
---

# Figma to React and React Native

## Preparation and contract

1. Read the repository instructions and inspect comparable components, their types, exports, styles, tokens, stories, and tests. Identify and preserve existing local changes. Use the explicitly supplied Figma file and component; if the task follows `design-figma`, reuse its session and verified result.
2. Use Figma MCP and load the official `figma-design-to-code` guide before detailed design inspection. Retrieve the component context and screenshot, then inspect the necessary details: actual UI properties, values and defaults, variants, semantic variables, modes, and bindings. If the context is insufficient, inspect further; do not fabricate a design reference.
3. Separate UI props actually present in Figma from functional props. Do not remove, reset, or alter existing behavior or functional props such as events, navigation, semantics, accessibility, refs, children, and business logic. Do not blindly pass UI props through to the DOM or React Native.
4. For a new component, reuse functional conventions from comparable components only when needed. Ask for confirmation if a functional decision or change to an existing contract is required. Do not automatically remove an existing UI prop absent from the design; ask how to preserve compatibility unless removal is explicitly authorized.
5. Do not directly edit files marked as generated until their generator and source are identified. If no usable generator exists, report the blocker and ask how to proceed; do not claim a file was generated when it was edited manually.

## Required shared skills

Load and fully apply:

- [Trilogy Component Architecture](../trilogy-component-architecture/SKILL.md) for contracts, structure, composition, and compatibility.
- [Trilogy Component JSDoc](../trilogy-component-jsdoc/SKILL.md) to add or update documentation for every modified public component and subcomponent.
- [Trilogy Styles and Tokens](../trilogy-styles-tokens/SKILL.md) for component styles, Native styles, and semantic variables.
- [Trilogy Component Tests](../trilogy-component-tests/SKILL.md) for tests, stories, and verification of created or modified components.

For every public component or subcomponent created or modified in code, add or update its JSDoc according to the dedicated skill. Verify platform differences and defaults, and ensure declared props have concise IntelliSense comments.

Code Connect is suspended: do not create, modify, publish, or inspect mappings or `.figma.ts` files in this workflow unless the user explicitly reactivates Code Connect in a later request. Tests and UI synchronization remain required.

Summarize modified files, supported UI props, preserved functional behavior, chosen composition, verification, and limitations. Do not present a blocked step as complete.
