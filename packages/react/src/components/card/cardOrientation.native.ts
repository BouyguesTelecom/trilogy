import { createContext, useContext, type Context, type Provider } from "react"

import type { CardOrientation } from "./card.types"

const CardOrientationContext: Context<CardOrientation> =
  createContext<CardOrientation>("vertical")

export const CardOrientationProvider: Provider<CardOrientation> =
  CardOrientationContext.Provider
export const useCardOrientation = (): CardOrientation =>
  useContext(CardOrientationContext)
