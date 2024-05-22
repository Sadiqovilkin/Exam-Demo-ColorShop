import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { ROUTER } from './router/router';
import Home from './pages/client/Home/Home';
const routes = createBrowserRouter(ROUTER)
function App() {


  return (
    <>
       <RouterProvider router={routes} />
       {/* <Home/> */}
    </>
  )
}

export default App
