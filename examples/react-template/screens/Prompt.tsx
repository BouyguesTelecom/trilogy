import {
  Prompt,
  PromptFile,
  PromptFiles,
  PromptMicrophone,
  PromptSelect,
  PromptSelectOption,
  PromptSubmit,
  PromptTextarea,
  PromptToolbar,
  PromptTools,
  Section,
} from '@trilogy-ds/react/components'
import { PromptSubmitStatus } from '@trilogy-ds/react/components/prompt/toolbar/submit'
import { useState } from 'react'
import { InputFile } from '../components'
import usePickImage from '../hooks/pickImage/pickImage'

export const PromptScreen = () => {
  const [text, setText] = useState<string>('')
  const [isListening, setIsListening] = useState<boolean>(false)
  const [status, setStatus] = useState<PromptSubmitStatus>(PromptSubmitStatus.STREAMING_OFF)
  const [selectValue, setSelectValue] = useState<string>('id_two')
  const { files, pickFile, pickImage, deleteFile, deleteAllFiles, handleFileChange } = usePickImage()

  const onPressVoice = () => {
    setIsListening(true)
    setTimeout(() => {
      setText('Hello, this is voice api simulation.')
      setIsListening(false)
    }, 1000)
  }

  const handleCancelSubmit = () => {
    console.log(`STOP`)
  }

  const handleSubmit = () => {
    if (!text && !!!files.length) return
    console.log('Submitting text:', text)
    setText('')
    deleteAllFiles()
    setStatus(PromptSubmitStatus.STREAMING_ON)
    setTimeout(() => {
      setStatus(PromptSubmitStatus.STREAMING_OFF)
    }, 4000)
  }

  return (
    <Section>
      <Prompt>
        <PromptFiles>
          {files.map((file, key) => {
            return (
              <PromptFile key={key} name={file.name} src={file.src} type={file.type} onDelete={() => deleteFile(key)} />
            )
          })}
        </PromptFiles>
        <PromptTextarea value={text} onChange={(e) => setText(e.textareaValue)} placeholder='Placeholder' />
        <PromptToolbar>
          <PromptTools>
            <InputFile pickImage={pickImage} pickFile={pickFile} onClick={handleFileChange} />
            <PromptSelect
              selected={selectValue}
              onChange={(e: any) => {
                setSelectValue(e.selectValue)
              }}
            >
              <PromptSelectOption id='id_one' value='opt_one' label='Claude Sonnet' iconName='tri-bell' />
              <PromptSelectOption id='id_two' value='id_two' label='Gemini' iconName='tri-bell' />
              <PromptSelectOption
                id='id_three'
                value='id_three'
                label='Gémini 2.5 Flash Preview 06 17'
                iconName='tri-bell'
              />
            </PromptSelect>
          </PromptTools>

          <PromptMicrophone isListening={isListening} onClick={onPressVoice} />
          <PromptSubmit status={status} onSubmit={handleSubmit} onCancelSubmit={handleCancelSubmit} />
        </PromptToolbar>
      </Prompt>
    </Section>
  )
}
