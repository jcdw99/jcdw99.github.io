import React from 'react';
import IconLink from "../portfolio/IconLink";
import {Box} from "@mui/material";

function PagesBlock(props) {
   const {link, name, desc} = props;

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'iframe'} src={link} alt={'mockup'} className={'page'} height={{xs: '20vh', md: '38vh'}} width={{xs: '20vh', md: '55vh'}}/>
         <h1 style={{fontSize: '2rem'}}>{name}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} py={'1rem'} height={{xs: '20vh', md: '20vh'}} width={{xs: '20vh', md: '20vh'}}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={"/"} title={name} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={"/"} title={desc} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PagesBlock;