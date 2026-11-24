import assert from "node:assert/strict"
import { afterEach, beforeEach, test } from "node:test"

import { getComponentGuidance } from "./component-guidance.ts"

const originalFetch = globalThis.fetch
const originalHost = process.env.DIRECTUS_SERVER_HOST

beforeEach(() => {
  process.env.DIRECTUS_SERVER_HOST = "https://directus.example/"
})

afterEach(() => {
  globalThis.fetch = originalFetch
  if (originalHost === undefined) delete process.env.DIRECTUS_SERVER_HOST
  else process.env.DIRECTUS_SERVER_HOST = originalHost
})

test("loads the exact component and its textual rules", async () => {
  process.env.DIRECTUS_SERVER_HOST = "https://directus.example/"
  globalThis.fetch = async (url) => {
    assert.equal(url.searchParams.get("filter[name][_eq]"), "Button")
    assert.equal(
      url.searchParams.get("fields"),
      "name,usage,rules.rules_id.title,rules.rules_id.description"
    )
    return Response.json({
      data: [
        {
          name: "Button",
          usage: "  Guidance  ",
          rules: [
            {
              rules_id: {
                title: "Rule",
                description: " Description ",
              },
            },
            { rules_id: null },
          ],
        },
      ],
    })
  }
  assert.deepEqual(await getComponentGuidance("Button"), {
    usage: "Guidance",
    rules: [
      {
        title: "Rule",
        description: "Description",
      },
    ],
  })
})

test("does not reuse guidance for a different component", async () => {
  globalThis.fetch = async () =>
    Response.json({ data: [{ name: "Button", usage: "Wrong component" }] })
  assert.equal(await getComponentGuidance("ButtonList"), null)
})

test("keeps the page available when Directus fails", async () => {
  globalThis.fetch = async () => new Response(null, { status: 503 })
  const originalWarn = console.warn
  console.warn = () => {}
  try {
    assert.equal(await getComponentGuidance("Button"), null)
  } finally {
    console.warn = originalWarn
  }
})

test("does not fetch when the Directus host is not configured", async () => {
  delete process.env.DIRECTUS_SERVER_HOST
  globalThis.fetch = () => {
    throw new Error("fetch should not be called")
  }
  const originalWarn = console.warn
  console.warn = () => {}
  try {
    assert.equal(await getComponentGuidance("Button"), null)
  } finally {
    console.warn = originalWarn
  }
})
