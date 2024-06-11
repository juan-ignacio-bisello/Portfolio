import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import './index.css' ;
import '@fontsource-variable/onest';
import { PortfolioApp } from './PortfolioApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <PortfolioApp />
  </React.StrictMode>,
)
