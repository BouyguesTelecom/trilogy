---
slug: actions
name: Actions
familyOrder: 1
description: Components that trigger actions, submit forms, and group related controls.
---

## Purpose

The Actions family provides clear, reusable controls for user intent. Use it for actions that change application state, submit a form, or navigate to another destination.

## When to use

- Use **Button** for a single action or link with a consistent Trilogy appearance.
- Use **ButtonList** to arrange related actions and establish their alignment, direction, and wrapping.

## Components

### Button

A button or link for a single action. It supports the established visual variants and disabled behavior.

### ButtonList

A flex container for composing action controls. It does not impose a required child component; compose Buttons or other suitable controls.

## Composition guidance

Place the primary action prominently and keep related secondary actions close to it. Use ButtonList for layout; keep action handling in each child component.
