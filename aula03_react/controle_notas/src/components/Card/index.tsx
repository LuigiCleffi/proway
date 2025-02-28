import { StyledCard } from "./styles";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
