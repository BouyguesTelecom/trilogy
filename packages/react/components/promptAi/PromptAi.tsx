import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef, PromptAiStatus } from './PromptAiProps'
import { IPromptAiFile, PromptAiContext } from './context'

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, onSubmit, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)
  const [files, setFiles] = useState<IPromptAiFile[]>([])
  const [status, setStatus] = useState<PromptAiStatus>(PromptAiStatus.STREAMING_OFF)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
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
