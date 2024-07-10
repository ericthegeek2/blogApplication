import React, {useState} from 'react'

import {dummy_posts} from "../index7";

import PostList from '../helperComponents/PostList';

const AuthorPosthelper = () => {
    const [posts, setPosts] = useState(dummy_posts)
  return (
    <section>
        
    {posts.length > 0 ? <div className="container posts_container">
       {
         posts.map((obj) =>(
          <PostList key={obj.id} data={obj}/>
        )) 
       }
 
     </div> : <p className='center'>Posts Not Found</p>} 
       
    
 
 </section>
  )
}

export default AuthorPosthelper
