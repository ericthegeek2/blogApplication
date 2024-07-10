import React from 'react'

import {Link} from "react-router-dom";
import PostAuthor from './PostAuthor';


const PostList = ({data}) => {

  const shortDescription = data.description.length > 145 ? data.description.substr(0, 145) + '...' : data.description

  const shortTitle = data.Title.length > 30 ? data.Title.substr(0, 30) + '...' : data.Title
  return (
    <article className='post'>
        <div className="post_thumbnail">
           <img src={data.thumbnail} alt={data.Title} />
        </div>

        <div className="post_content">
            <Link to={`/posts/${data.id}`}>
                 <h3>{shortTitle}</h3>
            </Link>
            <p>{shortDescription}</p>

            <div className="post_footer">
                <PostAuthor authorId={data.authorId}/>
                <Link to={`posts/categories/${data.category}`} className='btn btn_category'>{data.category}</Link>
            </div>

        </div>
    </article>
  )
}

export default PostList
