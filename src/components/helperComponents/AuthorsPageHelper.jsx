import React, {useState} from 'react'

import {Link} from "react-router-dom";

import {authorsData} from "../index";

const AuthorsPageHelper = () => {

    const [authors, setAuthors] = useState(authorsData)

  return (
    <section className='authors'>
       {authors.length > 0 ? <div className='container authors_container'>
            {
                authors.map((obj) =>{
                    return <Link key={obj.id} to={`/posts/users/${obj.id}`} className='author'>
                            <div className="author_avatar">
                                <img src={obj.avatar} alt={`image of ${obj.name}`} />
                            </div>

                            <div className='author_info'>
                                <h4>{obj.name}</h4>
                                <p>{obj.posts}</p>
                            </div>
                           </Link>
                })
            }
        </div>
        : <p className='center'>No authors found</p>}


    </section>
  )
}

export default AuthorsPageHelper
