import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import './config/reactotronConfig';
import GlobalStyle from './styles/Global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
