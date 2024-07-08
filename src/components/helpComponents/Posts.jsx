import React, {useState} from 'react'

/**********************Dummy posts *************/

import dummy_posts from "../index";
import PostList from './PostList';
const [posts, setPosts] = useState(dummy_posts)

const Posts = () => {
  return (
    <section className='posts'>
        {
          dummy_posts.map((obj) =>(
            <PostList key={obj.id} data={obj}/>
          ))  
        }

    </section>
  )
}

export default Posts
