import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {HashRouter} from "react-router-dom";
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
         <HashRouter basename={process.env.PUBLIC_URL}>
            <BaseLayout/>
         </HashRouter>
      </div>
      </ThemeProvider>
   );
}


export default App;
