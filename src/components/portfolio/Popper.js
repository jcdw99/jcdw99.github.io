import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {theme} from "../../info/Info";
import Box from "@mui/material/Box";

export default function PopperPopupState(props) {

    const {text, desc} = props;
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
            <Box textAlign='center'>
            <Button variant='outlined' {...bindTrigger(popupState)} 
              style={{ opacity:theme.navOpacity, backgroundColor:theme.inactiveButton, width:'100%', color:theme.backgroundColor}}>
                {text}
            </Button>
            <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            >
            <Typography variant='p' style={{fontSize:'.7rem'}}>{desc}</Typography>
          </Popover>
            </Box>
        )}
        </PopupState>
    );
}