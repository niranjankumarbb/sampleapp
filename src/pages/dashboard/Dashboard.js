import React from 'react';
import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
 import {Outlet} from 'react-router-dom' 
import {useNavigate, useParams} from 'react-router-dom'
import { BottomNavigation } from '@mui/material';
 import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Dashboard.css'


function  Dashboard() {
    let navigate= useNavigate()
    const [value, setValue] = React.useState(0);
    const pages = ['Home', 'Feature', 'About', 'Signup'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);


     const handleLogout=()=>{
        navigate('/')
     }

     const handleMenubuttons= (page)=>{
        console.log('page value', page)
        navigate(`/dashboard/${page}`)
     }

   console.log('value', value)

         return(
          <div className='dashboard-container'>
            <div >
                 <Box >
{/* position="fixed"   - keeps appbar fixed
position="absolute"    - keeps appbar invisible when scrolled      */}
            <AppBar position="fixed" style={{minHeight: '20px',}}>
              <Toolbar >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ float: 'left' }}> 
                    Sample App
                </Typography>

                <span class="example-spacer" ></span>

            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=>handleMenubuttons(page)}
              >
                {page}
              </Button>
            ))}

                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
                sx={{ float: 'right' }}
              >
                <AccountCircle />
              </IconButton>
                {/* <Button color="inherit" onClick={handleLogout}>Logout</Button> */}
              </Toolbar>
            </AppBar>
          </Box>
              
                   <Outlet/> 

                   <BottomNavigation
                        showLabels
                        value={value}
                        color="red"
                        sx={{  bgcolor: '#87cefa' ,position: 'fixed', bottom: 0, left: 0, right: 0 }}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
            </div>
         </div>  
        )
 
}
export default Dashboard