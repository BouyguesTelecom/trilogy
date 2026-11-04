import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import StyleDictionary from "style-dictionary"
import { fileHeader } from "style-dictionary/utils"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "../../..")
const stylesDir = path.resolve(__dirname, "..")
const figmaDir = path.join(root, "packages/figma/src")
const variablesBuildPath = `${path.join(stylesDir, "src/variables")}/`
const helpersBuildPath = `${path.join(stylesDir, "src/helpers")}/`

const THEMES = {
  Light: ':root,\n[data-theme="light"]',
  Dark: '[data-theme="dark"]',
}

const kebab = (str) =>
  String(str)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()

// "Font.font-size-50" -> "font-size-50" (avoids "font-font-size-50")
const primitiveName = (segments) => {
  const [first, ...rest] = segments.map(kebab)
  if (rest.length && rest[0].startsWith(`${first}-`)) return rest.join("-")
  return [first, ...rest].join("-")
}

const primitiveNames = new Set()
const collectNames = (node, segments = []) => {
  if (node?.$value !== undefined)
    return primitiveNames.add(primitiveName(segments))
  for (const [key, child] of Object.entries(node ?? {})) {
    if (!key.startsWith("$")) collectNames(child, [...segments, key])
  }
}
collectNames(
  JSON.parse(fs.readFileSync(path.join(figmaDir, "primitives.json"), "utf8"))
)

StyleDictionary.registerTransform({
  name: "trilogy/name",
  type: "name",
  transform: (token) => primitiveName(token.path),
})

// Theme files are wrapped under their file name (Light/Dark) to merge them in one dictionary
StyleDictionary.registerParser({
  name: "trilogy/theme",
  pattern: /\.tokens\.json$/,
  parser: ({ filePath, contents }) => ({
    [path.basename(filePath, ".tokens.json")]: JSON.parse(contents),
  }),
})

// Prefixed with the theme to keep names unique; the prefix is removed in the format
StyleDictionary.registerTransform({
  name: "trilogy/name/theme",
  type: "name",
  transform: (token) => {
    const web = token.$extensions?.["com.figma.codeSyntax"]?.WEB
    const match = web?.match(/var\(--([\w-]+)\)/)
    const name = match ? match[1] : primitiveName(token.path.slice(1))
    return `${token.path[0]}/${name}`
  },
})

// Uses the Figma WEB code syntax: "var(--radius-full)" -> "radius-full"
StyleDictionary.registerTransform({
  name: "trilogy/name/single",
  type: "name",
  transform: (token) => {
    const web = token.$extensions?.["com.figma.codeSyntax"]?.WEB
    const match = web?.match(/var\(--([\w-]+)\)/)
    return match ? match[1] : primitiveName(token.path)
  },
})

// Points to the primitive SCSS variable the Figma variable is aliased to
StyleDictionary.registerTransform({
  name: "trilogy/alias",
  type: "value",
  filter: (token) =>
    Boolean(token.$extensions?.["com.figma.aliasData"]?.targetVariableName),
  transform: (token) => {
    const { targetVariableName } = token.$extensions["com.figma.aliasData"]
    const name = primitiveName(targetVariableName.split("/"))
    if (primitiveNames.has(name)) return `$${name}`
    console.warn(
      `⚠ ${token.path.join(".")}: primitive "${targetVariableName}" introuvable, valeur brute utilisée`
    )
    return colorToCss(token.$value)
  },
})

StyleDictionary.registerFormat({
  name: "trilogy/scss-themes",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file, commentStyle: "short" })
    const blocks = Object.entries(THEMES).map(([theme, selector]) => {
      const vars = dictionary.allTokens
        .filter((token) => token.path[0] === theme)
        .map(({ name, $value }) => {
          // Interpolation added here: "{}" in token values is parsed as a reference
          const value = $value.startsWith("$") ? `#{${$value}}` : $value
          return `  --${name.slice(theme.length + 1)}: ${value};`
        })
      return `${selector} {\n${vars.join("\n")}\n}`
    })
    return `${header}@use "primitives-generated" as *;\n\n${blocks.join("\n\n")}\n`
  },
})

StyleDictionary.registerFormat({
  name: "trilogy/scss-root",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file, commentStyle: "short" })
    const vars = dictionary.allTokens.map(({ name, $value }) => {
      const value =
        typeof $value === "string" && $value.startsWith("$")
          ? `#{${$value}}`
          : $value
      return `  --${name}: ${value};`
    })
    return `${header}@use "primitives-generated" as *;\n\n:root {\n${vars.join("\n")}\n}\n`
  },
})

