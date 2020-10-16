import styled from 'styled-components';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Encode Sans Expanded', sans-serif;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 1px solid ${({ theme, invalid }) => (invalid ? theme.red : theme.blue)};
  @media (max-width: 580px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default Input;
