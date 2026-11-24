import ReactMarkdown from "react-markdown"

interface ApiProp {
  name: string
  type: string
  defaultValue: string
  description: string
  web: boolean
  native: boolean
}

function InlineMarkdown({ value }: { value: string }) {
  return (
    <ReactMarkdown components={{ p: ({ children }) => <>{children}</> }}>
      {value}
    </ReactMarkdown>
  )
}

function splitTableRow(row: string): string[] {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split(/(?<!\\)\|/)
    .map((cell) => cell.trim().replace(/\\\|/g, "|"))
}

function parseProps(markdown: string): ApiProp[] {
  const props = new Map<string, ApiProp>()
  let platform: "shared" | "web" | "native" = "shared"
  let inTable = false
  let hasSupportColumn = false

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(
      /^###\s+(Shared props|Web props|Native props)\s*$/i
    )
    if (heading) {
      platform = heading[1].toLowerCase().startsWith("shared")
        ? "shared"
        : heading[1].toLowerCase().startsWith("web")
          ? "web"
          : "native"
      inTable = false
      continue
    }
    if (!line.trim().startsWith("|")) {
      if (inTable && line.trim()) inTable = false
      continue
    }
    if (/^\|\s*[-:| ]+\|?$/.test(line.trim())) continue

    const cells = splitTableRow(line)
    if (cells[0]?.toLowerCase() === "prop") {
      inTable = true
      hasSupportColumn = cells[3]?.toLowerCase() === "support"
      continue
    }
    if (!inTable || cells.length < 4) continue

    const [name, type, defaultValue] = cells
    const support = hasSupportColumn ? (cells[3] ?? "") : ""
    const description = hasSupportColumn ? (cells[4] ?? "") : cells[3]
    const existing = props.get(name) ?? {
      name,
      type,
      defaultValue,
      description,
      web: false,
      native: false,
    }
    if (hasSupportColumn) {
      existing.web ||= /web/i.test(support)
      existing.native ||= /mobile|native/i.test(support)
    } else {
      if (platform === "shared" || platform === "web") existing.web = true
      if (platform === "shared" || platform === "native") existing.native = true
    }
    props.set(name, existing)
  }
  return [...props.values()]
}

export function ApiReference({ markdown }: { markdown: string }) {
  const props = parseProps(markdown)
  if (!props.length) return <p>No API properties are documented yet.</p>

  return (
    <div className="api-table-scroll">
      <table className="api-reference-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Support</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td>
                <InlineMarkdown value={prop.name} />
              </td>
              <td>
                <InlineMarkdown value={prop.type} />
              </td>
              <td>
                {prop.defaultValue === "—" ? (
                  "—"
                ) : (
                  <InlineMarkdown value={prop.defaultValue} />
                )}
              </td>
              <td className="support-cell">
                {prop.web ? (
                  <span className="support-badge">Web</span>
                ) : (
                  <span className="support-missing">—</span>
                )}
                {prop.native ? (
                  <span className="support-badge">Mobile</span>
                ) : (
                  <span className="support-missing">—</span>
                )}
              </td>
              <td>
                <InlineMarkdown value={prop.description} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
