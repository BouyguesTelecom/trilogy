export interface ITrilogyContext {
  mangled: boolean
  setMangled: (e: boolean) => void
  hash?: string
  setHash?: React.Dispatch<React.SetStateAction<string | undefined>>
}
