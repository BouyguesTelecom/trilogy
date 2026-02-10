import { PromptInputFile } from '@trilogy-ds/react/components'
import { IInputFile } from './interface'

export default function InputFile(props: IInputFile) {
  return <PromptInputFile onChange={props?.onClick} />
}
