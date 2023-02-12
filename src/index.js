import React from 'react';
import ReactDOM from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import 'rsuite-table/dist/css/rsuite-table.css';
import './css/tailwind.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
