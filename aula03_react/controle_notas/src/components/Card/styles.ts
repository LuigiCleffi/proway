import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.darker}; 
  color: ${(props) => props.theme.lightest}; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: ${(props) => props.theme.medium};
  width: 300px;
`;