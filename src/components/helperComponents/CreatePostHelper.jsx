import React, {useState} from 'react'

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css'

/**********************dummy category post */
const post_categories = [
    'Agriculture', 'Business', 'Education', 'Entertainment', 'Art', 'Science', 'Technology', 'Sports', 'uncategorized'
  ]

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]  


const modules = {
    toolbar: [
        [{'header': [1,2,3,4,5,6, false]}],
        ['bold', 'italic', 'underflow', 'strike','blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ]
}

const CreatePostHelper = () => {
    const [Title, setTitle] = useState('')
    const [category, setCategory] = useState('uncategorized')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')

  return (
    <section className='create-post'>
    <div className='container'>
        <h2>Create Post</h2>
        <p className='form_error-message'>This is an error message</p>

        <form className='form create-post_form'>
          <input type="text" placeholder='Title' value={Title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>

            {
               post_categories.map(cat => <option key={cat}>{cat}</option>)
            }
            
          </select>
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>

          <input type="file" name="file" id="file" onChange={e => setThumbnail(e.target.files[0])} accept='png jpg jpeg'/>

          <button type='submit' className='btn primary'>create</button>
        </form>
    </div>
</section>
  )
}

export default CreatePostHelper
