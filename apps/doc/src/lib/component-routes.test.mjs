import assert from "node:assert/strict"
import { test } from "node:test"

import {
  getComponentDocInFamily,
  getComponentDocs,
  getFamilyDocs,
} from "./components.ts"

test("every component resolves within its documented family", () => {
  const families = new Map(
    getFamilyDocs().map((family) => [family.name, family.slug])
  )
  for (const component of getComponentDocs()) {
    const familySlug = families.get(component.family)
    assert.ok(familySlug, `Missing family for ${component.name}`)
    assert.equal(
      getComponentDocInFamily(familySlug, component.slug)?.name,
      component.name
    )
  }
})

test("rejects unknown families and components from another family", () => {
  assert.equal(getComponentDocInFamily("unknown", "button"), undefined)
  assert.equal(getComponentDocInFamily("feedback", "button"), undefined)
  assert.equal(getComponentDocInFamily("actions", "unknown"), undefined)
})
