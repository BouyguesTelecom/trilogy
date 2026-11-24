---
name: design-figma
description: "Create or update a Trilogy Figma component with its UI properties, a dedicated family page, and semantic variables. Use to design or update a component in Figma through Figma MCP."
argument-hint: "Component name, UI properties, and visual requirements"
---

# Figma Component Design

## Goal and boundaries

Create or update the requested component in the actual Figma file using Figma MCP. The deliverable contains only **UI** properties: variants, visual states, and instance properties required by the design. Do not create functional props such as callbacks, navigation, or business logic; do not confuse variables, variant properties, and instance properties. Follow the user's explicit requirements.

## File and tools

1. Use the explicitly supplied key or URL. Otherwise, use `FIGMA_FILE_KEY` from the repository root `.env`, then from the environment if it is absent from the file. Ask for a target if none is available. Read only the required file key; never reveal, log, or pass a token or other secret in messages or tool calls.
2. Use the Figma MCP server configured for the project. Create a session as soon as the key is known, before accessing the file, and reuse it for the entire task. Load the official Figma guides required by available tools, including `figma-use` and `figma-generate-library` when creating or updating a component; follow their prerequisites, discovery, and validation rules. Reuse an existing session when continuing an active workflow.
3. First inspect relevant pages, local components, linked libraries, variables, and styles. Search for an existing component before creating one. If multiple candidates are plausible, ask which to use; do not create a duplicate. Do not edit an external library without authorization.

## Organization and variables

- Use **one dedicated Figma page per component family**, named after its main component. Its variants, states, examples, and related public subcomponents share that page: for example, `AlertContent`, `AlertTitle`, and `AlertDescription` on `Alert`, and `ButtonList` on `Button`. Find and reuse the existing family page; do not group unrelated standalone families on a shared page. Do not move an existing definition without checking its usage and obtaining approval when needed.
- If a component exists on a shared page, do not automatically duplicate or move it. Report the situation and ask before a move that could affect its references or usage. Apply this rule to each component when handling multiple components.
- Bind visual properties directly to **semantic variables** in the design system, never directly to primitive variables: text and background colors, borders and border widths, padding and spacing, sizes, radii, font families and sizes, weights, and any other relevant property supported by Figma. Semantic variables may themselves alias primitives; preserve those aliases.
- First search for local or library semantic variables and inspect their values, modes, and scopes. Respect modes, including Light/Dark, and avoid hardcoded values where a suitable semantic variable exists. Do not change primitives or shared variables to adapt a single component.
- If no suitable semantic variable exists, a property cannot be bound through the Figma API, a font or mode is missing, or equivalence is uncertain, report the property and blocker. Ask before inventing a value, using a primitive directly, or creating/changing a shared token.

## Creation, updates, and validation

1. Analyze the request and identify expected UI properties, values, states, editable content, defaults, and structure. Do not create unjustified variants or properties that were not requested.
2. Create a missing component or make a focused update to an existing local component without recreating it unnecessarily. A modification request authorizes the focused changes required; ask before deletion, full replacement, or an incompatible change that was not explicitly requested.
3. Use relevant design-system components, styles, and semantic variables. For a component family, keep its public subcomponents as reusable components on the family page and, when relevant and supported, include their instances in the main component or a visible assembly example. For example, an `Alert` may show `AlertTitle` and `AlertDescription`; do not represent them as required React content when the parent accepts arbitrary `children`. Preserve editable content, variants, and bindings; report integration limitations. Do not artificially split simple components.
4. Verify the actual Figma result: page, structure, UI properties and values, variants, modes, semantic bindings, and rendering. Report impossible bindings; do not claim an incomplete design is verified. If access or a required tool is unavailable, state the blocker and stop rather than simulating the change.
5. Pass the next workflow step the Figma link and component ID, page, UI properties and defaults, semantic variables, modes, and limitations. Do not modify React code in this skill.
