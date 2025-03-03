import { z } from 'zod';

export const noteSchema = z.object({
  nome: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  nota: z.coerce.number().min(0, "A nota deve ser um número entre 0 e 10").max(10),
  descricao: z.string().optional()
});

export type NoteFormData = z.infer<typeof noteSchema>;