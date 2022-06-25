import React from 'react'
import "./css/rightsidebar.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';

const RightSideBar = () => {
  return (
    <div className='widget'>
      <div className="widget_header">
        <div className="widget_header_left">
          <h4>Your Pages</h4>
        </div>
      <MoreHorizIcon/>
      </div>
      <div className="widget_body">
        <div className="widget_body_options">
          <Avatar src='https://imranshaikh.netlify.app/img/profile.JPG' />
          <h4>Imran tech</h4>
        </div>
        <div className="widget_body_options ml10">
          <NotificationsNoneIcon />
          <p>1 Notification</p>
        </div>
        <div className="widget_body_options ml10">
          <VolumeUpIcon />
          <p>Create Promotins</p>
        </div>
      </div>

      <hr/><br/>

      <div className="widget_header">
        <div className="widget_header_left">
             <h4>Contact</h4>
        </div>
        <div className="widget_header_right">
              <VideoCallIcon />
              <SearchIcon/>
              <MoreHorizIcon/>
          </div>
      </div>
      <div className="widget_body">
        <div className="widget_body_options">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Daq9R8vVYgyBWNmMt5Vb1VMIywlv_kDQ4g&usqp=CAU' />
          <h4>Vibhav Singh</h4>
        </div> 
        <div className="widget_body_options">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFp4YK4q5T6o56Nmb7MeXX_UlDvc1Hlal5XQ&usqp=CAU' />
          <h4>Ayesha Shaikh</h4>
        </div> 
        <div className="widget_body_options">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQ7xoHcz_eDGJwy8RXBdwuF60ZKSMfWje-g&usqp=CAU' />
          <h4>Karishma</h4>
        </div> 
        <div className="widget_body_options">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zXqf9OPY8soRhaOLttnkw8mNqYnABhz_pQ&usqp=CAU' />
          <h4>Bhushan</h4>
        </div>
        <div className="widget_body_options">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gU87Ud58PMRNzXCBtPmvd4x2zXWuLcpNPw&usqp=CAU' />
          <h4>Emran Hashmi</h4>
        </div>
      
        
        
           
      
      </div>
    </div>
  )
}

export default RightSideBar