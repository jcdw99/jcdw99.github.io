import React from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";
import SocialIcon from '../home/SocialIcon';
import Popper from './Popper.js'
import useWindowDimensions from "../WindowDim"

function PortfolioBlock(props) {
   const {name, desc, github, image} = props;
   const { height, width } = useWindowDimensions();   
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box justifyContent={'center'} alignItems={'center'} display={'flex'} gap={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>  
            <Typography sx={{ typography: { sm: 'h4', xs: 'h6' }, fontWeight:'bold'}} > {name} </Typography> 

               <SocialIcon key={name} link={github} icon={"fa fa-github"} label={""} visible={github}/>
            
         </Box>
         <Box component={'img'} src={image} alt={'mockup'}  height={{xs: '90%', s:'80%', md: '70%'}} width={{xs: '90%', s:'80%', md: '70%'}} padding={"0 0 0 0"}/>

         <Grid container  height={{xs: '50%', s: '50%', md: '20rem'}} width={{xs: '80%', s: '80%', md: '70%'}}>
            {/* This should be the description box */}
            <Grid item xs={12}  s={12} md={12} marginTop={'1vh'}>

                 { Math.min(height, width) > 600 ?
                     <Paper style={{backgroundColor:'#1f1f1f'}} variant='outline' elevation={10}>  
                        <Typography variant='p' style={{fontSize:'.7rem'}}> {desc} </Typography> 
                     </Paper>  
                     :
                     <Popper text={'See Description'} desc={desc}/>
                  }
                       
            </Grid>
         </Grid>   
      </Box>
   );
}

export default PortfolioBlock;