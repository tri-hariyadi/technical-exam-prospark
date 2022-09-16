import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';

const App = () => (
  <SafeAreaProvider>
    <Routes />
  </SafeAreaProvider>
);

export default App;
