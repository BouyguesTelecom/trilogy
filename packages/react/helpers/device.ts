interface SSRReturn {
  isBrowser: boolean
  isServer: boolean
  isNative: boolean
  device: Device
  canUseWorkers: boolean
  canUseEventListeners: boolean
  canUseViewport: boolean
}

export enum Device {
  Browser = 'browser',
  Server = 'server',
  Native = 'native',
}

const { Browser, Server, Native } = Device

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const canUseNative: boolean = typeof navigator != 'undefined' && navigator.product == 'ReactNative'

const device = canUseNative ? Native : canUseDOM ? Browser : Server

const SSRObjectDefined = {
  isBrowser: device === Browser,
  isServer: device === Server,
  isNative: device === Native,
  device,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: device === Browser && !!window.addEventListener,
  canUseViewport: device === Browser && !!window.screen,
}

const assign = (...args: any[]) => args.reduce((acc, obj) => ({ ...acc, ...obj }), {})
const values = (obj: any) => Object.keys(obj).map(key => obj[key])
const toArrayObject = (): SSRReturn => assign((values(SSRObjectDefined), SSRObjectDefined))

const SSRObject = toArrayObject()

export const ssrDevice = (): SSRReturn => SSRObject
