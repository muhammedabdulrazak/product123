import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  return (
    <div id="acc">
        <AppBar sx={{ backgroundColor: 'orange' }}>
            <Toolbar>
            {/* <Box component="img" alt="My Logo" src="" /> */}
              <Typography variant='h3' color='#000'> Vkart </Typography> 
                <Link to='/B'>
                <Button variant='contained'>HOME</Button>
                </Link>
                <Link to='/A'>
                <Button variant='contained'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}



export default Navbar
