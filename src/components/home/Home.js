import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import {Box, Typography} from "@mui/material";
import {info, theme} from "../../info/Info";
import Typed from 'react-typed';
import useWindowDimensions from "../WindowDim"
import uuid from 'react-uuid';

export default function Home() {

   const { height, width } = useWindowDimensions();
   const fontsize = Math.min(height, width) > 500 ? '40px':'30px'
   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'column'}} alignItems={'center'} 
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'} >
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={info.selfPortrait} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}} marginTop={'2rem'}
              borderRadius={'60%'} p={'0.25rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
               <Typography  marginTop={'1rem'} variant='h4' noWrap={true} alignContent={'left'} overflow={'visible'} fontWeight="bold" style={{fontSize:fontsize}} color={theme.textColor} >
                  Hi, I'm&nbsp;
                  <Typed  showCursor={false} strings={[`${info.firstName} ${info.lastName}`]} typeSpeed={20} style={{fontWeight:'bold', background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}/>
               </Typography>
         <Box style={{color:theme.textColor}}>
            <h2>{info.position}</h2>
            <Box component={'ul'} p={'0.8rem'} width={'100%'} marginLeft={'3%'}>
               {info.miniBio.map((bio, index) => (
                   bio.pagesIndex ?
                   <a href={`#/papers/${bio.pagesIndex}`} key={uuid()}> <EmojiBullet key={uuid()} emoji={bio.emoji} text={bio.text}/></a>
                   :
                   <EmojiBullet key={uuid()} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
         </Box>
      </Box>
   )
}