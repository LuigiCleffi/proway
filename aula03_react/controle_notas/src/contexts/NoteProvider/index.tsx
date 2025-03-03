
import React, { createContext, useState } from 'react';
// Tipos para as notas
interface Note {
  id: string;
  nome: string;
  nota: number;
  descricao?: string;
}

// Tipos para o contexto
interface NoteContextType {
  notes: Note[];
  addNote: (note: Omit<Note, 'id'>) => void;
  editNote: (id: string, updatedNote: Omit<Note, 'id'>) => void;
  deleteNote: (id: string) => void;
}

// Criando o contexto
const NoteContext = createContext({} as NoteContextType);

function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  // Função para adicionar uma nova nota
  const addNote = ({ nome, descricao, nota }: Omit<Note, 'id'>) => {
    const newNote: Note = {
      id: Date.now().toString(),
      nome,
      descricao,
      nota
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Função para editar uma nota existente
  const editNote = (id: string, updatedNote: Omit<Note, 'id'>) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  // Função para excluir uma nota
  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const value: NoteContextType = {
    notes,
    addNote,
    editNote,
    deleteNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export {
  type Note,
  type NoteContextType,
  NoteContext,
  NoteProvider
}