---
name: trilogy-code-connect
description: "Trilogy Code Connect workflow retained for later use; use only after the user explicitly reactivates it."
disable-model-invocation: true
---

# Trilogy Code Connect

**Currently suspended.** Do not run Code Connect operations or modify related files or mappings unless a later request explicitly reactivates Code Connect. The instructions below are retained for possible future use.

## Goal

For every synchronized Figma and React component, create or update its Code Connect `<name>.figma.ts` file in the component folder so Figma can show a faithful React example. Creating the file alone does not make the code visible: validate and publish the mapping when prerequisites are met. Report preparation, validation, and publication as distinct stages.

## Procedure

1. Load and follow the official Figma `figma-code-connect` guide before any mapping operation. Reuse the current Figma session and identify the actually verified file, main component or component set, and its `node-id`; never guess an ID. Verify permissions, plan, and component publication in a Figma library according to the guide prerequisites. If a prerequisite is missing, report the blocker and do not claim the example is visible.
2. Inspect existing mappings, actual Figma component properties, and the React component, its types, exports, and usage. Reuse or update the relevant mapping rather than creating a duplicate; preserve unrelated mappings. Do not change functional behavior. For a compound component, inspect published subcomponents and relevant slots, and create separate mappings when there is a verified and useful correspondence.
3. Create one parserless `.figma.ts` file per component—not `.figma.tsx` and not `figma.connect()`. Use `import figma from "figma"`, `figma.selectedInstance`, and a default export with a unique `id` and an `example` property created with a `figma.code` tagged template literal. Add the Figma URL with `node-id` in the header according to repository conventions. Imports emitted in the example must match actual public package exports; do not invent paths or props.
4. Map Figma properties to the React API only when a real correspondence exists: use the appropriate Code Connect methods for text, booleans, variants, children, and slots. Account for defaults and the distinction between UI variants and helper overrides. Do not invent functional properties absent from Figma; report Figma properties that cannot be represented. Cover every corresponding enum value and report values without an equivalent. For compositions, resolve instances and slots dynamically as specified by the guide instead of writing fictional children.
5. Verify `figma.config.json` includes every generated file without removing existing mappings or unnecessarily broadening scope. Validate syntax, imports, property names and values, the produced example, and absence of duplicates. Use validation or preview commands and options available in the installed Code Connect version. Do not treat a TypeScript check that excludes `.figma.ts` files as their validation.
6. Publish the mapping using the official mechanism appropriate to the installed format and version, then verify the connection or example in Figma. Publish only requested files or nodes and avoid rewriting or deleting other mappings. Use IDs/tokens from the environment safely; never display them or write them into files or visible arguments. If access, publication, or verification is impossible, retain the prepared file and report exactly which step remains.
