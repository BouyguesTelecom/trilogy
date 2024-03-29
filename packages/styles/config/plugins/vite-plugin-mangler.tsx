import {HASH} from '../../../react/hash.json'
export const cssPlugin = () => {
  return {
    name: 'css-transform',
    transform(src: string, id: string) {
      if (/mangled\.(scss)$/.test(id)) {
        return src.replace(/(\.[a-z]{1}[0-9a-z\-]+?)([^0-9a-z\-\)\'\")]+?)/g, (match, p1, p2) => {
          return `${p1}_${HASH}${p2}`
        });
      }
    }
  }
};
