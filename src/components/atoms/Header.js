import styled from 'styled-components';

const Header = styled.h1`
  font-size: 3.2rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.thColor};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export default Header;
