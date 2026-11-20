import { useContext } from "react"
import {
  trilogyContext,
  type TrilogyContextValue,
} from "@/contexts/trilogyContext.web"

export function useTrilogyContext(): TrilogyContextValue {
  return useContext(trilogyContext)
}
