import { GlobalStyle } from './styles/global'
import { Container, Line, HeaderBox, Canvas } from './style'
import Input from './components/Input'
import Display from './components/Display'
import { ContextProvider } from './context/Context'
import HelpButton from './components/Help'

function App() {
  return (
    <Canvas>
      <ContextProvider>
        <Container>
          <HelpButton />
          <HeaderBox>
            <h1>QUAL É O NÚMERO?</h1>
            <Line />
          </HeaderBox>
          <Display />
          <Input />
        </Container>

        {/* Providers */}
        <GlobalStyle />
      </ContextProvider>
    </Canvas>
  )
}

export default App
