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

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

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

const assign = <T extends object>(...args: T[]): T => Object.assign({}, ...args)
const values = <T extends object, K extends keyof T>(obj: T): T[K][] => Object.values(obj)
const toArrayObject = (): SSRReturn => assign((values(SSRObjectDefined), SSRObjectDefined))

const SSRObject = toArrayObject()

export const isAndroid = false

export const isIOS = false

export const isMobile = false

export const ssrDevice = (): SSRReturn => SSRObject
