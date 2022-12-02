

import React from 'react';
import {Button, Typography} from "@mui/material";

export default function About(props) {

    const { path, fileName, title } = props;

    return (
    
            <Button variant='contained' disabled={path.length < 1}>
                <a href={path} download={fileName}> 
                    <Typography variant={'p'} style={{color:'black'}}>
                        {title} 
                    </Typography>
                </a> 
            </Button>
    )
}