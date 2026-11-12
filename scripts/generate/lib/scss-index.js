import fs from "node:fs/promises"
import path from "node:path"

// _index.scss d'un dossier : les partials générés, puis ceux écrits à la main (jamais écrasés)
export async function writeScssIndex(dir, generated) {
  const handWritten = (await fs.readdir(dir))
    .map((file) => file.match(/^_(.+)\.scss$/)?.[1])
    .filter((name) => name && name !== "index" && !name.endsWith("-generated"))

  const content =
    [...generated, ...handWritten]
      .map((name) => `@forward "${name}";`)
      .join("\n") + "\n"
  await fs.writeFile(path.join(dir, "_index.scss"), content, "utf8")
}
