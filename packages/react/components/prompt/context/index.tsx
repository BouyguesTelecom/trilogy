import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

export interface IPromptFile {
  type: string
  name: string
  src: string
}

export interface IPromptContext {
  text: string
  setText: Dispatch<SetStateAction<string>>
  files: number
  setFiles: Dispatch<SetStateAction<number>>
  isFocused: boolean
  setIsFocused: Dispatch<SetStateAction<boolean>>
  isSend: boolean
  setIsSend: Dispatch<SetStateAction<boolean>>
  isTyping: boolean
  setIsTyping: Dispatch<SetStateAction<boolean>>
}

export const PromptContext = createContext<IPromptContext>({
  text: '',
  isTyping: false,
  setIsTyping: () => undefined,
  setText: () => undefined,
  files: 0,
  setFiles: () => undefined,
  isFocused: false,
  setIsFocused: () => undefined,
  isSend: false,
  setIsSend: () => undefined,
})

export const PromptProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>('')
  const [files, setFiles] = useState<number>(0)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isSend, setIsSend] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)

  return (
    <PromptContext.Provider
      value={{ text, setText, files, setFiles, isFocused, setIsFocused, isSend, setIsSend, isTyping, setIsTyping }}
    >
      {children}
    </PromptContext.Provider>
  )
}
