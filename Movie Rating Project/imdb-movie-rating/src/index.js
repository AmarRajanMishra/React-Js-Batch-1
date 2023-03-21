import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { MovieDataProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieDataProvider>
    <App />
    </MovieDataProvider>
    
  </React.StrictMode>
);


