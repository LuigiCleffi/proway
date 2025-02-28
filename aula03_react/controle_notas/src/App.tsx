import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <Card>
          <h1>Este é um Card</h1>
          <p>O tema atual é aplicado aqui!</p>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;