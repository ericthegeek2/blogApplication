import React, { useState } from 'react'
import {dummy_posts} from "../index7";
import {Link} from "react-router-dom";


const DashboardHelper = () => {

    const [posts, setPosts] =useState(dummy_posts)
  return (
    <section className='dashboard'>
        {
            posts.length  ? <div className='container dashboard_container'>
                  {
                    posts.map(post => {
                        return <Article key={post.id} className='dashboard_post'>

                            <div className='dashboard_post-info'>
                                <div className='dashboard_post-thumbnail'>
                                     <img src={post.thumbnail} alt="" />
                                </div>
                                <h5>{post.Title}</h5>
                            </div>
                            <div className='dashboard_post-actions'>
                                <Link to={`posts/${post.id}`} className='btn sm'>view</Link>
                                <Link to={`posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                                <Link to={`posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
                            </div>
                        </Article>
                    })
                  }

            </div> : <h2 className='center'>you have no posts yet</h2>
        }

    </section>
  )
}

export default DashboardHelper
