//url=https://www.figma.com/design/du5IDsc76TxdC7vctI1h7I/Trilogy?node-id=35-22
import figma from "figma"

const instance = figma.selectedInstance
const children = instance.getString("Label")
const variant = instance.getEnum("variant", {
  primary: "primary",
  secondary: "secondary",
  ghost: "ghost",
  conversion: "conversion",
})

export default {
  id: "button",
  example: figma.code`
    <Button 
      variant={ButtonVariant.${variant}} 
    >
      ${children}
    </Button>
  `,
  imports: [
    "import { Button, ButtonVariant } from '@trilogy-ds/react/components/Button'",
  ],
  metadata: { nestable: true },
}
