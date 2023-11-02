import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/global.css';
import './styles/fonts.css';
import App from './UI/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);