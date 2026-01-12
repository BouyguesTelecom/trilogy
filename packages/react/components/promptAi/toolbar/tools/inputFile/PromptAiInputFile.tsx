import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { PromptAiContext } from '@/components/promptAi/context'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptAiInputFileProps, PromptAiInputFileRef } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileRef, PromptAiInputFileProps>(
  ({ className, ...others }, ref) => {
    const classes = clsx('button is-ghost prompt_ai-toolbar-tool icon_only', className)
    const { setFiles } = useContext(PromptAiContext)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file)
        setFiles((prev) => [...prev, { type: 'image', name: file.name, src: imageUrl }])
      } else {
        setFiles((prev) => [...prev, { type: file.type, name: file.name }])
      }
      e.target.value = ''
    }

    return (
      <label htmlFor='promptAiUpload'>
        <span ref={ref} className={classes} {...others}>
          <Icon name={IconName.ATTACHMENT} />
        </span>
        <input type='file' style={{ display: 'none' }} id='promptAiUpload' onChange={handleFileChange} />
      </label>
    )
  },
)

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
