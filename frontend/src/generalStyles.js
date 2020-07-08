import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  margin: 0 auto;
  padding: 12px;

  font-size: ${({ size }) => size || '2em'};
  color: ${({ theme }) => theme.color};
`;

export const ErrorMessage = styled.p`
  padding: 4px;
  color: lightcoral;
  font-weight: bold;
`;
