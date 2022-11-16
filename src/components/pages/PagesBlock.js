import React from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";


function PagesBlock(props) {
   const {link, name, desc} = props;

   return (

      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>   
         {/* This is the PDF rendering Box */}
         <Box justifyContent={'center'} alignItems={'center'}>  <Typography sx={{ typography: { sm: 'h5', xs: 'h6' } }}> {name} </Typography> </Box>
         <Box component={'iframe'} src={link} alt={'mockup'} className={'page'} height={{xs: '30vh', md: '38vh'}} width={{xs: '100%', md: '90%'}}/>
         <Grid container height={{xs: '30vh', md: '25vh'}} width={{xs: '100%', md: '90%'}}>
            {/* This should be the description box */}
            <Grid item xs={12}  s={12} md={12} marginTop={'1vh'}>
                 <Paper style={{backgroundColor:'#1f1f1f'}} variant='outline' elevation={10}>  
                     <Typography variant='p' style={{fontSize:'10px'}}> {desc} </Typography> 
                 </Paper>            
            </Grid>
         </Grid>            
      </Box>
   );
}

export default PagesBlock;