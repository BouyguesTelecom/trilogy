import { Button } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import clsx from 'clsx'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PromptAiMicrophoneProps, PromptAiMicrophoneRef } from './PromptAiMicrophoneProps'

type SpeechRecognitionState = 'listening' | 'initial'

const PromptAiMicrophone = React.forwardRef<PromptAiMicrophoneRef, PromptAiMicrophoneProps>(
  (
    {
      className,
      onSpeechStart,
      onSpeechResult,
      onSpeechEnd,
      onSpeechError,
      language = 'fr-FR',
      disabled = false,
      ...others
    },
    ref,
  ) => {
    const [state, setState] = useState<SpeechRecognitionState>('initial')
    const recognitionRef = useRef<SpeechRecognition | null>(null)

    const SpeechRecognition = useMemo(() => window.SpeechRecognition || window.webkitSpeechRecognition, [])
    const isSupported = useMemo(() => !!SpeechRecognition, [])

    useEffect(() => {
      if (!isSupported) return onSpeechError?.('Incompatible')

      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.lang = language
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      recognition.onstart = () => {
        setState('listening')
        recognition.stop()
      }

      recognition.onspeechend = () => {
        setState('initial')
        recognition.stop()
      }

      recognition.onnomatch = () => {
        setState('initial')
        onSpeechError?.('Aucun mot reconnu')
      }

      recognition.onerror = (event) => {
        setState('initial')
        onSpeechError?.(`Erreur: ${event.error}`)
      }

      recognitionRef.current = recognition

      recognition.onresult = (event) => {
        setState('initial')
        const transcript = event.results[0][0].transcript
        onSpeechResult?.(transcript)
      }

      return () => recognition.abort()
    }, [language, onSpeechStart, onSpeechResult, onSpeechEnd, onSpeechError, isSupported])

    const handleClick = useCallback(() => {
      if (disabled || !isSupported) return
      const recognition = recognitionRef.current
      if (!recognition) return
      setState('listening')
      recognition.start()
    }, [state, disabled, isSupported, onSpeechError])

    const classes = clsx(
      'prompt_ai-toolbar-tool icon-only prompt_ai-toolbar-microphone',
      state === 'listening' && 'active',
      className,
    )

    return (
      <Button
        ref={ref}
        iconName='tri-micro'
        className={classes}
        variant='GHOST'
        onClick={handleClick}
        disabled={disabled || !isSupported}
        {...others}
      />
    )
  },
)

PromptAiMicrophone.displayName = ComponentName.PromptAiMicrophone
export default PromptAiMicrophone
