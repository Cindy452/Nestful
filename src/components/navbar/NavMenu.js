import React from 'react';
import './navmenu.style.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';


export default function ButtonAppBar() {

  return (
    <div className='root'>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h3" className='title'>
          <Link color="inherit" href='/' className='link'>Nestful</Link>
          </Typography>
          <Button color="inherit" href="/signin">Sign In</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}