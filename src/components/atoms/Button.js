import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ pagination }) =>
    pagination &&
    css`
      padding: 0.5rem 2rem;
      background-color: transparent;
      border: none;
    `}
`;

export default Button;
