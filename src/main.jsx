import React from 'react' ;
import ReactDOM from 'react-dom/client' ;
import './index.css' ;
import { Header } from './components/Header.jsx' ;
import '@fontsource-variable/onest';
import { Presentation } from './components/Presentation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Header className='flex justify-center' />
    <Presentation className='text-white text-5xl font-bold flex justify-center flex-row' />
  </React.StrictMode>,
)
