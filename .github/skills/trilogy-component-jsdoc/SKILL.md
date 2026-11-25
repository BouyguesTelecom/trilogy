---
name: trilogy-component-jsdoc
description: "Create, update, and verify JSDoc for public Trilogy components with a stable shared, Web, and native prop order."
argument-hint: "Name of the Trilogy component to document"
---

# Trilogy Component JSDoc

## When to apply

Apply this skill to every public component or subcomponent whose code is created or modified. In a React-to-Figma workflow, also inspect and update JSDoc for requested public components and subcomponents. This skill governs documentation only; implementation changes are governed by the selected workflow and the user's request.

## Required placement and order

1. Put the main JSDoc block immediately above each public component export in its implementation file. State the component's purpose in one short sentence, then document parameters in this order: shared props, Web-only props, Native-only props.
2. Use individual `@param` tags with the prop name, type, and concise description. Inherited props may be referenced collectively by their source interface (for example, `CommonProps`) when repeating each inherited property would add no useful detail.
3. Separate platform-specific sections with clear divider lines. Omit a platform section only when that platform has no unique props; if both platforms share the same API, state that explicitly.
4. In the `*.types.ts` file, add a brief JSDoc comment to every directly declared prop so its effect appears in IntelliSense. Do not create artificial Web/Native interfaces or reorganize exports and types solely for documentation.
5. If a shared prop behaves differently by platform, preserve the contract and document both behaviors and defaults accurately.

## Component JSDoc template

Use the following structure. Replace every placeholder with verified details, use the actual TypeScript types and prop names, and remove sections that do not apply:

```ts
/**
 * Badge Component
 * @param children {ReactNode} Content inside the badge (for example, an icon)
 * @param label {string | number} Text shown in the badge
 * @param status {StatusState} Status variant: `INFO`, `SUCCESS`, `WARNING`, or `ERROR`
 * @param testId {string} Test identifier
 * @param id {string} Custom element identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 */
```

List props under **shared** first. Then include the Web divider and Web-only props, followed by the Native divider and Native-only props. Use `None.` when a required category has no props. Do not repeat common props in platform sections. Include defaults when they are defined by the implementation, and clearly say when the default differs by platform.

For directly declared properties in `*.types.ts`, use concise property-level comments such as:

```ts
/** Selects the status variant. Values: `INFO`, `SUCCESS`. Default: `INFO`. */
```

Document only behavior that is actually implemented. Events, refs, accessibility attributes, `children`, and inherited props are shared props, not visual props. Distinguish visual and functional props without inventing a contract.

## Quality and verification

- Write all JSDoc in English. Keep it clear, precise, and brief: one short sentence per prop.
- Base each description on the actual Web and Native types and implementations; verify values, defaults, and platform differences before documenting them.
- Update or remove stale descriptions when a contract changes; never leave outdated comments.
- Verify that each requested public component and subcomponent has its main block and that all directly declared props are documented.
- Do not change logic, types, behavior, styles, or tests just to simplify documentation. Report ambiguity instead of inventing documentation.
