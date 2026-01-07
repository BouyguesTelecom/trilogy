import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PromptAiProps, PromptAiRef } from './PromptAiProps'

interface IPromptAiContext {
  isReadyToSubmit: boolean
  setIsReadyToSubmit: Dispatch<SetStateAction<boolean>>
}

export const PromptAiContext = React.createContext<IPromptAiContext>({
  isReadyToSubmit: false,
  setIsReadyToSubmit: () => undefined,
})

const PromptAi = React.forwardRef<PromptAiRef, PromptAiProps>(({ className, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('prompt_ai', className))
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false)

  return (
    <PromptAiContext.Provider value={{ isReadyToSubmit, setIsReadyToSubmit }}>
      <div ref={ref} className={classes} {...others} />
    </PromptAiContext.Provider>
  )
})

PromptAi.displayName = ComponentName.PromptAi
export default PromptAi
