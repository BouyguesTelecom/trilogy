import { Button } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { PromptAiSubmitProps, PromptAiSubmitRef } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitRef, PromptAiSubmitProps>(
  ({ className, iconName = 'tri-arrow-up', ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('prompt_ai-toolbar-tool icon-only', className))

    return <Button ref={ref} iconName={iconName} variant='GHOST' className={classes} {...others} />
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
