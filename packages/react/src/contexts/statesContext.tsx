import { createContext, type Context } from "react"

export interface StatesContextValue {
  inverted: boolean
  active: boolean
  flat: boolean
}

export const StatesContext: Context<StatesContextValue> =
  createContext<StatesContextValue>({
    inverted: false,
    active: false,
    flat: false,
  })
