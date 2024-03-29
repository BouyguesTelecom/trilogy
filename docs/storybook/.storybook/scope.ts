import { ComponentType } from 'react'

const req = require.context('../../trilogy-ds/lib/components', true, /^\.\/(.*)\/index.tsx$/)

const components = req.keys().reduce((acc: Record<string, ComponentType>, key) => {
  Object.entries(req(key)).forEach(([componentName, component]: [string, any]) => {
    acc[componentName] = component
  })

  return acc
}, {})

export default {
  ...components,
}
