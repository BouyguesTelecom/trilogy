import { TrilogyColor } from '@/objects'
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
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition'
import { useState } from 'react'
import { InputFile } from '../components'
import usePickImage from '../hooks/pickImage/pickImage'

export const PromptScreen = () => {
  const [text, setText] = useState<string>('')
  const [isListening, setIsListening] = useState<boolean>(false)
  const [status, setStatus] = useState<PromptSubmitStatus>(PromptSubmitStatus.STREAMING_OFF)
  const [selectValue, setSelectValue] = useState<string>('id_two')
  const { files, pickFile, pickImage, deleteFile, deleteAllFiles, handleFileChange } = usePickImage()
  const [recognizing, setRecognizing] = useState(false)
  const [transcript, setTranscript] = useState('')

  useSpeechRecognitionEvent('start', () => setRecognizing(true))
  useSpeechRecognitionEvent('end', () => setRecognizing(false))
  useSpeechRecognitionEvent('result', (event) => {
    setTranscript(event.results[0]?.transcript)
  })
  useSpeechRecognitionEvent('error', (event) => {
    console.log('===> ERRROOOR')
    console.log('error code:', event.error, 'error message:', event.message)
  })

  const handleStart = async () => {
    const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync()
    if (!result.granted) {
      console.warn('Permissions not granted', result)
      return
    }

    // Start speech recognition
    ExpoSpeechRecognitionModule.start({
      lang: 'en-US',
      interimResults: true,
      maxAlternatives: 1,
      continuous: false,
      requiresOnDeviceRecognition: false,
      addsPunctuation: false,
      contextualStrings: ['Carlsen', 'Nepomniachtchi', 'Praggnanandhaa'],
    })
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
    <Section backgroundColor={TrilogyColor.ACCENT}>
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

          <PromptMicrophone isListening={isListening} onClick={handleStart} />
          <PromptSubmit status={status} onSubmit={handleSubmit} onCancelSubmit={handleCancelSubmit} />
        </PromptToolbar>
      </Prompt>
    </Section>
  )
}
