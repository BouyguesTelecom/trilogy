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
  isSpeech: boolean
  setIsSpeech: Dispatch<SetStateAction<boolean>>
  isDisabled: boolean
  isReadonly: boolean
}

interface Props {
  isReadonly: boolean
  isDisabled: boolean
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
  isSpeech: false,
  setIsSpeech: () => undefined,
  isDisabled: false,
  isReadonly: false,
})

export const PromptProvider = ({ children, isDisabled, isReadonly }: PropsWithChildren<Props>) => {
  const [text, setText] = useState<string>('')
  const [files, setFiles] = useState<number>(0)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isSend, setIsSend] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isSpeech, setIsSpeech] = useState<boolean>(false)

  return (
    <PromptContext.Provider
      value={{
        text,
        setText,
        files,
        setFiles,
        isFocused,
        setIsFocused,
        isSend,
        setIsSend,
        isTyping,
        setIsTyping,
        isSpeech,
        setIsSpeech,
        isReadonly,
        isDisabled,
      }}
    >
      {children}
    </PromptContext.Provider>
  )
}
