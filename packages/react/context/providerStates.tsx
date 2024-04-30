import React, {Dispatch, SetStateAction} from "react"

export type States = {
  inverted: boolean
  disabled: boolean
  loading: boolean
  skeleton: boolean
}

export const defaultStates = {
  inverted: false,
  disabled: false,
  loading: false,
  skeleton: false,
}

export const StatesContext = React.createContext(defaultStates)

export const StatesContextProvider = () => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>
}
