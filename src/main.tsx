import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // <-- Import Tailwind CSS
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
