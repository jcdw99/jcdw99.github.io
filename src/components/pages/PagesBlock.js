import React, { useState } from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {theme} from "../../info/Info";

function PagesBlock(props) {
   const {encrypt, preview, name, desc, width, height/*, github*/} = props;
   const [prevMode, updatePreview] = useState(true)

   return (

      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>   
         {/* This is the PDF rendering Box */}
         <Grid container fontSize={{xs: '2rem', md: '2.5rem'}} direction="column" alignItems="center" justifyContent="center" gap='.5rem'> 
            <Grid item xs={12} s={12} md={12}>
               <ToggleButtonGroup
                  color="primary"
                  value={prevMode}
                  exclusive
                  onChange={() => updatePreview(!prevMode)}
                  // style={{opacity:1}}
                  aria-label="Platform"
               >
                  <ToggleButton value={true} 
                     // style={{
                     //    backgroundColor: prevMode ? theme.activeButton: theme.inactiveButton, 
                     //    color:theme.backgroundColor
                     // }}>
                  >
                        Preview
                  </ToggleButton>
                  
                  <ToggleButton value={false} 
                     // style={{
                     //    backgroundColor: !prevMode ? theme.activeButton: theme.inactiveButton, 
                     //    color:theme.backgroundColor
                     // }}>
                  >
                        Full Paper
                  </ToggleButton>

               </ToggleButtonGroup>
            </Grid> 
            <Grid item xs={12} s={12} md={12}><Typography style={{color:theme.textColor}} sx={{ typography: { sm: 'h5', xs: 'h6' } }}> {name} </Typography> </Grid>
         </Grid>
         <Box component={'iframe'} src={prevMode ? preview : encrypt} alt={'mockup'} className={'page'} height={{xs: '30vh', md: '50vh'}} width={{xs: '100%', md: '90%'}}/>
         <Grid container margin={{xs:"0 0 5vh 0"}} height={{xs: 'auto', md: '31vh'}} width={{xs: '100%', md: '90%'}}>
            {/* This should be the description box */}
            <Grid item xs={12}  s={12} md={12} marginTop={'1vh'}>
                 <Paper style={{backgroundColor:theme.backgroundColor, color:theme.textColor, marginTop:'1rem'}} variant='outline' elevation={10}>  
                     <Typography variant='p' style={{fontSize: Math.min(width, height) > 500 ? '1.2rem' : '0.7rem'}}> {desc} </Typography> 
                 </Paper>            
            </Grid>
         </Grid>            
      </Box>
   );
}

export default PagesBlock;