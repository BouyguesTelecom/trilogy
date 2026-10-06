import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface ITrilogyContext {
  styled: boolean
  setStyled: (e: boolean) => void
  hash?: string
  setHash?: Dispatch<SetStateAction<string|undefined>>
}

const TrilogyContext = createContext<ITrilogyContext>({
  styled: false,
  setStyled: () => undefined,
})

const useTrilogyContext = () => {
  const context = useContext(TrilogyContext)
  if (context === undefined) {
    throw new Error('useTrilogyContext must be used within a TrilogyProvider')
  }
  return context
}

export { TrilogyContext, useTrilogyContext }