// Helpers pour les couleurs (backgrounds, text-colors, border-colors)
StyleDictionary.registerFormat({
  name: "trilogy/scss-helpers-colors",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file, commentStyle: "short" })
    const theme = Object.keys(THEMES)[0]
    const tokens = dictionary.allTokens
      .filter((token) => token.path[0] === theme)
      .map(({ name }) => name.slice(theme.length + 1))

    const backgrounds = tokens.filter((name) => /^background(-|$)/.test(name))
    const textColors = tokens.filter((name) => /^color(-|$)/.test(name))
    const borderColors = tokens.filter((name) => /^border(-|$)/.test(name))

    return `${header}@use "sass:string";

$backgrounds: (
${backgrounds.map((name) => `  ${name},`).join("\n")}
);

$text-colors: (
${textColors.map((name) => `  ${name},`).join("\n")}
);

$border-colors: (
${borderColors.map((name) => `  ${name},`).join("\n")}
);

// background-primary -> .bg-primary
@each $token in $backgrounds {
  .bg#{string.slice($token, 11)} {
    background-color: var(--#{$token});
  }
}

// color-primary -> .text-primary
@each $token in $text-colors {
  .text#{string.slice($token, 6)} {
    color: var(--#{$token});
  }
}

// border-primary -> .border-primary
@each $token in $border-colors {
  .border#{string.slice($token, 7)} {
    border-color: var(--#{$token});
  }
}
`
  },
})

// Helpers pour les dimensions (radius, spacing, border-width, icon-size)
StyleDictionary.registerFormat({
  name: "trilogy/scss-helpers-dimensions",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file, commentStyle: "short" })
    const tokens = dictionary.allTokens.map(({ name }) => name)

    const radius = tokens.filter((name) => /^radius(-|$)/.test(name))
    const spacing = tokens.filter((name) => /^spacing(-|$)/.test(name))
    const borderWidth = tokens.filter((name) => /^border-width(-|$)/.test(name))
    const iconSize = tokens.filter((name) => /^icon-size(-|$)/.test(name))

    return `${header}$radius: (
${radius.map((name) => `  ${name},`).join("\n")}
);

$spacing: (
${spacing.map((name) => `  ${name},`).join("\n")}
);

$border-widths: (
${borderWidth.map((name) => `  ${name},`).join("\n")}
);

$icon-sizes: (
${iconSize.map((name) => `  ${name},`).join("\n")}
);

@each $token in $radius {
  .#{$token} {
    border-radius: var(--#{$token});
  }
}

@each $token in $spacing {
  .#{$token} {
    padding: var(--#{$token});
  }
}

@each $token in $border-widths {
  .#{$token} {
    border-width: var(--#{$token});
  }
}

@each $token in $icon-sizes {
  .#{$token} {
    width: var(--#{$token});
    height: var(--#{$token});
  }
}
`
  },
})

// Helpers pour les polices (font-family, font-weight)
StyleDictionary.registerFormat({
  name: "trilogy/scss-helpers-fonts",
  format: async ({ dictionary, file }) => {
    const header = await fileHeader({ file, commentStyle: "short" })
    const tokens = dictionary.allTokens.map(({ name }) => name)

    const fontFamilies = tokens.filter((name) => /^font-family(-|$)/.test(name))
    const fontWeights = tokens.filter((name) => /^font-weight(-|$)/.test(name))

    return `${header}$font-families: (
${fontFamilies.map((name) => `  ${name},`).join("\n")}
);

$font-weights: (
${fontWeights.map((name) => `  ${name},`).join("\n")}
);

@each $token in $font-families {
  .#{$token} {
    font-family: var(--#{$token});
  }
}

@each $token in $font-weights {
  .#{$token} {
    font-weight: var(--#{$token});
  }
}
`
  },
})

