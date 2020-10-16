import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, isVisible }) => (isVisible ? theme.red : theme.blue)};
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  ${({ pagination }) =>
    pagination &&
    css`
      font-size: 1.6rem;
      padding: 0.5rem 1.5rem;
      background-color: transparent;
      color: black;
      border: none;
      @media (max-width: 580px) {
        padding: 0.5rem 1rem;
      }
      @media (max-width: 450px) {
        padding: 0.5rem 0.7rem;
      }
    `}
  ${({ open }) =>
    open &&
    css`
      height: 5rem;
      width: 5rem;
      font-size: 2rem;
      display: block;
      margin: 3rem auto;
      border: none;
      border-radius: 50%;
      z-index: 200;
      @media (max-width: 580px) {
        margin: 2rem auto;
      }
      @media (max-width: 450px) {
        height: 4rem;
        width: 4rem;
      }
    `}
  ${({ add }) =>
    add &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      background-color: ${({ theme }) => theme.blue};
      width: 70%;
      padding: 1.5rem;
      border: none;
      border-radius: 20px;
      @media (max-width: 1200px) {
        width: 80%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 580px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 0.9rem;
      }
      @media (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    `}
`;

export default Button;
