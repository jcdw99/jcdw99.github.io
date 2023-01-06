import React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import SocialIcon from "./SocialIcon";
import useWindowDimensions from "../WindowDim"
import logo from "../../img/logo.png"

const Footer = () => {
    const { height, width } = useWindowDimensions();
    const showEmail = Math.min(height, width) > 500 ;
    return (
        <Grid container justify="center" spacing={2} style={{backgroundColor:'#2f2f2f'}} paddingBottom={1}>
            <Grid item  xs={showEmail ? 4 : 6}>
                <Box xs={12} textAlign={'center'}>
                    <Box display={'flex'} gap={'1rem'} justifyContent={'center'}> 
                        <Box display={'flex'} flexDirection='column' textAlign={'left'} marginTop='-3px'>
                        
                        <Typography variant="h5" fontWeight={'bold'} paddingBottom='8px' style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                            Qualifications
                        </Typography>
                            
                            {   
                                info.About.downloadLinks.map((button, idx) => {
                                    return(
                                        <Typography variant="h6" fontWeight={'bold'} paddingTop='2px' key={idx}>
                                            <a href={button.file_path} style={{textDecoration:'underline'}}> {button.title} </a>
                                        </Typography>
                                    )
                                }

                            )}
        
                         </Box>
             
                    </Box>
                </Box>
            </Grid>
            {
                showEmail ?
                <Grid item  xs={4} >
                    <Box xs={12} textAlign={'center'}>
                        <Typography variant="h6" fontWeight={'bold'} marginTop={'1.5%'}>
                            Justin.WebTraffic@gmail.com
                        </Typography>
                    </Box>
                    <Box xs={12} textAlign={'center'} marginTop='5px'>
                        <img  src={logo} alt={'logo'} style={{width:'50px', height:'50px'}}/> 
                    </Box>
                </Grid>
                : <></>
            }
            
            <Grid item  xs={showEmail ? 4 : 6} >
                <Box textAlign={'center'}  marginLeft={'5%'}>
                    <Typography variant="h5" fontWeight={'bold'} paddingBottom='8px' style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                                Get In Touch
                    </Typography>
                </Box>

                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}  marginLeft={'5%'} marginBottom={'2%'}>
                    {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} visible={true}/>
                    ))}
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}  marginLeft={'5%'} marginBottom={'2%'}>
                    <Typography variant="h5" fontWeight={'bold'}>
                        <a href={'#/contact'} style={{textDecoration:'underline'}}> Contact Me </a>
                    </Typography>
                </Box>
   
            </Grid>
        </Grid>
    );
}

export default Footer;