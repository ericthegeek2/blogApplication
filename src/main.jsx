import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'


import {createBrowserRouter} from "react-router-dom"


import { store } from './app/store'
import { Provider } from 'react-redux'

import App from './App.jsx'
import './index.css'
import Layout from './Layouts/common/Layout2.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/routes/Home.jsx'
import PostDetail from './pages/routes/PostDetail.jsx'
import Register from './pages/Auth/Register.jsx'
import Login from './pages/Auth/Login.jsx'
import UserProfile from './pages/routes/UserProfile.jsx'
import EditPost from './pages/routes/EditPost.jsx'
import Authors from './pages/routes/Authors.jsx'
import CreatePost from './pages/routes/CreatePost.jsx'
import CategoryPosts from './pages/routes/CategoryPosts.jsx'
import AuthorPosts from './pages/routes/AuthorPosts.jsx'

import Logout from './pages/Auth/Logout.jsx'
import DeletePost from './pages/routes/DeletePost.jsx'
import UserBoard from './pages/routes/UserBoard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "posts/:id",
        element: <PostDetail />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "profile/:id",
        element: <UserProfile />
      },
      {
        path: "authors",
        element: <Authors />
      },
      {
        path: "create",
        element: <CreatePost />
      },
      {
        path: "posts/categories/:category",
        element: <CategoryPosts />
      },
      {
        path: "posts/users/:id",
        element: <AuthorPosts />
      },
      {
        path: "posts/:id/edit",
        element: <EditPost />
      },
      {
        path: "posts/:id/delete",
        element: <DeletePost />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "myposts/:id",
        element: <UserBoard />
      }
    ]



  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
   
  </React.StrictMode>,
)
