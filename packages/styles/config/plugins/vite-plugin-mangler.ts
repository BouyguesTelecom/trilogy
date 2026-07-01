import { VERSION } from '../../../react/version.json'
import * as fs from 'fs'
import * as path from 'path'

/**
 * List of bare HTML tags that should not appear as top-level selectors
 * in mangled/partials CSS builds (to avoid leaking global styles).
 */
const HTML_TAGS = [
  'html', 'body', 'div', 'span', 'a', 'p', 'h[1-6]',
  'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
  'img', 'input', 'select', 'button', 'textarea', 'form', 'label',
  'fieldset', 'legend', 'section', 'article', 'aside', 'header', 'footer',
  'main', 'nav', 'figure', 'figcaption', 'blockquote', 'pre', 'code',
  'strong', 'em', 'small', 'sup', 'sub', 'iframe', 'hr', 'dl', 'dt', 'dd',
  'audio', 'video', 'br',
].join('|')

/**
 * Regex to match a CSS rule block: selectors { declarations }
 * Handles nested braces (one level deep for media queries etc.)
 */
function removeBareSelectorRules(css: string): string {
  // Match top-level rule blocks (selector { ... }) including @media blocks
  // Strategy: walk through the CSS and for each rule, check if ALL selectors
  // start with a bare HTML tag. If so, remove the entire rule.
  // If only SOME selectors are bare, remove just those selectors.

  // A selector is "bare" (global) if it starts with an HTML tag that is NOT
  // immediately qualified by a mangled class (e.g. `a.box_410` is OK, but
  // `body:not(...)`, `header .navbar`, `footer>.container` are bare).
  const tagPattern = new RegExp(
    `^\\s*(?:\\*|(?:${HTML_TAGS}))(?![a-zA-Z0-9_-])(?!\\.[a-zA-Z][a-zA-Z0-9_-]*_${VERSION})`,
    'i'
  )

  // Parse CSS into tokens (respecting brace nesting)
  const result: string[] = []
  let i = 0

  while (i < css.length) {
    // Find next '{' or end
    const braceStart = css.indexOf('{', i)
    if (braceStart === -1) {
      result.push(css.slice(i))
      break
    }

    // Find matching closing brace
    let depth = 1
    let j = braceStart + 1
    while (j < css.length && depth > 0) {
      if (css[j] === '{') depth++
      else if (css[j] === '}') depth--
      j++
    }

    const selectorPart = css.slice(i, braceStart)
    const fullBlock = css.slice(i, j)

    // Check if this is a @-rule (media query, keyframes, etc.)
    if (selectorPart.trim().startsWith('@')) {
      // For @media etc., recurse into the block content
      const innerCss = css.slice(braceStart + 1, j - 1)
      const cleanedInner = removeBareSelectorRules(innerCss)
      if (cleanedInner.trim()) {
        result.push(selectorPart + '{' + cleanedInner + '}')
      }
    } else {
      // Regular rule - check selectors
      const selectors = selectorPart.split(',')
      const keptSelectors = selectors.filter(sel => !tagPattern.test(sel))

      if (keptSelectors.length > 0 && keptSelectors.length < selectors.length) {
        // Some selectors removed, keep the rest
        const body = css.slice(braceStart, j)
        result.push(keptSelectors.join(',') + body)
      } else if (keptSelectors.length === selectors.length) {
        // All selectors kept
        result.push(fullBlock)
      }
      // else: all selectors are bare HTML tags, drop the entire rule
    }

    i = j
  }

  return result.join('')
}

export const cssPlugin = () => {
  let outDir = ''

  return {
    name: 'css-transform',
    configResolved(config: any) {
      outDir = config.build.outDir
    },
    transform(src: string, id: string) {
      if (/mangled\.(scss)$/.test(id)) {
        return src
          .replace(/(\.[a-z][a-z0-9_-]*)(?=[^/@;]*[{:])/gi, (match) => {
            return `${match}_${VERSION}`
          })
      }
      if (/partials\.(scss)$/.test(id)) {
        return src
          .replace(/(\.[a-z][a-z0-9_-]*)(?=[^/@;]*[{:])/gi, (match) => {
            return `${match}_${VERSION}`
          })
      }
    },
    closeBundle() {
      // Post-build: strip bare HTML tag selectors from mangled & partials CSS
      const targets = ['trilogy-mangled.css', 'trilogy-partials.css']

      for (const file of targets) {
        // CSS assets are output under dist/default/ (via assetFileNames config)
        const filePath = path.resolve(outDir, 'default', file)
        if (!fs.existsSync(filePath)) continue

        const original = fs.readFileSync(filePath, 'utf-8')
        const cleaned = removeBareSelectorRules(original)
        fs.writeFileSync(filePath, cleaned, 'utf-8')

        const removedBytes = original.length - cleaned.length
        console.log(`[css-transform] ${file}: stripped ${removedBytes} bytes of bare HTML tag selectors`)
      }
    },
  }
}
