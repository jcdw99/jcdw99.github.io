import React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import SocialIcon from "../home/SocialIcon";
import useWindowDimensions from "../WindowDim"

const Footer = () => {
    const { height, width } = useWindowDimensions();
    const showEmail = Math.min(height, width) > 500 
    return (
        <Grid container justify="center" spacing={2} style={{backgroundColor:'#2f2f2f'}}>
            <Grid item  xs={showEmail ? 4 : 6}>
                <Box xs={12} textAlign={'center'} >
                    <Typography variant="h6" fontWeight={'bold'} marginTop={'2%'}>
                        <a href={'#/contact'}> Contact Me</a>
                    </Typography>
                </Box>
            </Grid>
            {
                showEmail ?
                <Grid item  xs={4}>
                    <Box xs={12} textAlign={'center'}>
                        <Typography variant="h6" fontWeight={'bold'} marginTop={'2%'}>
                            Justin.WebTraffic@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                : <></>
            }
            <Grid item  xs={showEmail ? 4 : 6}>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}  marginLeft={'5%'} >
                {info.socials.map((social, index) => (
                    <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} visible={true}/>
                ))}
                </Box>
            </Grid>
        </Grid>
    );
}

export default Footer;