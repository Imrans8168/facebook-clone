import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import "./css/messageSendr.css"
import { IconButton, Modal } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { useStateValue } from './StateProvider';
import firebase from "firebase"
import { db, storage } from './firebase';

const MessageSender = () => {
  const [{user},dispatch] =useStateValue();
  const [open, setOpen] = useState(false);
  const [image,setImage] = useState("");
  const [message,setMessage] = useState("");
  const [progress,setProgress] =useState(0);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen =()=>{
    setOpen(true);
  }

const uploadFileWithClick =()=>{
    document.getElementById("imageFile").click();
}

const handleChange =(e)=>{
  if(e.target.files[0])
  {
    setImage(e.target.files[0])
  }
  
}

const handleUpload=(e)=>{
  e.preventDefault();
  if(image === ""){
     db.collection("posts").add({
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
       message: message,
       uesername:user.displayName,
       photourl:user.photoURL,
       
     })
  }
  else
  {
    const uploadTast =storage.ref(`images/${image.name}`).put(image);
    uploadTast.on(
      "state_changed",
      (snapshot)=>{
          const progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
          setProgress(progress);
      },
      (error)=>{
        console.log(error)
        alert(error.message);
      },
      ()=>{
        storage.ref("images").child(image.name).getDownloadURL().then(url=>{
         
          db.collection("posts").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message: message,
            uesername:user.displayName,
            photourl:user.photoURL,
            image:url
          })
          handleClose();
          setMessage("");
          setImage("")
          setProgress(0)
        })
      }
    )
  }

}

  

  return (
    <>
      <Modal open={open} onClose={handleClose} >

        <div className="modal_pop">
          <form>
            <div className="modal_heading">
              <h3>Create Post</h3>
              <IconButton className='closebtn' onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modalheader_top">
              <Avatar src={user.photoURL}/>
              <h5>{user.displayName}</h5>
            </div>
            <div className="modalbody">
            <textarea rows="5" placeholder="What's on your mind Imran ? " onChange={e=>setMessage((e.target.value))} >{message}</textarea>
              
            </div>
            <div className="modalfooter">
              <div className="modaltooterLeft">
                <h4>Add to your post</h4>
              </div>

              <div className="modaltooterRight">
                <IconButton onClick={uploadFileWithClick}>
                      <PhotoLibraryIcon fontSize='large'style={{color:"lightgreen"}} />                      
                </IconButton>

                <input type="file" id='imageFile' onChange={handleChange} style={{display:"none"}}/>

                <IconButton>
                <VideoCallIcon fontSize='large' style={{color:"red"}}/>
                </IconButton>

                <IconButton>
                   <MoodIcon fontSize='large' style={{color:"#ffb100"}}/>
                </IconButton>

              </div>

            </div>
                    {image !== "" && <h2 style={{"fontSize":"15px" ,"marginBottom":"20px" ,"color":"green"}}>Image added and will be displayed after click on post</h2>} 
                  {
                    progress != "" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>
                  }
                  
                  <input type="submit" onClick={handleUpload} value="Post" className="post_submit"/>

          </form>
        </div>
      </Modal>

      <div className='messagesender'>
        <div className='messagesender_top'>
          <Avatar src={user.photoURL}/>

          <form>
            <input type="text" placeholder="What's on your mind, Imran?" onClick={handleOpen} />
          </form>
        </div>
        <div className='messagesender_bottom'>
          <div className="messangeroption">
            <VideoCallIcon style={{ color: 'red' }} fontSize="large" />
            <p>Live Video</p>
          </div>
          <div className="messangeroption">
            <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize="large" />
            <p>Photo/Video</p>
          </div>
          <div className="messangeroption">
            <MoodIcon style={{ color: '#ffb100' }} fontSize="large" />
            <p>Felling/Activity</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageSender