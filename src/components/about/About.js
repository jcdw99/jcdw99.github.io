import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import useWindowDimensions from "../WindowDim.js"
import {info} from "../../info/Info";
import DownloadButton from "./DownloadButton"

export default function About() {

    const { height, width } = useWindowDimensions();
    const titleSize = Math.min(height, width) > 500  ? '25pt': '16pt'
    const textSize = Math.min(height, width) > 500  ? '14pt': '9pt'

    return (
        <Box>
            <Box 
                component={'main'} 
                display={'flex'}
                flexDirection={{xs: 'column-reverse', md: 'row'}} 
                justifyContent={'flex-end;'}
                minHeight={'calc(100vh - 175px)'}
                padding={{xs:'1.5rem', md:'4rem'}}>

                {/* This is the Text Description Box */}
                <Box
                    justifyContent='start'
                    sx={{
                        width: {xs: '90%', s:'90%', md:'45%'}, 
                    }}>
                    
                    <Grid 
                        container
                        justifyContent={'center'}
                        padding="5%" 
                        sx={{
                            gap: {xs:2, s:2, md:5}
                        }}
                        >
                    
                        <Grid item xs={12}>
                            <Typography
                                borderBottom={1}
                                fontFamily={'-apple-system'}
                                align={'center'}
                                fontSize={titleSize}
                                fontWeight={'bold'}
                                variant={'h3'}>
                                {info.About.title}
                            </Typography>

                        </Grid>
                        {info.About.desc.map((descr, index) => {
                            return (
                                <Grid item key={index}>
                                    <Typography
                                        fontWeight={'bold'}
                                        fontSize={textSize}
                                        variant={'p'}>
                                        {descr}
                                    </Typography>
                                </Grid>
                            ) 
                        })}
        
                    </Grid>


                </Box>

                { /* This is the main image box */}
                    <Box
                    display={'flex'}
                    sx={{
                        width: {xs: '100%', s:'100%', md:'50%'},
                    }}>
                        <Box
                            component="img"
                            style={{
                                alignSelf: 'center',
                                width: '100%',
                                // Without height undefined it won't work
                                height: undefined,
                                // figure out your image aspect ratio
                                aspectRatio: 4/3,
                                border: 3,
                                borderRadius:'1rem',
                                maxWidth:'800px'
                            }}
                            alt="Image of Me"
                            src={info.About.aboutMePortrait}
                        />
                </Box>
            </Box>


            {/* This is the download links box */ }
            <Box
                component={'main'} 
                display={'flex'}
                flexDirection={'column'} 
                justifyContent={'center;'}
                textAlign={'center'}
                width={'100%'}
            >


         
                <Typography variant='h3'>
                    Download Links
                </Typography>

                <Box
                    component={'main'} 
                    display={'flex'}
                    flexDirection={'row'} 
                    justifyContent={'center;'}
                    gap={1}
                    margin={'1rem 0 2rem 0'}
                >
                    {info.About.downloadLinks.map((button, idx) => {
                        return (
                            <DownloadButton key={idx} path={button.file_path} name={button.file_name} title={button.title}/>
                        )
                    })}

                </Box>
            </Box>

        </Box>
    )
}