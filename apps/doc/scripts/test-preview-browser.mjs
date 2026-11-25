import assert from "node:assert/strict"
import { spawn } from "node:child_process"
import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test } from "node:test"

const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const baseUrl = process.env.DOCS_URL || "http://localhost:3001"

async function startBrowser() {
  const profile = await mkdtemp(join(tmpdir(), "trilogy-doc-preview-"))
  const browser = spawn(chrome, [
    "--headless=new",
    "--no-first-run",
    "--disable-gpu",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ])
  try {
    const endpoint = await new Promise((resolve, reject) => {
      let output = ""
      const timer = setTimeout(
        () => reject(new Error("Chrome did not start")),
        10000
      )
      browser.once("error", reject)
      browser.once("exit", (code) =>
        reject(new Error(`Chrome exited: ${code}`))
      )
      browser.stderr.on("data", (chunk) => {
        output += chunk.toString()
        const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/)
        if (match) {
          clearTimeout(timer)
          resolve(match[1])
        }
      })
    })
    const address = new URL(endpoint)
    const response = await fetch(
      `http://${address.host}/json/new?about:blank`,
      {
        method: "PUT",
      }
    )
    if (!response.ok)
      throw new Error(`Could not create browser page: ${response.status}`)
    const target = await response.json()
    const socket = new WebSocket(target.webSocketDebuggerUrl)
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true })
      socket.addEventListener("error", reject, { once: true })
    })
    let nextId = 0
    const pending = new Map()
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data)
      const request = pending.get(message.id)
      if (!request) return
      pending.delete(message.id)
      if (message.error) request.reject(new Error(message.error.message))
      else request.resolve(message.result)
    })
    const send = (method, params = {}) =>
      new Promise((resolve, reject) => {
        const id = ++nextId
        pending.set(id, { resolve, reject })
        socket.send(JSON.stringify({ id, method, params }))
      })
    return {
      send,
      async close() {
        socket.close()
        browser.kill()
        await new Promise((resolve) => browser.once("exit", resolve))
        await rm(profile, { recursive: true, force: true })
      },
    }
  } catch (error) {
    browser.kill()
    await rm(profile, { recursive: true, force: true })
    throw error
  }
}

async function inspectPage(browser, path, selector) {
  await browser.send("Page.navigate", { url: `${baseUrl}${path}` })
  const result = await browser.send("Runtime.evaluate", {
    expression: `new Promise((resolve, reject) => {
      const timer = setTimeout(() => { observer.disconnect(); reject(new Error('Preview did not render')); }, 15000);
      const observer = new MutationObserver(check);
      async function check() {
        if (location.pathname !== ${JSON.stringify(path)}) return;
        const canvas = document.querySelector('.primary-example .live-example-canvas');
        const component = canvas?.querySelector(${JSON.stringify(selector)});
        if (!component) return;
        clearTimeout(timer); observer.disconnect();
        const fixture = document.createElement('div');
        fixture.style.width = canvas.getBoundingClientRect().width + 'px';
        fixture.style.fontSize = '16px';
        fixture.style.lineHeight = '1.5';
        document.body.append(fixture);
        const copy = component.cloneNode(true);
        fixture.append(copy);
        const props = ['display', 'width', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'color', 'backgroundColor', 'boxSizing'];
        const computed = (node) => Object.fromEntries(props.map((prop) => [prop, getComputedStyle(node)[prop]]));
        const probe = document.createElement('div');
        probe.innerHTML = '<div class="code-block"><pre><code>sample</code></pre></div><p>paragraph</p><table><tbody><tr><td>cell</td></tr></tbody></table>';
        canvas.append(probe);
        const probeCopy = probe.cloneNode(true);
        fixture.append(probeCopy);
        const probeStyles = Array.from(probe.querySelectorAll('pre, code, p, td'), computed);
        const referenceProbeStyles = Array.from(probeCopy.querySelectorAll('pre, code, p, td'), computed);
        const preview = canvas.closest('.live-example-preview');
        const oversized = document.createElement('div');
        oversized.style.width = (preview.clientWidth + 2000) + 'px';
        oversized.style.maxWidth = 'none';
        canvas.append(oversized);
        const scrollable = canvas.scrollWidth > canvas.clientWidth && getComputedStyle(canvas).overflowX === 'auto';
        oversized.remove();
        const result = { canvasDisplay: getComputedStyle(canvas).display, actual: computed(component), reference: computed(copy), probeStyles, referenceProbeStyles, scrollable };
        fixture.remove(); probe.remove();
        const toggle = component.querySelector('summary');
        if (toggle) {
          const before = toggle.getAttribute('aria-expanded');
          const topBefore = toggle.getBoundingClientRect().top - preview.getBoundingClientRect().top;
          const itemRect = toggle.parentElement.getBoundingClientRect();
          const headerRect = toggle.getBoundingClientRect();
          const edgeTarget = document.elementFromPoint(itemRect.left + 3, itemRect.top + itemRect.height / 2);
          result.edgeTargetsHeader = !!edgeTarget && (edgeTarget === toggle || toggle.contains(edgeTarget));
          result.headerBounds = { left: headerRect.left - itemRect.left, right: itemRect.right - headerRect.right, top: headerRect.top - itemRect.top };
          edgeTarget?.click();
          await new Promise(requestAnimationFrame);
          result.accordionToggled = before === 'false' && toggle.getAttribute('aria-expanded') === 'true';
          const topOpen = toggle.getBoundingClientRect().top - preview.getBoundingClientRect().top;
          const extra = document.createElement('div');
          extra.style.height = '400px';
          component.querySelector('.accordionBody').append(extra);
          const topExpanded = toggle.getBoundingClientRect().top - preview.getBoundingClientRect().top;
          result.accordionTopPositions = [topBefore, topOpen, topExpanded];
          extra.remove();
        }
        const card = preview.closest('.code-block');
        const html = Array.from(card.querySelectorAll('[role=tab]')).find((tab) => tab.textContent.trim() === 'HTML');
        html.click();
        await new Promise(requestAnimationFrame);
        result.htmlSelected = html.getAttribute('aria-selected') === 'true';
        const showCode = card.querySelector('.code-block-toggle');
        showCode.click();
        await new Promise(requestAnimationFrame);
        result.codeExpanded = showCode.getAttribute('aria-expanded') === 'true';
        resolve(result);
      }
      observer.observe(document.documentElement, { childList: true, subtree: true });
      check();
    })`,
    awaitPromise: true,
    returnByValue: true,
  })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text)
  return result.result.value
}

