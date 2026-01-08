import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef, PromptAiStatus } from './PromptAiProps'

export interface IPromptAiFile {
  type: string
  name?: string
  src?: string
}

interface IPromptAiContext {
  isReadyToSubmit: boolean
  setIsReadyToSubmit: Dispatch<SetStateAction<boolean>>
  files: IPromptAiFile[]
  setFiles: Dispatch<SetStateAction<IPromptAiFile[]>>
  status: PromptAiStatus
  setStatus: Dispatch<SetStateAction<PromptAiStatus>>
}

export const PromptAiContext = React.createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
  files: [],
  setFiles: () => undefined,
  status: PromptAiStatus.STREAMING_OFF,
  setStatus: () => undefined,
})

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, onSubmit, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])
  const [status, setStatus] = useState<PromptAiStatus>(PromptAiStatus.STREAMING_OFF)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit && onSubmit()
  }

  return (
    <PromptAiContext.Provider value={{ isReadyToSubmit, setIsReadyToSubmit, files, setFiles, status, setStatus }}>
      <form ref={ref} className={classes} {...others} onSubmit={handleSubmit} />
    </PromptAiContext.Provider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
