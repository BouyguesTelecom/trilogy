import Prompt from '@/components/prompt/Prompt'
import { PromptFiles } from '@/components/prompt/files'
import { PromptFile } from '@/components/prompt/files/file'
import { PromptTextarea } from '@/components/prompt/textarea'
import { PromptToolbar } from '@/components/prompt/toolbar'
import { PromptMicrophone } from '@/components/prompt/toolbar/microphone'
import { PromptSubmit } from '@/components/prompt/toolbar/submit'
import { PromptTools } from '@/components/prompt/toolbar/tools'
import { PromptButton } from '@/components/prompt/toolbar/tools/button'
import { PromptInputFile } from '@/components/prompt/toolbar/tools/inputFile'
import { PromptSelect } from '@/components/prompt/toolbar/tools/select'
import { PromptSelectOption } from '@/components/prompt/toolbar/tools/select/options'

export {
  Prompt,
  PromptButton,
  PromptFile,
  PromptFiles,
  PromptInputFile,
  PromptMicrophone,
  PromptSelect,
  PromptSelectOption,
  PromptSubmit,
  PromptTextarea,
  PromptToolbar,
  PromptTools,
}

export * from './PromptProps'
