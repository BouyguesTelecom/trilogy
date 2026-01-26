import { Columns, GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useContext, useEffect, useMemo } from 'react'
import { PromptContext } from '../context'
import { PromptFilesProps, PromptFilesRef } from './PromptFilesProps'

const PromptFiles = React.forwardRef<PromptFilesRef, PromptFilesProps>(({ children }, ref) => {
  const { styled } = useTrilogyContext()
  const { setFiles } = useContext(PromptContext)
  const classesFiles = hashClass(styled, clsx('prompt_ai-files'))
  const childrenLength = useMemo(() => React.Children.count(children), [children])

  useEffect(() => {
    setFiles(childrenLength)
  }, [childrenLength])

  if (!childrenLength) return null
  return (
    <Columns className={classesFiles} scrollable ref={ref} gap={GapSize.FOUR}>
      {children}
    </Columns>
  )
})

PromptFiles.displayName = ComponentName.PromptFiles
export default PromptFiles
