import React, {useState} from 'react'

import {dummy_posts} from "../index7";

import PostList from "../helperComponents/PostList";





const Posts = () => {
const [posts, setPosts] = useState(dummy_posts)

  return (
    <section className='posts'>
        
         <div className="container posts_container">
           {
             dummy_posts.map((obj) =>(
              <PostList key={obj.id} data={obj}/>
            )) 
           }

         </div> 
           
        

    </section>
  )
}

export default Posts
