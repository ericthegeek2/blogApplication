import React from 'react'
import {Link} from "react-router-dom";

import avatar1 from "../index6";

const PostAuthor = ({authorId}) => {
  return (
    <Link to={`posts/users/${authorId}`} className='post_author'>

      <div className="post_author-avatar">
        <img src={avatar1} alt="" />
      </div>

      <div className="post_author-details">
        <h5>By emigwi</h5>
        <small>Just now</small>
      </div>
    </Link>
  )
}

export default PostAuthor
