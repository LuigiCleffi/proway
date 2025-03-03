// src/components/shared/styles.ts
import styled from 'styled-components';

// Container genérico (usado para formulários ou listas)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: ${props => props.theme.lightest};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Campo de entrada genérico (input ou textarea)
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.medium};
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${props => props.theme.dark};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.medium};
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${props => props.theme.dark};
    outline: none;
  }
`;

// Botão genérico
export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: ${props => props.theme.lightest};
  background-color: ${props => props.theme.dark};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.darkest};
  }

  & + & {
    margin-left: 8px;
  }
`;

// Container do item de nota
export const NoteItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto; // Nome à esquerda, nota à direita
  gap: 8px; // Espaçamento entre os elementos
  align-items: center; // Alinha verticalmente os itens
  padding: 16px;
  background-color: ${props => props.theme.lighter};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px; // Espaçamento entre as notas
`;

// Título da nota
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.darker};
`;

// Conteúdo da nota
export const Content = styled.p`
  font-size: 14px;
  color: ${props => props.theme.dark};
`;

// Container do grid
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Colunas responsivas
  gap: 16px; // Espaçamento entre os itens
  margin-top: 16px; // Espaçamento acima do grid
`;

// Estilo para a descrição
export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.dark};
  grid-column: span 2; // Ocupa toda a largura do grid
  margin-top: 8px; // Espaçamento abaixo do nome e da nota
`;

// Estilo para o nome do aluno
export const StudentName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.darker};
`;

// Estilo para a nota
export const Grade = styled.span<{ isPassing: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ isPassing }) => (isPassing ? 'green' : 'red')};
`;

export const EditFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
  background-color: ${props => props.theme.lightest};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
