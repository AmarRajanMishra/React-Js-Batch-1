import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';



function MyButtons() {
  return (
    <>
    <h1>MyButtons</h1>
    <Stack spacing={2} direction='row'>
    <Button variant='text'>Click Me</Button>
    <Button variant='contained'>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button>Primary</Button>
    <Button disabled>Disabled</Button>
    <Button href='https://reactjs.org/'>Link</Button>
    <Button onClick={()=>console.log('Button Clicked')}>Click Me</Button>
    <Button variant='outlined' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' color='error'>Error</Button>
    <Button size='small'>Small</Button>
    <Button variant='contained' style={{background : 'red'}}>Custom Button</Button>
    <Button variant='contained' style={{background : 'yellow'}}>Custom Button</Button>
    <Button variant='contained' startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant='contained' endIcon={<DeleteIcon />}>Delete</Button>
    <Button variant='contained' 
    style={{background : 'black', color : 'red'}}
    onClick={()=>console.log('Welcome to event')}
    >Text</Button>
    </Stack>
    
    </>
  )
}

export default MyButtons;