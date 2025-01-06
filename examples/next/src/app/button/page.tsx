import { Button, ButtonList, ButtonVariant } from '@trilogy-ds/react/lib/components/button'

export default function ButtonScreen() {
  return (
    <div>
      <main>
        <ButtonList>
          {Object.values(ButtonVariant).map((variant, index) => {
            return (
              <Button variant={variant} key={index}>
                {variant}
              </Button>
            )
          })}
        </ButtonList>
      </main>
    </div>
  )
}
