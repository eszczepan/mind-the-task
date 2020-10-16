import styled from 'styled-components';

const Label = styled.label`
  @media (max-width: 580px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default Label;
