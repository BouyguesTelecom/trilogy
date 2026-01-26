import {
  Prompt,
  PromptFile,
  PromptFiles,
  PromptMicrophone,
  PromptSelect,
  PromptSubmit,
  PromptTextarea,
  PromptToolbar,
  PromptTools,
  Section,
  SelectOption,
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

  const handleSpeechStart = () => {
    setIsListening(true)
  }

  const handleSpeechResult = (text: string) => {
    setText(text)
  }

  const handleSpeechEnd = () => {
    setIsListening(false)
  }

  const handleSpeechError = (error: string) => {
    setIsListening(false)
    console.log(`Erreur: ${error}`)
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
              <SelectOption id='id_one' value='opt_one' label='Claude Sonnet' iconName='tri-bell' />
              <SelectOption id='id_two' value='id_two' label='Gemini' iconName='tri-bell' />
              <SelectOption id='id_three' value='id_three' label='Gémini 2.5 Flash Preview 06 17' iconName='tri-bell' />
            </PromptSelect>
          </PromptTools>

          <PromptMicrophone
            onSpeechStart={handleSpeechStart}
            onSpeechResult={handleSpeechResult}
            onSpeechEnd={handleSpeechEnd}
            onSpeechError={handleSpeechError}
            language='fr-FR'
          />
          <PromptSubmit status={status} onSubmit={handleSubmit} onCancelSubmit={handleCancelSubmit} />
        </PromptToolbar>
      </Prompt>
    </Section>
  )
}
