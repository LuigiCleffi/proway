import { ThemeProvider } from 'styled-components';
import { Card } from './components/Card';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global'
import { NoteProvider } from './contexts/NoteProvider';
import NoteList from './components/NoteList';
import { AddNoteForm } from './components/Forms/AddNote';

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

      <NoteProvider>
        <div style={{ padding: '20px' }}>
          <h1>Gerenciador de Notas</h1>
          <AddNoteForm />
          <NoteList />
        </div>
      </NoteProvider>
    </ThemeProvider>
  );
}

export default App;