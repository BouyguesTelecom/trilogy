import figma from "figma"

import { ButtonVariant } from "@/components/button/button.types"

const instance = figma.selectedInstance

export default {
  id: "https://www.figma.com/design/du5IDsc76TxdC7vctI1h7I/Untitled?node-id=35-22",

  imports: ["import { Button } from '@/components/Button'"],

  example: figma.code`
    <Button 
      variant="${instance.getEnum("Variant", ButtonVariant)}" 
      disabled=${instance.getBoolean("disabled")}
    >
      ${instance.getString("Text Content")}
    </Button>
  `,
}
