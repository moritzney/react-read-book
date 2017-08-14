import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bookApp from './Book/Reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
