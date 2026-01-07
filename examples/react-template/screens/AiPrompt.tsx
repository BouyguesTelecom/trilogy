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
import { useState } from 'react'

export const AiPromptScreen = () => {
  const [transcribedText, setTranscribedText] = useState('')
  const [isListening, setIsListening] = useState(false)

  const handleSpeechStart = () => {
    setIsListening(true)
  }

  const handleSpeechResult = (text: string) => {
    setTranscribedText(text)
  }

  const handleSpeechEnd = () => {
    setIsListening(false)
  }

  const handleSpeechError = (error: string) => {
    setIsListening(false)
    console.log(`Erreur: ${error}`)
  }

  return (
    <Section>
      <PromptAi>
        <PromptAiFiles />
        <PromptAiTextarea value={transcribedText} onChange={(e) => setTranscribedText(e.textareaValue)} />
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
          <PromptAiSubmit />
        </PromptAiToolbar>
      </PromptAi>
    </Section>
  )
}
