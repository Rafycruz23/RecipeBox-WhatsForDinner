import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css" 
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //Only the App component needs to be rendered here as it will contain all of the other components. The BrowserRouter tags need to wrap around the App component to allow routing to work
  <React.StrictMode>
    <BrowserRouter>
      
      <App />
      
    </BrowserRouter>
  </React.StrictMode>
);


