import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box, Grid} from "@mui/material";
import {info, theme} from "../../info/Info";
import PagesBlock from "./PagesBlock";
import uuid from 'react-uuid';
import { useParams} from 'react-router-dom'
import useWindowDimensions from "../WindowDim"

function TabPanel(props) {
  const { children, value, index, topic, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {

  const { height, width } = useWindowDimensions();
  const {id} = useParams()
  const navFontSize = Math.min(width, height) > 500 ? '1.2rem': '0.8rem';
  const [value, setValue] = useState([...Array(info.pages.length).keys()].map(x => String(x)).includes(id ? id : 0) ? parseInt(id) - 1 : 0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box width='100%'>
      <AppBar position="absolute" style={{marginTop: Math.min(width, height) > 500 ? '5.2rem': '4.5rem'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        textColor='inherit'
        centered
        style={{backgroundColor: '#7caaf2', opacity:theme.navOpacity , color:'#ffffff'}}
      >
        {info.pages.map((page, index) => (
                      index !== value ?
                        <Tab key={index}  label={page.field} style={{opacity:0.9, fontSize: navFontSize}} {...a11yProps(index)} wrapped={true}/>
                         :
                        <Tab key={index}  label={page.field} style={{backgroundColor:'#5a80c2', fontWeight:'bold', opacity:1, fontSize:navFontSize }} {...a11yProps(index)} wrapped={true}/> 

                ))}
      </Tabs>
      </AppBar>
      <SwipeableViews
      
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{marginTop:'5vh'}}
      >
      {info.pages.map((field, index) => (
            <TabPanel value={value} index={index} key={index}>
                <Box>
                  <Grid container display={'flex'} justifyContent={'center'} padding={{xs:'1.5rem', md:'4rem'}}> 
                  {field.work.map((page, pageDex) => (
                      
                      <Grid item xs={12} md={6} key={uuid()}>
                          <PagesBlock encrypt={page.encrypt} preview={page.preview} name={page.name} desc={page.desc} tags={page.tags} github={page.github} width={width} height={height} />
                      </Grid>
                                        
                  ))}
                  </Grid>
                </Box>  
            </TabPanel>
        ))}

      </SwipeableViews>
    </Box>
  );
}