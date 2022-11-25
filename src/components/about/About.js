import React from 'react';
import {Box} from "@mui/material";
import pdf from "./cv-sample.pdf"
import useWindowDimensions from "../WindowDim.js"
import {info} from "../../info/Info";


export default function About() {

    const { height, width } = useWindowDimensions();
    console.log(width)
    console.log(height)
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            {/* <iframe title='pdf' src={pdf} width={Math.round(width * 0.7)} height={Math.round(height * 0.85)} /> */}
        </Box>
    )
}