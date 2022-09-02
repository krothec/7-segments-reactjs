import { GlobalStyle } from './styles/global'
import { Container, Line, HeaderBox } from './style'
import Input from './components/Input'
import Display from './components/Display'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <div>
      <ContextProvider>
        <Container>
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
    </div>
  )
}

export default App
