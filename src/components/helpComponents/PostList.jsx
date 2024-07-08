import React from 'react'

import {Link} from "react-router-dom";
import PostAuthor from './PostAuthor';

const PostList = ({data}) => {
  return (
    <article className='post'>
        <div className="post_thumbnail">
           <img src={data.thumbnail} alt={data.Title} />
        </div>

        <div className="post_content">
            <Link to={`/posts/${data.id}`}>
                 <h3>{data.Title}</h3>
            </Link>
            <p>{data.description}</p>

            <div className="post_footer">
                <PostAuthor />
                <Link to={`posts/categories/${data.category}`}></Link>
            </div>

        </div>
    </article>
  )
}

export default PostList
