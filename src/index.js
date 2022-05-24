import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes.js';



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>   
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


