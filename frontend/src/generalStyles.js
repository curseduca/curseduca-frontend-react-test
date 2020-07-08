import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  padding: 12px;

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: ${({ size }) => size || '2em'};
  
  color: ${({ theme }) => theme.color};
`;
