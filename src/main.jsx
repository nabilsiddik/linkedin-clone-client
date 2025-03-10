import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import MyNetworks from './Pages/MyNetworks/MyNetworks.jsx'
import Jobs from './Pages/Jobs/Jobs.jsx'
import Messages from './Pages/Messages/Messages.jsx'
import Notifications from './Pages/Notifications/Notifications.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import Login from './Pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/my-network',
        element: <MyNetworks />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
    ]
  },
  {
    path: 'registration',
    element: <Registration/>
  },
  {
    path: 'login',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
