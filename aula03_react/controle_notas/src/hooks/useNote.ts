import { useContext } from "react";
import { NoteContext } from "../contexts/NoteProvider";

export function useNote() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNote deve ser usado dentro de um NoteProvider");
  }
  return context;
}