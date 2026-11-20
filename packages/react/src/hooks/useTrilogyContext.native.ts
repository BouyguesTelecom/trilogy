import { useContext } from "react"
import type { TrilogyContextValue } from "@/contexts/trilogyContext.native"
import { trilogyContext } from "@/contexts/trilogyContext.native"

export function useTrilogyContext(): TrilogyContextValue {
  return useContext(trilogyContext)
}
