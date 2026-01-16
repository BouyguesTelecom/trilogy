import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

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
  isFocused: boolean
  setIsFocused: Dispatch<SetStateAction<boolean>>
}

export const PromptAiContext = createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
  files: [],
  setFiles: () => undefined,
  isFocused: false,
  setIsFocused: () => undefined,
})

export const PromptAiProvider = ({ children }: PropsWithChildren) => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <PromptAiContext.Provider value={{ isReadyToSubmit, setIsReadyToSubmit, files, setFiles, isFocused, setIsFocused }}>
      {children}
    </PromptAiContext.Provider>
  )
}
