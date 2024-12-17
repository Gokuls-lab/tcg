import React, { useState } from 'react';
import im from './image.png';
import './main.css'
import host from './host.png';
import web from './web.png';
import Service from './Service.jsx';
import CardStack from './Card.jsx';

import logo1 from './img/image 3.png';
import p from './partners.png'

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const DrawerAppBar = ({ window }: { window?: () => Window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      TCG - Technologies
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"#034069"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            <Typography variant="h6" sx={{ my: 1,ml:6 }}>
      TCG - Technologies
      </Typography>
          </IconButton>
          
          <Box sx={{ flexGrow:0.1,display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.6, display: { xs: 'none', sm: 'block' } }}
          >
            TCG - Technologies
          </Typography>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    <div style={{padding:'0px' ,width:'100%',height:'100vh',display:'flex',justifyContent:'center'}}>
    <div>
        <img src={im} style={{maxWidth:"400px",width:"50%",marginTop:'50px'}}></img>

       {// <h1 style={{fontSize:"30px"}}>Want a website?</h1><span>You are at righth place..</span> 
       }
        <h1 style={{marginTop:'20px',fontSize:'130%'}}>Welcome to TCG TECHNOLOGIES</h1>
        <center>
        <div style={{width:'150px',height:'2px',backgroundColor:'red'}}></div>
          <p style={{width:'80%'}}>TCG Technologies is a leader in providing innovative technological solutions. Our mission is to drive efficiency and growth for businesses worldwide through cutting-edge products and services. We offer tailored solutions to meet the unique needs of our clients.</p>
        </center>

        <div className="service" style={{marginTop:'50px'}}>
          <center><h3>Our Products</h3></center>
          <CardStack/>

        </div>
        <center>
        <img src={p} alt="" />
        </center>


        <footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
</div>
</div>
</footer>

        </div>
        </div>
        
    </Box>
    
  );
};

export default DrawerAppBar;