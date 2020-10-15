import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainTemplate from './templates/MainTemplate';
import Box from './components/organisms/Box';
import Form from './components/organisms/Form';
import Header from './components/atoms/Header';

const App = () => (
  <Provider store={store}>
    <MainTemplate>
      <>
        <Header>MindTheTask</Header>
        <Box />
        <Form />
      </>
    </MainTemplate>
  </Provider>
);

export default App;
