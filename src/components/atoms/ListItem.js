import styled from 'styled-components';

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  background-color: ${({ theme, header }) => (header ? theme.thColor : theme.white)};
  color: ${({ theme, header }) => (header ? theme.white : theme.black)};
  padding: ${({ header }) => (header ? '2rem 1.5rem' : '2.5rem 1.5rem')};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  position: relative;
  @media (max-width: 580px) {
    grid-template-columns: 2fr 1fr 1fr;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default ListItem;