// Figma exports colors as { colorSpace, components, alpha, hex }
const colorToCss = ({ hex, alpha = 1, components }) => {
  if (alpha === 1) return hex.toLowerCase()
  if (alpha === 0) return "transparent"
  const [r, g, b] = components.map((c) => Math.round(c * 255))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

StyleDictionary.registerTransform({
  name: "trilogy/color",
  type: "value",
  filter: (token) =>
    token.$type === "color" && typeof token.$value === "object",
  transform: (token) => colorToCss(token.$value),
})

StyleDictionary.registerTransform({
  name: "trilogy/px",
  type: "value",
  filter: (token) =>
    token.$type === "number" &&
    !token.path.some((p) => /weight/i.test(p)) &&
    !token.$extensions?.["com.figma.aliasData"]?.targetVariableName,
  transform: (token) => (token.$value === 0 ? "0" : `${token.$value}px`),
})

StyleDictionary.registerTransform({
  name: "trilogy/string",
  type: "value",
  filter: (token) =>
    token.$type === "string" &&
    !token.$extensions?.["com.figma.aliasData"]?.targetVariableName,
  transform: (token) => `"${token.$value}"`,
})

const primitives = new StyleDictionary({
  source: [path.join(figmaDir, "primitives.json")],
  usesDtcg: true,
  log: { verbosity: "verbose" },
  platforms: {
    scss: {
      transforms: [
        "trilogy/name",
        "trilogy/color",
        "trilogy/px",
        "trilogy/string",
      ],
      buildPath: variablesBuildPath,
      files: [
        {
          destination: "_primitives-generated.scss",
          format: "scss/variables",
          options: {
            showFileHeader: true,
            formatting: { commentStyle: "none" },
          },
        },
      ],
    },
  },
})

const colors = new StyleDictionary({
  source: Object.keys(THEMES).map((theme) =>
    path.join(figmaDir, `variables/${theme}.tokens.json`)
  ),
  parsers: ["trilogy/theme"],
  usesDtcg: true,
  log: { verbosity: "verbose" },
  platforms: {
    scss: {
      transforms: ["trilogy/name/theme", "trilogy/alias", "trilogy/color"],
      buildPath: variablesBuildPath,
      files: [
        {
          destination: "_colors-generated.scss",
          format: "trilogy/scss-themes",
        },
      ],
    },
    helpers: {
      transforms: ["trilogy/name/theme"],
      buildPath: helpersBuildPath,
      files: [
        {
          destination: "_colors-generated.scss",
          format: "trilogy/scss-helpers-colors",
        },
      ],
    },
  },
})

const dimensions = new StyleDictionary({
  source: [path.join(figmaDir, "variables/Dimensions.tokens.json")],
  usesDtcg: true,
  log: { verbosity: "verbose" },
  platforms: {
    scss: {
      transforms: ["trilogy/name/single", "trilogy/alias", "trilogy/px"],
      buildPath: variablesBuildPath,
      files: [
        {
          destination: "_dimensions-generated.scss",
          format: "trilogy/scss-root",
        },
      ],
    },
    helpers: {
      transforms: ["trilogy/name/single"],
      buildPath: helpersBuildPath,
      files: [
        {
          destination: "_dimensions-generated.scss",
          format: "trilogy/scss-helpers-dimensions",
        },
      ],
    },
  },
})

const fonts = new StyleDictionary({
  source: [path.join(figmaDir, "variables/Fonts.tokens.json")],
  usesDtcg: true,
  log: { verbosity: "verbose" },
  platforms: {
    scss: {
      transforms: ["trilogy/name/single", "trilogy/alias", "trilogy/string"],
      buildPath: variablesBuildPath,
      files: [
        {
          destination: "_fonts-generated.scss",
          format: "trilogy/scss-root",
        },
      ],
    },
    helpers: {
      transforms: ["trilogy/name/single"],
      buildPath: helpersBuildPath,
      files: [
        {
          destination: "_fonts-generated.scss",
          format: "trilogy/scss-helpers-fonts",
        },
      ],
    },
  },
})

await primitives.buildAllPlatforms()
await colors.buildAllPlatforms()
await dimensions.buildAllPlatforms()
await fonts.buildAllPlatforms()

// Génération des index de dossiers
await fs.promises.writeFile(
  path.join(variablesBuildPath, "_index.scss"),
  `@forward "primitives-generated";\n@forward "colors-generated";\n@forward "dimensions-generated";\n@forward "fonts-generated";\n`,
  "utf8"
)

await fs.promises.writeFile(
  path.join(helpersBuildPath, "_index.scss"),
  `@forward "colors-generated";\n@forward "dimensions-generated";\n@forward "fonts-generated";\n`,
  "utf8"
)
