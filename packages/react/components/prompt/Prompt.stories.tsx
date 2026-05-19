import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import PromptComponent from './Prompt'
import { PromptFiles } from './files'
import { PromptFile } from './files/file'
import { PromptTextarea } from './textarea'
import { PromptToolbar } from './toolbar'
import { PromptMicrophone } from './toolbar/microphone'
import { PromptSubmit, PromptSubmitStatus } from './toolbar/submit'
import { PromptTools } from './toolbar/tools'
import { PromptSelect } from './toolbar/tools/select'
import { PromptSelectOption } from './toolbar/tools/select/options'

PromptComponent.displayName = 'Prompt'
Object.defineProperty(PromptComponent, 'name', { value: 'Prompt' })

interface PromptStoryArgs {
  disabled: boolean
  readOnly: boolean
  id: string
  className: string
  testId: string
  value: string
  placeholder: string
  textareaDisabled: boolean
  textareaReadOnly: boolean
  status: PromptSubmitStatus
  isListening: boolean
  selected: string
}

const Prompt = ({
  disabled,
  readOnly,
  id,
  className,
  testId,
  value,
  placeholder,
  textareaDisabled,
  textareaReadOnly,
  status,
  isListening,
  selected,
}: PromptStoryArgs): JSX.Element => {
  const [text, setText] = React.useState(value)
  const [selectedModel, setSelectedModel] = React.useState(selected)

  React.useEffect(() => {
    setText(value)
  }, [value])

  React.useEffect(() => {
    setSelectedModel(selected)
  }, [selected])

  return (
    <PromptComponent
      disabled={disabled}
      readOnly={readOnly}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    >
      <PromptFiles>
        <PromptFile name='invoice.pdf' type='pdf' src='https://example.com/invoice.pdf' />
      </PromptFiles>

      <PromptTextarea
        value={text}
        placeholder={placeholder}
        disabled={textareaDisabled}
        readOnly={textareaReadOnly}
        onChange={(e) => setText(e.textareaValue || '')}
      />

      <PromptToolbar>
        <PromptTools>
          <PromptSelect
            selected={selectedModel}
            onChange={(e: any) => {
              setSelectedModel(e.selectValue)
            }}
          >
            <PromptSelectOption id='id_one' value='claude' label='Claude Sonnet' iconName='tri-bell' />
            <PromptSelectOption id='id_two' value='gemini' label='Gemini' iconName='tri-bell' />
            <PromptSelectOption id='id_three' value='gpt' label='GPT' iconName='tri-bell' />
          </PromptSelect>
        </PromptTools>

        <PromptMicrophone isListening={isListening} onClick={() => undefined} />
        <PromptSubmit status={status} onSubmit={() => undefined} onCancelSubmit={() => undefined} />
      </PromptToolbar>
    </PromptComponent>
  )
}

Prompt.displayName = 'Prompt'

const meta: Meta<PromptStoryArgs> = {
  title: 'Components/Prompt',
  component: Prompt,
  subcomponents: {
    PromptComponent,
    PromptFiles,
    PromptFile,
    PromptTextarea,
    PromptToolbar,
    PromptTools,
    PromptSelect,
    PromptSelectOption,
    PromptMicrophone,
    PromptSubmit,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable the whole prompt',
      table: { category: 'Prompt' },
    },
    readOnly: {
      control: 'boolean',
      name: 'readOnly',
      description: 'Set the prompt in read-only mode',
      table: { category: 'Prompt' },
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Prompt' },
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Prompt' },
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Prompt' },
    },
    value: {
      control: 'text',
      name: 'value',
      description: 'Textarea value',
      table: { category: 'PromptTextarea' },
    },
    placeholder: {
      control: 'text',
      name: 'placeholder',
      description: 'Textarea placeholder',
      table: { category: 'PromptTextarea' },
    },
    textareaDisabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable textarea only',
      table: { category: 'PromptTextarea' },
    },
    textareaReadOnly: {
      control: 'boolean',
      name: 'readOnly',
      description: 'Set textarea in read-only mode only',
      table: { category: 'PromptTextarea' },
    },
    status: {
      control: 'select',
      options: Object.values(PromptSubmitStatus),
      name: 'status',
      description: 'Prompt submit status',
      table: { category: 'PromptSubmit' },
    },
    isListening: {
      control: 'boolean',
      name: 'isListening',
      description: 'Display microphone listening state',
      table: { category: 'PromptMicrophone' },
    },
    selected: {
      control: 'select',
      options: ['claude', 'gemini', 'gpt'],
      name: 'selected',
      description: 'Selected model in PromptSelect',
      table: { category: 'PromptSelect' },
    },
  },
  args: {
    disabled: false,
    readOnly: false,
    id: '',
    className: '',
    testId: 'prompt-default',
    value: '',
    placeholder: 'Ask anything...',
    textareaDisabled: false,
    textareaReadOnly: false,
    status: PromptSubmitStatus.STREAMING_OFF,
    isListening: false,
    selected: 'gemini',
  },
  render: ({
    disabled,
    readOnly,
    id,
    className,
    testId,
    value,
    placeholder,
    textareaDisabled,
    textareaReadOnly,
    status,
    isListening,
    selected,
  }) => {
    const [text, setText] = React.useState(value)
    const [selectedModel, setSelectedModel] = React.useState(selected)

    React.useEffect(() => {
      setText(value)
    }, [value])

    React.useEffect(() => {
      setSelectedModel(selected)
    }, [selected])

    return (
      <PromptComponent
        disabled={disabled}
        readOnly={readOnly}
        id={id || undefined}
        className={className || undefined}
        testId={testId || undefined}
      >
        <PromptFiles>
          <PromptFile name='invoice.pdf' type='pdf' src='https://example.com/invoice.pdf' />
        </PromptFiles>

        <PromptTextarea
          value={text}
          placeholder={placeholder}
          disabled={textareaDisabled}
          readOnly={textareaReadOnly}
          onChange={(e) => setText(e.textareaValue || '')}
        />

        <PromptToolbar>
          <PromptTools>
            <PromptSelect
              selected={selectedModel}
              onChange={(e: any) => {
                setSelectedModel(e.selectValue)
              }}
            >
              <PromptSelectOption id='id_one' value='claude' label='Claude Sonnet' iconName='tri-bell' />
              <PromptSelectOption id='id_two' value='gemini' label='Gemini' iconName='tri-bell' />
              <PromptSelectOption id='id_three' value='gpt' label='GPT' iconName='tri-bell' />
            </PromptSelect>
          </PromptTools>

          <PromptMicrophone isListening={isListening} onClick={() => undefined} />
          <PromptSubmit status={status} onSubmit={() => undefined} onCancelSubmit={() => undefined} />
        </PromptToolbar>
      </PromptComponent>
    )
  },
}

export default meta
type Story = StoryObj<PromptStoryArgs>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
}

export const Streaming: Story = {
  args: {
    status: PromptSubmitStatus.STREAMING_ON,
  },
}

export const Listening: Story = {
  args: {
    isListening: true,
  },
}

export const WithValue: Story = {
  args: {
    value: 'Explain this architecture and provide an implementation plan.',
  },
}

export const Playground: Story = {}
