import {
  PromptAi,
  PromptAiFiles,
  PromptAiInputFile,
  PromptAiMicrophone,
  PromptAiSelect,
  PromptAiSubmit,
  PromptAiTextarea,
  PromptAiToolbar,
  PromptAiTools,
  Section,
  SelectOption,
} from '@trilogy-ds/react/components'
import { IPromptAiFile } from '@trilogy-ds/react/components/promptAi/context'
import { PromptAiSubmitStatus } from '@trilogy-ds/react/components/promptAi/toolbar/submit'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export const AiPromptScreen = () => {
  const [text, setText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [status, setStatus] = useState<PromptAiSubmitStatus>(PromptAiSubmitStatus.STREAMING_OFF)
  const [selectValue, setSelectValue] = useState('id_two')
  const [images, setImages] = useState<IPromptAiFile[]>([])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.canceled)
      setImages((prev) => [
        ...prev,
        {
          type: result.assets[0].type,
          name: result.assets[0].fileName,
          src: result.assets[0].uri,
        },
      ])
  }

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

  const handleSubmit = () => {
    if (!text) return
    setText('')
    setStatus(PromptAiSubmitStatus.STREAMING_ON)
    setTimeout(() => {
      setStatus(PromptAiSubmitStatus.STREAMING_OFF)
    }, 4000)
  }

  return (
    <Section>
      <PromptAi onSubmit={handleSubmit}>
        <PromptAiFiles files={images} />
        <PromptAiTextarea value={text} onChange={(e) => setText(e.textareaValue)} />
        <PromptAiToolbar>
          <PromptAiTools>
            <PromptAiInputFile onClick={pickImage} />
            <PromptAiSelect
              selected={selectValue}
              onChange={(e) => {
                setSelectValue(e.selectValue)
              }}
            >
              <SelectOption id='id_one' value='opt_one' label='Claude Sonnet' iconName='tri-bell' />
              <SelectOption id='id_two' value='id_two' label='Gemini' iconName='tri-bell' />
            </PromptAiSelect>
          </PromptAiTools>
          <PromptAiMicrophone
            onSpeechStart={handleSpeechStart}
            onSpeechResult={handleSpeechResult}
            onSpeechEnd={handleSpeechEnd}
            onSpeechError={handleSpeechError}
            language='fr-FR'
          />
          <PromptAiSubmit status={status} />
        </PromptAiToolbar>
      </PromptAi>
    </Section>
  )
}
