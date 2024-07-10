import React, {useState} from 'react'

//import {thumbnail1,thumbnail2,thumbnail3,thumbnail4} from "../index";

import thumbnail1 from "../index2";
import thumbnail2 from "../index3";
import thumbnail3 from "../index4";
import thumbnail4 from "../index5";

import PostList from './PostList';


/**********************Dummy posts *************/
 const dummy_posts = [
    {
        id: 1,
        thumbnail: thumbnail1,
        category: 'education',
        Title: 'This is the title of first post',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro dolor ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis odio exercitationem fugiat praesentium vero nemo repellendus perferendis placeat ab, reprehenderit veritatis dolor sint, distinctio consequuntur error nam. Repudiandae aspernatur eum, laudantium ab aliquid earum similique deleniti ea optio distinctio repellat corrupti possimus. Numquam quis ipsam, placeat provident ullam est.",
        authorId: 3
    },
    {
        id: 2,
        thumbnail: thumbnail2,
        category: 'science',
        Title: 'This is the title of second post',
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora omnis placeat ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis error eos consectetur soluta dolore, sed minus autem ipsam ipsum voluptate! Facere esse veniam eius numquam, porro illum quam cupiditate.",
        authorId: 2
    },
    {
        id: 3,
        thumbnail: thumbnail3,
        category: 'Art',
        Title: 'This is the title of third post',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aspernatur harum omnis . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsam id delectus architecto, ratione aliquid est eligendi quas quia neque quae in. Modi aliquam cumque veniam laboriosam assumenda similique inventore voluptatem. Placeat quos quasi atque quibusdam sunt praesentium minus quas?",
        authorId: 1
    },
    {
        id: 4,
        thumbnail: thumbnail4,
        category: 'Technology',
        Title: 'This is the title of fourth post',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam? Perferendis ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ad soluta, impedit voluptas ullam atque laborum odio repellendus totam provident architecto obcaecati autem, non labore doloremque fuga ipsam, inventore ratione.",
        authorId: 4
    },
]




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
