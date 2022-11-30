import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import {Box, Grid, Typography} from "@mui/material";
import useWindowDimensions from "../WindowDim"
import Swal from 'sweetalert2';


const SERVICE_ID = "service_5ht2wt9";
const TEMPLATE_ID = "template_ajs3c4e";
const USER_ID = "6vp8GT4lv7atETVfN";


const Contact = () => {

  const { height, width } = useWindowDimensions();
  const margin = Math.min(height, width) > 500 ? '20rem':'2rem'


const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Email Sent Successfully'
        })
        }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
        });
    e.target.reset()
    
    };
    
  return (
    <Box style={{backgroundColor:'#f2f2f2'}} marginLeft={margin} marginRight={margin} >
      <Grid container  justifyContent={'center'} padding={{xs:'2rem', md:'3rem'}} marginTop={'3rem'}>
        <Form onSubmit={handleOnSubmit} style={{width:'80%'}}>
        <Box justifyContent={'center'} textAlign={'center'} style={{marginBottom:'3rem'}}>
          <Typography variant='h4' fontWeight={'bold'} style={{color:'black'}}> Contact Me </Typography>
        </Box>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            color='#ffffff'
            label='Email'
            name='reply_to'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='from_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='message'
            placeholder='Message…'
            required
          />
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </Grid>
    </Box>
  );
}

export default Contact;