import { DirectiveProvider } from '@/context/directiveProvider/providerDirective'
import { Title } from '@trilogy-ds/react/components/title'

export default function Home() {
  return (
    <div>
      <DirectiveProvider directiveRendering='server'>
        <Title>Je suis un titre SSR ou CSR, c'est toi qui voit!</Title>
      </DirectiveProvider>
    </div>
  )
}
