import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

export interface IPromptAiFile {
  type: string
  name: string
  src: string
}

export interface IPromptAiContext {
  text: string
  setText: Dispatch<SetStateAction<string>>
  files: number
  setFiles: Dispatch<SetStateAction<number>>
  isFocused: boolean
  setIsFocused: Dispatch<SetStateAction<boolean>>
  isSend: boolean
  setIsSend: Dispatch<SetStateAction<boolean>>
}

export const PromptAiContext = createContext<IPromptAiContext>({
  text: '',
  setText: () => undefined,
  files: 0,
  setFiles: () => undefined,
  isFocused: false,
  setIsFocused: () => undefined,
  isSend: false,
  setIsSend: () => undefined,
})

export const PromptAiProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>('')
  const [files, setFiles] = useState<number>(0)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isSend, setIsSend] = useState<boolean>(false)

  return (
    <PromptAiContext.Provider value={{ text, setText, files, setFiles, isFocused, setIsFocused, isSend, setIsSend }}>
      {children}
    </PromptAiContext.Provider>
  )
}
