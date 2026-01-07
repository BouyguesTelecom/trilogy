import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef } from './PromptAiProps'

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
}

export const PromptAiContext = React.createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
  files: [],
  setFiles: () => undefined,
})

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])

  return (
    <PromptAiContext.Provider value={{ isReadyToSubmit, setIsReadyToSubmit, files, setFiles }}>
      <div ref={ref} className={classes} {...others} />
    </PromptAiContext.Provider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
