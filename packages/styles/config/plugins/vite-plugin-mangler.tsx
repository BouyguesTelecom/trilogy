import { HASH } from '../../../react/hash.json'

export const cssPlugin = () => {
  return {
    name: 'css-transform',
    transform(src: string, id: string) {
      if (/mangled\.(scss)$/.test(id)) {
        return src.replace(/(\.[a-z][_\-0-9a-z]*)(?=[^\{]*{)/gi, (match, offset) => {
          const before = src.slice(0, offset)
          const urlMatch = before.match(/url\(\s*['"]?[^"')]*$/i)
          if (urlMatch) return match
          return `${match}__${HASH}`
        })
      }
    },
  }
}
