export interface IInputFile {
  pickImage: () => Promise<void>
  pickFile: () => Promise<void>
  onClick?: (e?: React.ChangeEvent<HTMLInputElement>) => void
}
