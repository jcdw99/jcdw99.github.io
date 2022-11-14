import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import PagesBlock from "./PagesBlock";
import uuid from 'react-uuid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box width='100%'>
      <AppBar position="static" style={{marginTop:'1em'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        textColor='inheret'
        centered
        style={{background: "linear-gradient(45deg, darkturquoise, dodgerblue)"}}
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
      >
      {info.pages.map((field, index) => (
            <TabPanel value={value} index={index} key={index}>
                <Box>
                <Grid container display={'flex'} justifyContent={'center'} padding={"5em"}>
                {field.work.map((page, pageDex) => (
                    
                        
                    <Grid item xs={12} md={6} key={uuid()}>
                        <PagesBlock link={page.link} name={page.name} desc={page.desc} />
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








// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import {Box, Grid} from "@mui/material";
// import Style from '../../variables.modules.scss'
// import {info} from "../../info/Info";
// import PagesBlock from "./PagesBlock";
// import uuid from 'react-uuid';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//       id: `full-width-tab-${index}`,
//       'aria-controls': `full-width-tabpanel-${index}`,
//     };
//   }

// export default function Pages() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor:Style.dark, display: 'flex', width: "100%" }}
//     >
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="secondary"
//         textColor={Style.light}
//         variant="fullWidth"
//         aria-label="full width tabs example"
//         centered
//       >
//         {info.pages.map((page, index) => (
//                      <Tab key={index} label={page.field} {...a11yProps(index)} />
//                 ))}
//       </Tabs>

//       {info.pages.map((field, index) => (
//             <TabPanel value={value} index={index} key={index}>
//                 <Box>
//                 <Grid container display={'flex'} justifyContent={'center'} padding={"5em"}>
//                 {field.work.map((page, pageDex) => (
                    
                        
//                     <Grid item xs={12} md={6} key={uuid()}>
//                         <PagesBlock link={page.link} name={page.name} desc={page.desc} />
//                     </Grid>
                                      
//                 ))}
//                 </Grid>
//                 </Box>  
//             </TabPanel>
//         ))}

//     </Box>
//   );
// }



// import React from 'react';
// import PagesBlock from "./PagesBlock";
// import {Box, Grid} from "@mui/material";
// import {info} from "../../info/Info";

// export default function Pages() {
//     return (
//         <Box>
//             <Grid container display={'flex'} justifyContent={'center'} padding={"5em"}>
//                 {info.pages.map((page, index) => (
//                    <Grid item xs={12} md={6} key={index}>
//                        <PagesBlock link={page.link} name={page.name} desc={page.desc} />
//                    </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// };
