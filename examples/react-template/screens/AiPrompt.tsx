import {
  PromptAi,
  PromptAiFiles,
  PromptAiMicrophone,
  PromptAiSelect,
  PromptAiSubmit,
  PromptAiTextarea,
  PromptAiToolbar,
  PromptAiTools,
  Section,
  SelectOption,
} from '@trilogy-ds/react/components'
import { PromptAiProvider } from '@trilogy-ds/react/components/promptAi/context'
import { PromptAiSubmitStatus } from '@trilogy-ds/react/components/promptAi/toolbar/submit'
import { useCallback, useState } from 'react'
import { InputFile } from '../components'

export const AiPromptScreen = () => {
  return (
    <Section>
      <PromptAiProvider>
        <PromptAiView />
      </PromptAiProvider>
    </Section>
  )
}

const PromptAiView = () => {
  const [text, setText] = useState<string>('')
  const [isListening, setIsListening] = useState<boolean>(false)
  const [status, setStatus] = useState<PromptAiSubmitStatus>(PromptAiSubmitStatus.STREAMING_OFF)
  const [selectValue, setSelectValue] = useState<string>('opt_one')

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

  const handleSubmit = useCallback(() => {
    if (!text) return
    console.log('Submitting text:', text)
    setText('')
    setStatus(PromptAiSubmitStatus.STREAMING_ON)
    setTimeout(() => {
      setStatus(PromptAiSubmitStatus.STREAMING_OFF)
    }, 4000)
  }, [text])

  return (
    <PromptAi>
      <PromptAiFiles />
      <PromptAiTextarea value={text} onChange={(e) => setText(e.textareaValue)} />
      <PromptAiToolbar>
        <PromptAiTools>
          <InputFile />
          <PromptAiSelect
            selected={selectValue}
            onChange={(e: any) => {
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
        <PromptAiSubmit status={status} onSubmit={handleSubmit} onCancelSubmit={handleCancelSubmit} />
      </PromptAiToolbar>
    </PromptAi>
  )
}
