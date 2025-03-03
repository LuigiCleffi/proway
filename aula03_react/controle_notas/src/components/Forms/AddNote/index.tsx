import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNote } from '../../../hooks/useNote';
import {
  Container,
  Input,
  TextArea,
  Button,
} from '../../shared/styles/Form';
import { noteSchema, NoteFormData } from '../../shared/validations/noteFormData';

function AddNoteForm() {
  const { addNote } = useNote();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
  });

  const onSubmit: SubmitHandler<NoteFormData> = (data) => {
    addNote(data);
    reset();
  };

  return (
    <Container as="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Campo de nome */}
      <Input
        type="text"
        placeholder="Nome"
        {...register('nome')}
      />
      {errors.nome && <p style={{ color: 'red' }}>{errors.nome.message}</p>}

      {/* Campo de nota */}
      <Input
        type="number"
        placeholder="Nota (0-10)"
        {...register('nota', { valueAsNumber: true })}
      />
      {errors.nota && <p style={{ color: 'red' }}>{errors.nota.message}</p>}

      {/* Área de descrição */}
      <TextArea
        placeholder="Descrição (opcional)"
        rows={4}
        {...register('descricao')}
      />
      {errors.descricao && <p style={{ color: 'red' }}>{errors.descricao.message}</p>}

      {/* Botão de envio */}
      <Button type="submit">Adicionar Nota</Button>
    </Container>
  );
}

export { AddNoteForm };