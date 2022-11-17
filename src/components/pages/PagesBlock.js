import React from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";
import SocialIcon from '../home/SocialIcon';

function PagesBlock(props) {
   const {link, name, desc, github} = props;

   return (

      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>   
         {/* This is the PDF rendering Box */}
         <Box justifyContent={'center'} alignItems={'center'} display={'flex'} gap={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>  
            <Typography sx={{ typography: { sm: 'h5', xs: 'h6' } }}> {name} </Typography> 

            {github ?
               <SocialIcon key={name} link={github} icon={"fa fa-github"} label={""} />

               :
               <SocialIcon key={name} icon={""} label={""} />
            }
         </Box>
         <Box component={'iframe'} src={link} alt={'mockup'} className={'page'} height={{xs: '30vh', md: '38vh'}} width={{xs: '100%', md: '90%'}}/>
         <Grid container height={{xs: '37vh', md: '25vh'}} width={{xs: '100%', md: '90%'}}>
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