test("component previews preserve normal layout and isolate documentation styles", async () => {
  const browser = await startBrowser()
  try {
    for (const [path, selector] of [
      ["/components/feedback/alert", ".alert"],
      ["/components/actions/accordion", ".accordion"],
      ["/components/actions/button", ".button"],
    ]) {
      const result = await inspectPage(browser, path, selector)
      assert.equal(result.canvasDisplay, "block", path)
      assert.deepEqual(
        result.actual,
        result.reference,
        `${path}: component styles`
      )
      assert.deepEqual(
        result.probeStyles,
        result.referenceProbeStyles,
        `${path}: nested content styles`
      )
      assert.equal(result.scrollable, true, `${path}: overflowing content`)
      assert.equal(result.htmlSelected, true, `${path}: HTML tab`)
      assert.equal(result.codeExpanded, true, `${path}: code expansion`)
      if (selector === ".accordion") {
        assert.equal(result.accordionToggled, true)
        assert.equal(
          result.edgeTargetsHeader,
          true,
          "The item edge must hit the header"
        )
        assert.ok(
          result.headerBounds.left <= 1 &&
            result.headerBounds.right <= 1 &&
            result.headerBounds.top <= 1,
          "The header must cover the item's inner edges"
        )
        const [closed, open, expanded] = result.accordionTopPositions
        assert.ok(
          Math.abs(closed - open) < 1,
          `Opening moved the header: ${closed} → ${open}`
        )
        assert.ok(
          Math.abs(closed - expanded) < 1,
          `Growing the body moved the header: ${closed} → ${expanded}`
        )
        const target = await browser.send("Runtime.evaluate", {
          expression: `(() => {
            const header = document.querySelector('.primary-example .accordionHeader');
            header.scrollIntoView({ block: 'center' });
            const text = Array.from(header.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            const range = document.createRange(); range.selectNodeContents(text);
            const rect = range.getBoundingClientRect();
            window.getSelection().removeAllRanges();
            return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, open: header.getAttribute('aria-expanded'), headerSelect: getComputedStyle(header).userSelect, bodySelect: getComputedStyle(document.querySelector('.primary-example .accordionBody')).userSelect };
          })()`,
          returnByValue: true,
        })
        const {
          x,
          y,
          open: initialOpen,
          headerSelect,
          bodySelect,
        } = target.result.value
        assert.equal(headerSelect, "none")
        assert.notEqual(bodySelect, "none")
        for (const clickCount of [1, 2]) {
          await browser.send("Input.dispatchMouseEvent", {
            type: "mousePressed",
            x,
            y,
            button: "left",
            clickCount,
          })
          await browser.send("Input.dispatchMouseEvent", {
            type: "mouseReleased",
            x,
            y,
            button: "left",
            clickCount,
          })
        }
        const selection = await browser.send("Runtime.evaluate", {
          expression: `({ text: window.getSelection().toString(), open: document.querySelector('.primary-example .accordionHeader').getAttribute('aria-expanded') })`,
          returnByValue: true,
        })
        assert.equal(selection.result.value.text, "")
        assert.equal(selection.result.value.open, initialOpen)
      }
    }
  } finally {
    await browser.close()
  }
})
