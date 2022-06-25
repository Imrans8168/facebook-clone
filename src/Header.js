import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Avatar from 'react-avatar';


import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import IconButton from '@material/react-icon-button';

import "./css/header.css"
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{user},dispatch] =useStateValue();
  return (
    <div className='header'>
        <div className='header_left'>
                 <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='' /> 
                 <div className='header_search'>
                    <SearchIcon />
                    <input type="search" placeholder='Search Facebook' />
                 </div>
        </div>
        <div className='header_middle'>
            <div className='header_option header_option_active'>
                <HomeIcon  fontSize='large'/>                
            </div>
            <div className='header_option'>
                <OndemandVideoIcon  fontSize='large'/>                
            </div>
            <div className='header_option'>
                <GroupsIcon  fontSize='large'/>                
            </div>
            <div className='header_option'>
                <SportsEsportsIcon  fontSize='large'/>                
            </div>
        </div>
        <div className='header_right'>
            <div className='header_info'>            
                <Avatar src={user.photoURL}  className='avtar' size='40' />               
                <h5>{user.displayName}</h5>
            </div>
           
            <IconButton>
                <AppsIcon />                
            </IconButton>
            <IconButton>
                <ForumIcon  />                
            </IconButton>
            <IconButton>
                <NotificationsIcon/>                
            </IconButton>
            <IconButton>
                <ArrowDropDownCircleIcon />                
            </IconButton>


        </div>
    </div>
  )
}

export default Header