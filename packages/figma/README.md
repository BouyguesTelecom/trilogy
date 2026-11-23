# Figma assets and design tokens

## Generate CSS custom properties

The Style Dictionary pipeline reads the DTCG token files in `src/` and writes the Sass partials imported by `packages/styles`:

```sh
pnpm generate:tokens
```

The generated partials contain CSS custom properties and retain Figma `WEB` code-syntax names when available. Edit the token JSON files, then regenerate; do not hand-edit the token partials.

## Download a Figma file

Set a Figma personal access token in the environment (do not commit it), then provide a file key:

```sh
export FIGMA_ACCESS_TOKEN="..."
pnpm figma:fetch --file-key <figma-file-key>
```

You can set `FIGMA_FILE_KEY` instead of passing `--file-key`. Downloaded responses are written to the ignored `packages/figma/.cache/` directory. To also request the local variables endpoint, add `--variables`; the Figma token must have the required API access for that endpoint:

```sh
pnpm figma:fetch --file-key <figma-file-key> --variables
```

The file endpoint response and local variables endpoint response are saved as raw JSON. They are separate from the DTCG token files consumed by the Style Dictionary build.
