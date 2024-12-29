import React from 'react'
import '../Components/NavigationBar';
import NavigationBar from '../Components/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
const Layout = () => {
  return (
   <>
   
<NavigationBar/>
<Outlet/>
<Footer/>


</>



  
  )
}

export default Layout;
