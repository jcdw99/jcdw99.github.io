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
  const {id} = useParams()
  const [value, setValue] = useState([...Array(info.pages.length).keys()].map(x => String(x)).includes(id ? id : 0) ? parseInt(id) - 1 : 0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box width='100%'>
      <AppBar position="absolute" style={{marginTop:'4.3rem' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        textColor='inherit'
        centered
        style={{backgroundColor: theme.pageNav, opacity:theme.navOpacity + 0.1, color:'white'}}
      >
        {info.pages.map((page, index) => (
                     <Tab key={index}  label={page.field} {...a11yProps(index)} wrapped={true}/>
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
                          <PagesBlock encrypt={page.encrypt} preview={page.preview} name={page.name} desc={page.desc} tags={page.tags} github={page.github} />
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