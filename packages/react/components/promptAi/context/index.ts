import { createContext, Dispatch, SetStateAction } from 'react'
import { PromptAiStatus } from '../PromptAiProps'

export interface IPromptAiFile {
  type: string
  name?: string
  src?: string
}

export interface IPromptAiContext {
  isReadyToSubmit: boolean
  setIsReadyToSubmit: Dispatch<SetStateAction<boolean>>
  files: IPromptAiFile[]
  setFiles: Dispatch<SetStateAction<IPromptAiFile[]>>
  status: PromptAiStatus
  setStatus: Dispatch<SetStateAction<PromptAiStatus>>
  handleSubmit?: () => void
}

export const PromptAiContext = createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
  files: [],
  setFiles: () => undefined,
  status: PromptAiStatus.STREAMING_OFF,
  setStatus: () => undefined,
  handleSubmit: () => undefined,
})
