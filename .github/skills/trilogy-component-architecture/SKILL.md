---
name: trilogy-component-architecture
description: "Analyze or apply Trilogy component architecture, atomic composition, and separation of UI and functional props for Figma-to-React and React-to-Figma workflows."
---

# Trilogy Component Architecture and Composition

## Analysis and compatibility

1. Read the repository instructions, then inspect the component, subcomponents, types, exports, stories, tests, Web and Native implementations, and comparable components. Preserve existing local changes. For an existing component, determine its actual contract, defaults, and platform differences; do not infer behavior from names alone.
2. Distinguish UI props and their visual values/states from functional props such as events, navigation, business logic, semantics, accessibility, refs, and children. Do not remove, reset, or change existing behavior or functional props; do not blindly pass UI props through to the DOM or React Native.
3. If design and code conflict, use the source of truth appropriate to the requested direction: verified Figma for Figma-to-React, existing code for React-to-Figma. Report differences and ask before incompatible, functional, or otherwise unrequested changes. Do not automatically remove an existing UI prop absent from the design without explicit authorization.
4. Do not directly edit files marked as generated until their generator and source are identified. If no usable generator exists, report the blocker and ask how to proceed.

## Structure and composition

- Follow the organization used in `packages/react/src/components`: one folder per component, a consistent public `index.ts` barrel, `<name>.types.ts`, separate `*UiProps` and `*Props`, `<name>.web.tsx` and `<name>.native.tsx` implementations, `<name>.styles.native.ts` using `makeStyle` for theme-dependent styles, and `<name>.stories.tsx`. Follow actual repository conventions and omit platform suffixes in barrel imports; do not add empty files.
- Load and follow [Trilogy Component JSDoc](../trilogy-component-jsdoc/SKILL.md) for every public component created or modified. It defines the shared template, required prop order (shared, Web, Native), and prop documentation rules.
- Prefer atomic composition when a component has distinct semantic regions that are reusable or whose content and order should be customizable. As with `Alert`, a container may accept `children` and expose `AlertContent`, `AlertTitle`, and `AlertDescription`. A `Box` with a header and footer may warrant `BoxHeader` and `BoxFooter` children.
- Do not artificially split simple standalone components such as `Title`, `Text`, or `Button`. Add only parts justified by the request; honor the explicit API and existing contracts. Use appropriate folders, exports, refs, and accessibility rules for public subcomponents without inventing functional behavior. For a new component, reuse functional conventions from comparable components only when needed.
- When using an existing component as a model, adapt names to the new component: types, interfaces, enums, variables, classes, files, exports, and Figma references. For `Text` modeled after `Title`, prefer `TextUiProps` and `TextLevel` over `TitleUiProps` and `TitleLevel`. Preserve prop names and values when they are requested unchanged, reuse generic types, and do not rename symbols in the source component.
