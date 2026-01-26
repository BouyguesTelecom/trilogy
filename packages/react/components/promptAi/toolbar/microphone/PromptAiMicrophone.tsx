import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { PromptAiContext } from '../../context'
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
    const { text } = useContext(PromptAiContext)
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

      recognition.onstart = (e: Event) => {
        setState('listening')
        onSpeechStart?.(e)
        recognition.stop()
      }

      recognition.onspeechend = (e) => {
        setState('initial')
        onSpeechEnd?.(e)
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
    }, [language, onSpeechResult, onSpeechEnd, onSpeechError, isSupported])

    const handleClick = useCallback(() => {
      if (disabled || !isSupported) return
      const recognition = recognitionRef.current
      if (!recognition) return

      if (state === 'listening') {
        setState('initial')
        recognition.stop()
      } else {
        setState('listening')
        recognition.start()
      }
    }, [state, disabled, isSupported, onSpeechError])

    const classes = clsx(
      'prompt_ai-toolbar-tool prompt_ai-toolbar-microphone icon_only',
      state === 'listening' && 'active',
      className,
    )

    if (text.length > 0) {
      return null
    }

    return (
      <Button
        ref={ref}
        iconName={IconName.MICRO}
        className={classes}
        variant={ButtonVariant.GHOST}
        onClick={handleClick}
        disabled={disabled || !isSupported}
        {...others}
      />
    )
  },
)

PromptAiMicrophone.displayName = ComponentName.PromptAiMicrophone
export default PromptAiMicrophone
