import { VERSION } from '../../../react/version.json'

export const cssPlugin = () => {
  return {
    name: 'css-transform',
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
  }
}
