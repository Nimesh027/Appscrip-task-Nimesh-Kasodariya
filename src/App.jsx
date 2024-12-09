import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout'
import ErrorPage from './components/Pages/ErrorPage'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import './App.css'
import Skills from './components/Pages/Skills'
import Stories from './components/Pages/Stories'
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'stories',
        element: <Stories />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
