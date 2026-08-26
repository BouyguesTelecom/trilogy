import Prompt from '@/components/prompt/Prompt'
import { PromptFiles } from '@/components/prompt/files/index'
import { PromptFile } from '@/components/prompt/files/file/index'
import { PromptTextarea } from '@/components/prompt/textarea/index'
import { PromptToolbar } from '@/components/prompt/toolbar/index'
import { PromptMicrophone } from '@/components/prompt/toolbar/microphone/index'
import { PromptSubmit } from '@/components/prompt/toolbar/submit/index'
import { PromptTools } from '@/components/prompt/toolbar/tools/index'
import { PromptButton } from '@/components/prompt/toolbar/tools/button/index'
import { PromptInputFile } from '@/components/prompt/toolbar/tools/inputFile/index'
import { PromptSelect } from '@/components/prompt/toolbar/tools/select/index'
import { PromptSelectOption } from '@/components/prompt/toolbar/tools/select/options/index'

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
