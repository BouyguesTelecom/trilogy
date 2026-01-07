import {
  PromptAi,
  PromptAiInputFile,
  PromptAiSelect,
  PromptAiSubmit,
  PromptAiTextarea,
  PromptAiToolbar,
  PromptAiTools,
  Section,
  SelectOption,
} from '@trilogy-ds/react/components'

export const AiPromptScreen = () => {
  return (
    <Section>
      <PromptAi>
        <PromptAiTextarea />
        <PromptAiToolbar>
          <PromptAiTools>
            <PromptAiInputFile />
            <PromptAiSelect>
              <SelectOption>Claude Sonnet</SelectOption>
              <SelectOption>Gemini 3</SelectOption>
            </PromptAiSelect>
          </PromptAiTools>
          <PromptAiSubmit />
        </PromptAiToolbar>
      </PromptAi>
    </Section>
  )
}
