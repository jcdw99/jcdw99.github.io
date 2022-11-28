import React, { useState } from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function PagesBlock(props) {
   const {encrypt, preview, name, desc/*, github*/} = props;
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
                  aria-label="Platform"
               >
                  <ToggleButton value={true}>Preview</ToggleButton>
                  <ToggleButton value={false}>Full Paper</ToggleButton>
               </ToggleButtonGroup>
            </Grid> 
            <Grid item xs={12} s={12} md={12}><Typography sx={{ typography: { sm: 'h5', xs: 'h6' } }}> {name} </Typography> </Grid>
         </Grid>
         <Box component={'iframe'} src={prevMode ? preview : encrypt} alt={'mockup'} className={'page'} height={{xs: '30vh', md: '50vh'}} width={{xs: '100%', md: '90%'}}/>
         <Grid container margin={{xs:"0 0 5vh 0"}} height={{xs: 'auto', md: '25vh'}} width={{xs: '100%', md: '90%'}}>
            {/* This should be the description box */}
            <Grid item xs={12}  s={12} md={12} marginTop={'1vh'}>
                 <Paper style={{backgroundColor:'#1f1f1f'}} variant='outline' elevation={10}>  
                     <Typography variant='p' style={{fontSize:'.7rem'}}> {desc} </Typography> 
                 </Paper>            
            </Grid>
         </Grid>            
      </Box>
   );
}

export default PagesBlock;