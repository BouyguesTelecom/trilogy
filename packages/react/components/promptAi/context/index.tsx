import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'
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
  handleSubmit?: null | (() => void)
  setHandleSubmit: Dispatch<SetStateAction<null | (() => void)>>
}

export const PromptAiContext = createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
  files: [],
  setFiles: () => undefined,
  status: PromptAiStatus.STREAMING_OFF,
  setStatus: () => undefined,
  handleSubmit: null,
  setHandleSubmit: () => undefined,
})

export const PromptAiProvider = ({ children }: PropsWithChildren) => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])
  const [status, setStatus] = useState<PromptAiStatus>(PromptAiStatus.STREAMING_OFF)
  const [handleSubmit, setHandleSubmit] = useState<(() => void) | null>(null)

  return (
    <PromptAiContext.Provider
      value={{ handleSubmit, setHandleSubmit, isReadyToSubmit, setIsReadyToSubmit, files, setFiles, status, setStatus }}
    >
      {children}
    </PromptAiContext.Provider>
  )
}
