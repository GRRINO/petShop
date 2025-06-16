import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main.tsx'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import PetCreate from './pages/PetCreate.tsx'
import Pets from './pages/Pets.tsx'
import { ShoppingHistory } from './pages/ShoppingHistory.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Order from './pages/Order.tsx'
import { PetList } from './pages/PetList.tsx'
import MoreService from './pages/MoreServices.tsx'
// import Profile from './pages/Profile.tsx'
// import Protect from './pages/Protect.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/pets',
        element:<Pets/>
      },
      {
        path:'/services',
        element:<MoreService/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/admin/petCreate',
        element:<PetCreate />
      },
       {
        path:'/admin/dashBoard',
        element:<Dashboard />
      },
      {
        path:'/userHistory',
        element:<ShoppingHistory />
      },
      {
        path:'/admin/dashBoard/order',
        element:<Order />
      },
      {
        path:'/admin/dashBoard/pets',
        element:<PetList />
      },
      // {
      //   path:'/profile',
      //   element:<Protect><Profile /></Protect>
      // }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider>
  </StrictMode>
)
