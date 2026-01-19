import { Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext, useEffect, useMemo } from 'react'
import { PromptAiContext } from '../context'
import { PromptAiFilesProps, PromptAiFilesRef } from './PromptAiFilesProps'

const PromptAiFiles = React.forwardRef<PromptAiFilesRef, PromptAiFilesProps>(({ children }, ref) => {
  const { styled } = useTrilogyContext()
  const { setFiles } = useContext(PromptAiContext)
  const classesFiles = hashClass(styled, clsx('prompt_ai-files'))
  const childrenLength = useMemo(() => React.Children.count(children), [children])

  useEffect(() => {
    setFiles(childrenLength)
  }, [childrenLength])

  if (!childrenLength) return null
  return (
    <Columns className={classesFiles} scrollable ref={ref}>
      {children}
    </Columns>
  )
})

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
