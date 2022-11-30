import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Pages from './pages/Pages';
import Contact from './contact/Contact'
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes } from "react-router-dom";
import {Box, Grid} from "@mui/material";
import ParticlesBackground from './ParticlesBackground';
import Footer from './footer/Footer'

export default function BaseLayout() {
   // default darkmode / lightmode state
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light} >
         <ParticlesBackground />
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/papers'} element={<Pages/>}/>
                  <Route exact path={'/papers/:id'} element={<Pages/>}/>
                  <Route exact path={'/papers/'} element={<Pages/>}/>
                  <Route exact path={'/contact/'} element={<Contact/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <Footer />
               </Box>
            </Grid>
         </Grid>
        
      </Box>
   )
}

