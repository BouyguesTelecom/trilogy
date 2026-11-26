import { createContext, useContext, type Context, type Provider } from "react"

import { CardOrientation } from "./card.types"

type Orientation = CardOrientation | `${CardOrientation}`

const CardOrientationContext: Context<Orientation> = createContext<Orientation>(
  CardOrientation.vertical
)

export const CardOrientationProvider: Provider<Orientation> =
  CardOrientationContext.Provider
export const useCardOrientation = (): Orientation =>
  useContext(CardOrientationContext)
