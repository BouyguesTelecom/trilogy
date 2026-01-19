import { PromptAiInputFile } from '@trilogy-ds/react/components'
import { IInputFile } from './interface'

export default function InputFile(props: IInputFile) {
  return <PromptAiInputFile onChange={props.onClick} />
}
