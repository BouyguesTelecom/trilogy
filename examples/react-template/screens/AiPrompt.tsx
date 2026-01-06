import { Button, Section, Select, SelectOption, Textarea } from '@trilogy-ds/react/components'

export const AiPromptScreen = () => {
  return (
    <Section>
      <PromptAi />
    </Section>
  )
}

const PromptAi = () => {
  const handleTextareaChange = (e) => {
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  return (
    <div className='prompt_ai'>
      <Textarea className='prompt_ai-textarea' onInput={handleTextareaChange} placeholder='Placeholder' />
      <div className='prompt_ai-toolbar'>
        <Button
          iconName='tri-arrow-down'
          className='prompt_ai-toolbar-button prompt_ai-toolbar-item icon-only'
          variant='GHOST'
        />
        <Select className='prompt_ai-toolbar-select prompt_ai-toolbar-item'>
          <SelectOption>Claude Sonnet</SelectOption>
          <SelectOption>Gemini 3</SelectOption>
        </Select>
        <Button
          variant='GHOST'
          iconName='tri-arrow-up'
          className='prompt_ai-toolbar-button prompt_ai-toolbar-item icon-only self-end'
        />
      </div>
    </div>
  )
}
