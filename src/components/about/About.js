import React from 'react';
import {Box} from "@mui/material";
import useWindowDimensions from "../WindowDim.js"
// import {info} from "../../info/Info";


export default function About() {

    const { height, width } = useWindowDimensions();
    console.log(width)
    console.log(height)
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
 
        </Box>
    )
}