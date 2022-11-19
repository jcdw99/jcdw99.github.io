import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga4'

ReactGA.initialize('G-L0BHCMH3MW')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
