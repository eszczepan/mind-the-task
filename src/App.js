import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainTemplate from './templates/MainTemplate';
import Box from './components/organisms/Box';
import Heading from './components/atoms/Heading';
import Button from './components/atoms/Button';
import AddItemBar from './components/organisms/AddItemBar';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Provider store={store}>
      <MainTemplate>
        <>
          <Heading>MindTheTask</Heading>
          <div style={{ zIndex: '300' }}>
            <Button open isVisible={isVisible} onClick={() => setIsVisible(!isVisible)}>
              +
            </Button>
          </div>
          <Box />
          <AddItemBar isVisible={isVisible} />
        </>
      </MainTemplate>
    </Provider>
  );
};

export default App;
