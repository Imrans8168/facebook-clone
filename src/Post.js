import React from 'react'
import "./css/post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const Post = ({photourl,image,uesername,timestamp,message}) => {
  return (
    <div className='post'>
        <div className="post_top">
        <div className="post_top_left">
            <Avatar src={photourl}/>
            <div className="postinfo">
                <h4>{uesername}</h4>
                <p>{timestamp} <PublicIcon/>  </p>
            </div>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="post_middle">
            <p>{message}</p>
            {image &&  <img src={image}/> }
           
        </div>
        <div className="post_bottom">
                <div className="post_bottom_options">
                    <ThumbUpIcon/> <p>Like</p>
                </div>
                <div className="post_bottom_options">
                    <ChatBubbleOutlineIcon/>  <p>Comment</p>
                </div>
                <div className="post_bottom_options">
                    <ShareOutlinedIcon/><p>Share</p>
                </div>
                
        </div>
    </div>
  )
}

export default Post