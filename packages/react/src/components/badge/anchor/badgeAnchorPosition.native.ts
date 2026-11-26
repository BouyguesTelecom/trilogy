import { createContext, useContext, type Context, type Provider } from "react"

import type { BadgeAnchorPosition } from "./badgeAnchor.types"

type AnchorPosition = BadgeAnchorPosition | `${BadgeAnchorPosition}`

const BadgeAnchorPositionContext: Context<AnchorPosition | undefined> =
  createContext<AnchorPosition | undefined>(undefined)

export const BadgeAnchorPositionProvider: Provider<AnchorPosition | undefined> =
  BadgeAnchorPositionContext.Provider
export const useBadgeAnchorPosition = (): AnchorPosition | undefined =>
  useContext(BadgeAnchorPositionContext)
