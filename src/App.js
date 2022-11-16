import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
   palette: {
     mode: 'dark',
   },
 });

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
      </ThemeProvider>
   );
}


export default App;
