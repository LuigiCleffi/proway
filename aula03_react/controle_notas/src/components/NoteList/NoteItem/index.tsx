import React from 'react';
import { Note } from '../../../contexts/NoteProvider';
import {
  NoteItemContainer,
  StudentName,
  Grade,
  Description,
  Input,
  TextArea,
  Button,
  EditFormContainer,
  LabeledInput,
  ButtonGroup,
} from '../../shared/styles/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNote } from '../../../hooks/useNote';
import { NoteFormData, noteSchema } from '../../shared/validations/noteFormData';

interface NoteItemProps {
  note: Note;
}

function NoteItem({ note }: NoteItemProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const { editNote, deleteNote } = useNote();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      nome: note.nome,
      nota: note.nota,
      descricao: note.descricao || '',
    },
  });

  const onSubmit: SubmitHandler<NoteFormData> = (data) => {
    editNote(note.id, data);
    setIsEditing(false);
    reset();
  };

  return (
    <NoteItemContainer>
      {isEditing ? (
        <EditFormContainer onSubmit={handleSubmit(onSubmit)}>
          {/* Campo de nome */}
          <LabeledInput>
            <label htmlFor="nome">Nome</label>
            <Input
              id="nome"
              type="text"
              placeholder="Nome"
              {...register('nome')}
            />
            {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}
          </LabeledInput>

          {/* Campo de nota */}
          <LabeledInput>
            <label htmlFor="nota">Nota (0-10)</label>
            <Input
              id="nota"
              type="number"
              placeholder="Nota (0-10)"
              {...register('nota', { valueAsNumber: true })}
            />
            {errors.nota && <p style={{ color: 'red' }}>{errors.nota.message}</p>}
          </LabeledInput>

          {/* Área de descrição */}
          <LabeledInput>
            <label htmlFor="descricao">Descrição (opcional)</label>
            <TextArea
              id="descricao"
              placeholder="Descrição (opcional)"
              rows={4}
              {...register('descricao')}
            />
            {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}
          </LabeledInput>

          {/* Botões de ação */}
          <ButtonGroup>
            <Button type="submit">Salvar</Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </ButtonGroup>
        </EditFormContainer>
      ) : (
        <>
          {/* Nome à esquerda */}
          <div>
            <label htmlFor="student-name">Nome:</label>
            <StudentName id='student-name'>{note.nome}</StudentName>
          </div>

          {/* Nota à direita */}
          <div>
            <label htmlFor="grade">Nota: </label>
            <Grade isPassing={note.nota >= 7} id="grade">{note.nota}</Grade>
          </div>


          {/* Descrição abaixo */}
          {note.descricao && <Description>{note.descricao}</Description>}

          {/* Botões de ação */}
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
          <Button onClick={() => deleteNote(note.id)}>Excluir</Button>
        </>
      )}
    </NoteItemContainer>
  );
}

export default NoteItem;