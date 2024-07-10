import React from 'react'
import PostAuthor from '../../components/helperComponents/PostAuthor'

import {Link} from "react-router-dom";

import thumbnail1 from "../index";

const PostDetail = () => {
  return (
    <div>
      <div className="post-detail">
        <div className="container post-detail_container">
            <div className="post-detail_header">
              <PostAuthor />

              <div className="post-detail_buttons">
                <Link to='posts/:id/edit' className='btn sn primary'>Edit</Link>
                <Link to={'posts/:id/delete'} className='btn sn danger'>Delete</Link>
              </div>
            </div>
            <h1>This is the post title</h1>

            <div className="post-detail_thumbnail">
              <img src={thumbnail1} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus corrupti itaque consectetur! Architecto exercitationem similique saepe ex velit eius modi eligendi, iure molestias quas sit vero repellat magni. Commodi sunt officiis nostrum facilis dolorum debitis, delectus maiores suscipit. Velit laboriosam tempore nisi natus dolor maiores expedita modi temporibus! Illum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque quos, similique recusandae id ratione at est dicta perspiciatis? Iste cum ipsum nam exercitationem modi quisquam delectus eligendi dicta ex quasi expedita obcaecati odit atque quibusdam molestiae excepturi, nesciunt, deserunt minima, voluptate quod. Delectus consequatur dolorum fugit ex eum, quod tempora labore minima doloremque a accusantium cum! Ab, quibusdam minus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla qui doloremque, molestias sint in similique aliquam voluptatibus temporibus ducimus id!</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis, et alias eaque error ullam doloribus neque vitae magnam eligendi ea repellendus voluptas ex! Eveniet sit voluptatem esse necessitatibus voluptatum fugiat saepe laboriosam eos? Illum quidem quam doloribus soluta deserunt qui temporibus tempora, obcaecati unde voluptatum ex necessitatibus voluptatem consequuntur recusandae voluptate est omnis numquam! Quos accusamus facere sequi. Natus quo voluptate sit maiores labore repellat itaque blanditiis ipsam a, praesentium fuga nobis aliquam recusandae voluptates in dicta? Tempora aliquid non ad facere adipisci vitae nesciunt nulla consectetur mollitia, quibusdam sequi at id reprehenderit maiores illum deserunt ducimus esse quae laborum fugiat. Pariatur deleniti iusto consequatur. Suscipit placeat aperiam doloribus blanditiis reprehenderit quasi illum voluptas sed iure odio, maxime porro. Odit, nihil sapiente. Dolore amet nesciunt dignissimos vitae impedit velit ea repellat delectus? Expedita, debitis. Deserunt numquam repellat, fugit odit delectus cum ex neque expedita ad ducimus, sed voluptatem est hic ullam, placeat officia? Odit amet voluptatibus iure! Fugit quas voluptatibus est excepturi porro nisi ad incidunt aut veritatis corrupti, magnam, officiis praesentium odio recusandae! Asperiores sit neque laborum inventore numquam iure facere consequuntur magni adipisci odit, commodi beatae omnis in amet iste maiores libero nihil? Ex voluptates ea enim!</p>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
