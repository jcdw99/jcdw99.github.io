import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";

export default function PopperPopupState(props) {

    const {text, desc} = props;
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
            <Box textAlign='center'>
            <Button variant='outlined' {...bindToggle(popupState)} style={{color:'#ffffff'}}>
                {text}
            </Button>
            <Popper {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper style={{padding: "0 10% 0 10%"}}>
                        <Typography variant='p' style={{fontSize:'.6rem'}}>{desc}</Typography>
                    </Paper>
                </Fade>
                )}
            </Popper>
            </Box>
        )}
        </PopupState>
    );
}