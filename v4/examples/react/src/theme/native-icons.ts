import glyphs from '@react-native-vector-icons/fontawesome-free-solid/glyphmaps/FontAwesomeFreeSolid.json'
import type { ThemeIcons } from '@trilogy-ds/react'
const fontSource = require('@react-native-vector-icons/fontawesome-free-solid/fonts/fa-solid-900.ttf')

export const nativeIcons = {
  fontFamily: { ios: 'FontAwesome7Free-Solid', android: 'fa-solid-900' },
  glyphMap: {
    ...glyphs,
    'arrow-down': glyphs['chevron-down'],
    'arrow-up': glyphs['chevron-up'],
    'arrow-left': glyphs['chevron-left'],
    'arrow-right': glyphs['chevron-right'],
    'arrow-high': glyphs['arrow-up-right-from-square'],
    alert: glyphs['triangle-exclamation'],
    'infos-circle': glyphs['circle-info'],
    'check-circle': glyphs['circle-check'],
    'exclamation-circle': glyphs['circle-exclamation'],
    'eye-slash': glyphs['eye-slash'],
    'file-attached': glyphs['file-lines'],
    micro: glyphs.microphone,
    times: glyphs.xmark,
  },
} satisfies ThemeIcons

export const nativeIconFonts = {
  'FontAwesome7Free-Solid': fontSource,
  'fa-solid-900': fontSource,
}
