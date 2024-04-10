import { Button } from '../../packages/react'

function App() {
  return (
    <>
      <div>
        <h1>My React App</h1>
        <Button onClick={() => alert('Hello!')}>Click me!</Button>
      </div>
    </>
  )
}

export default App
