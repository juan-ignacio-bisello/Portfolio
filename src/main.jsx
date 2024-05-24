import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import './index.css' ;
import { Header } from './components/Header.jsx' ;
import '@fontsource-variable/onest';
import { Presentation } from './components/Presentation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Header class='flex justify-center' />
    <Presentation />
  </React.StrictMode>,
)
