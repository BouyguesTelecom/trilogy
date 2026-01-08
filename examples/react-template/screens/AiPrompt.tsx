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
import { PromptAiSubmitStatus } from '@trilogy-ds/react/components/promptAi/toolbar/submit'
import { useState } from 'react'

export const AiPromptScreen = () => {
  const [text, setText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [status, setStatus] = useState<PromptAiSubmitStatus>(PromptAiSubmitStatus.STREAMING_OFF)

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
        <PromptAiFiles />
        <PromptAiTextarea value={text} onChange={(e) => setText(e.textareaValue)} />
        <PromptAiToolbar>
          <PromptAiTools>
            <PromptAiInputFile />
            <PromptAiSelect>
              <SelectOption>Claude Sonnet</SelectOption>
              <SelectOption>Gemini 3</SelectOption>
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
