import { HASH } from '../../../react/hash.json'

export const cssPlugin = () => {
  return {
    name: 'css-transform',
    transform(src: string, id: string) {
      if (/mangled\.(scss)$/.test(id)) {
        return src
          .replace(/(\.[a-z][_\-0-9a-z]*)(?=[^\{]*{)/gi, (match) => {
            return `${match}__${HASH}`
          })
          .replace(/(url\(["']?.*?)(__[\w]+)(.*?["']?\))/g, '$1$3')
      }
    },
  }
}
