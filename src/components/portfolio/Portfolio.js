import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'} padding={{xs:'1.5rem', md:'4rem'}}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} name={project.name} desc={project.desc} tags={project.tags} github={project.github} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};