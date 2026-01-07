import { Button } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import clsx from 'clsx'
import React from 'react'
import { PromptAiInputFileProps, PromptAiInputFileRef } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileRef, PromptAiInputFileProps>(
  ({ className, ...others }, ref) => {
    const classes = clsx('prompt_ai-toolbar-tool icon-only', className)

    return <Button ref={ref} iconName='tri-attachment' className={classes} variant='GHOST' {...others} />
  },
)

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
