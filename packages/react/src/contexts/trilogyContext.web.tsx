import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  type ReactNode,
} from "react"

import versionJSON from "../../version.json"

interface ITrilogyContext {
  mangled: boolean
  setMangled: (e: boolean) => void
  hash?: string
  setHash?: Dispatch<SetStateAction<string | undefined>>
}

const TrilogyContext: React.Context<ITrilogyContext> =
  createContext<ITrilogyContext>({
    mangled: false,
    setMangled: () => undefined,
  })

const useTrilogyContext = (): ITrilogyContext => {
  const context = useContext(TrilogyContext)
  if (context === undefined) {
    throw new Error("useTrilogyContext must be used within a TrilogyProvider")
  }
  return context
}

/**
 * Trilogy Provider Without Styles
 * @param children App
 * @param mangled Mangled Css Classes
 * @param injectTrilogyAssets Inject CSS Styles from Assets
 * @param id Id of Trilogy Provider
 * @param theme Theme css style
 * @param assetUrl URL to the file with some possible replacement (%VERSION%, %THEME%, %MANGLED%)
 */
const TrilogyProvider = ({
  children,
  mangled: _mangled = false,
  hash: HASH = versionJSON.VERSION,
}: {
  children: ReactNode
  mangled?: boolean
  hash?: string
}): ReactNode => {
  const [mangled, setMangled] = useState<boolean>(_mangled)
  const [hash, setHash] = useState<string | undefined>(HASH)

  return (
    <TrilogyContext.Provider value={{ mangled, setMangled, hash, setHash }}>
      {children}
    </TrilogyContext.Provider>
  )
}

export { TrilogyContext, useTrilogyContext, TrilogyProvider }
export type { ITrilogyContext }
