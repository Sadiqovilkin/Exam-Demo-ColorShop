import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { ROUTER } from './router/router';
import { DataContextProvider } from './context/Context';
const routes = createBrowserRouter(ROUTER)
function App() {


  return (
    <>
    <DataContextProvider>
       <RouterProvider router={routes} />
    </DataContextProvider>
       {/* <Home/> */}
    </>
  )
}

export default App
