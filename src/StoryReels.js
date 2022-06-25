import { Avatar } from '@mui/material';
import React from 'react';
import "./css/story.css";

const StoryReels = () => {
  return (
    <div className='storyReel'>
            <div className="story" style={{backgroundImage:`url('https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`}} >
                <Avatar className='storyavtar' src='https://imranshaikh.netlify.app/img/profile.JPG'/>
                <h4>Imran Shaikh</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGuTboKmMCqLY3hlNJYtQzLUckTosF9xzcA&usqp=CAU')`}} >
                <Avatar className='storyavtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Daq9R8vVYgyBWNmMt5Vb1VMIywlv_kDQ4g&usqp=CAU'/>
                <h4>Vaibhav Singh</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBBP82idBUDMNsPC-Nl5Q0sDAhDiCqVdq2A&usqp=CAU')`}} >
                <Avatar className='storyavtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zXqf9OPY8soRhaOLttnkw8mNqYnABhz_pQ&usqp=CAU'/>
                <h4>Bhushan</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaoHOhxCSxQM3r9oYmLLdJFAta5cSFHzpig&usqp=CAU')`}} >
                <Avatar className='storyavtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFp4YK4q5T6o56Nmb7MeXX_UlDvc1Hlal5XQ&usqp=CAU'/>
                <h4>Ayesha Shaikh</h4>
            </div>
            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngy3AQedm8EnzWB0apxi3uTOF8UNWQLRdQ&usqp=CAU')`}} >
                <Avatar className='storyavtar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQ7xoHcz_eDGJwy8RXBdwuF60ZKSMfWje-g&usqp=CAU'/>
                <h4>Karishma</h4>
            </div>
    </div>
  )
}

export default StoryReels