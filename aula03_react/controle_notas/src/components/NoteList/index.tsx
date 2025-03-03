import { useNote } from '../../hooks/useNote';
import NoteItem from './NoteItem';
import {
  Container,
  Title,
  Content,
  GridContainer,
} from '../shared/styles/Form';

function NoteList() {
  const { notes } = useNote();

  return (
    <Container style={{ marginTop: 32 }}>
      {/* Título da lista de notas */}
      <Title>Notas</Title>

      {/* Grid de notas */}
      {notes.length > 0 ? (
        <GridContainer>
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </GridContainer>
      ) : (
        <Content>Nenhuma nota encontrada.</Content>
      )}
    </Container>
  );
}

export default NoteList;