import { VERSION } from '../../../react/version.json'

export const cssPlugin = () => {
  return {
    name: 'css-transform',
    transform(src: string, id: string) {
      if (/mangled\.(scss)$/.test(id)) {
        return src
          .replace(/(\.[a-z][_\-0-9a-z]*)(?=[^\{]*{)/gi, (match) => {
            return `${match}_${VERSION}`
          })
          .replace(/(url\(["']?.*?)(_[\w]+)(.*?["']?\))/g, '$1$3')
      }
    },
  }
}
