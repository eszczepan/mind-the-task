import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 3.2rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.thColor};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ${({ bar }) =>
    bar &&
    css`
      @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.l};
      }

      @media (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    `}
`;

export default Heading;
