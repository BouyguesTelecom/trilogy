---
slug: feedback
name: Feedback
familyOrder: 2
description: Components that communicate system status, results, warnings, and contextual information.
---

## Purpose

Feedback components keep people informed about the result or state of an operation. Use them to surface messages that need attention without interrupting the current flow.

## When to use

- Use **Alert** for persistent, contextual information or a status message within a page or section.
- Use **AlertTitle** and **AlertDescription** to give composed alert content a clear hierarchy.
- Use **AlertContent** to group those semantic message parts vertically.

## Components

### Alert

A status container with information, success, warning, and error variants. It accepts arbitrary children; title and description are optional composition helpers.

### AlertContent

A vertical container for composed alert message content.

### AlertTitle

An optional heading for a composed alert message.

### AlertDescription

Optional supporting text for an alert message.

## Composition guidance

Compose the subcomponents only when they help the message scan clearly. Alert does not require the title/content/description structure and does not render those parts automatically.
