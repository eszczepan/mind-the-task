import styled, { css } from 'styled-components';

const Select = styled.select`
  margin-left: 1.5rem;
  padding: 0.3rem 3rem 0.3rem 0;
  border: none;
  @media (max-width: 450px) {
    margin-left: 0.5rem;
    padding: 0.3rem 0.5rem 0.3rem 0;
  }
  ${({ priority }) =>
    priority &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-family: 'Encode Sans Expanded', sans-serif;
      margin: 1.5rem 0 0;
      padding: 1rem;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.grey};
      @media (max-width: 580px) {
        padding: 0.5rem;
      }
    `}
`;

export default Select;
