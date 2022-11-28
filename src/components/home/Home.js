import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import Typed from 'react-typed';
import useWindowDimensions from "../WindowDim"
import uuid from 'react-uuid';

export default function Home() {

   const { height, width } = useWindowDimensions();
   const fontsize = Math.min(height, width) > 500 ? '40px':'30px'
   
   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'column'}} alignItems={'center'} 
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={info.selfPortrait} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}} marginTop={'2rem'}
              borderRadius={'60%'} p={'0.25rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
               <Typography  marginTop={'1rem'} variant='h4' noWrap={true} alignContent={'left'} overflow={'visible'} fontWeight="bold" style={{fontSize:fontsize}}>
                  Hi, I'm&nbsp;
                  <Typed  showCursor={false} strings={["Justin De Witt"]} typeSpeed={30} style={{fontWeight:'bold', background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}/>
               </Typography>
         <Box>
   
               {/* <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span> </h1> */}
            <h2>{info.position}</h2>
            <Box component={'ul'} p={'0.8rem'} width={'100%'} marginLeft={'3%'}>
               {info.miniBio.map((bio, index) => (
                  
                   bio.pagesIndex ?
                   <a href={`#/papers/${bio.pagesIndex}`}  key={uuid()}><EmojiBullet key={uuid()} emoji={bio.emoji} text={bio.text}/></a>
                   :
                   <EmojiBullet key={uuid()} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'left'} fontSize={{xs: '2rem', md: '2.5rem'}}  marginLeft={'5%'}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} visible={true}/>
               ))}
            </Box>
         </Box>
      </Box>
   )
}