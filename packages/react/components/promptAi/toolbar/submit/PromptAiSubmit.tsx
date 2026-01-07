import { Button } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptAiContext } from '../../PromptAi'
import { PromptAiSubmitProps, PromptAiSubmitRef } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitRef, PromptAiSubmitProps>(
  ({ className, iconName = 'tri-arrow-up', ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const { isReadyToSubmit } = useContext(PromptAiContext)
    const classes = hashClass(styled, clsx('prompt_ai-toolbar-tool icon-only', isReadyToSubmit && 'active', className))

    return (
      <Button
        disabled={!isReadyToSubmit}
        ref={ref}
        iconName={iconName}
        variant='GHOST'
        className={classes}
        {...others}
      />
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
