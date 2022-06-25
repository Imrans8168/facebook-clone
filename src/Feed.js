import React, { useEffect, useState } from 'react';
import "./css/feed.css";
import StoryReels from './StoryReels';
import MessageSender from './MessageSender';
import Post from './Post';
import { db } from './firebase';

const Feed = () => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])

  console.log(posts);
  return (
    <div className='feed'>
        <StoryReels />
        <MessageSender />
        


      {
        posts.map(post=>{
         return <Post  photourl={post.data.photourl} image={post.data.image} uesername={post.data.uesername} timestamp="12:30 Pm" message={post.data.message}/>

        })
      }


    </div>
  )
}

export default Feed