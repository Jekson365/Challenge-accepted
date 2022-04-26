import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/home/Main';
import './styles/style.css'
import 'swiper/css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);


