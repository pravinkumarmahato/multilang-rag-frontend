// import React from 'react';
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // <-- Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <HashRouter>
    <App />
  </HashRouter>
);
