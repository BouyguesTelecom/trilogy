export interface IInputFile {
  pickImage: () => Promise<boolean>
  pickFile: () => Promise<boolean>
  onClick?: (e?: React.ChangeEvent<HTMLInputElement>) => void
}
