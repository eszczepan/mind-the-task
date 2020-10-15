import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './theme/GlobalStyle';
import Box from './components/Box';
import Form from './components/Form';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <StyledWrapper>
      <Box />
      <Form />
    </StyledWrapper>
  </Provider>
);

export default App;
