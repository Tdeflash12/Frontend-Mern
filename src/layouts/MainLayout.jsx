import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <footer>All rights reserved By Abhesh Mandal</footer>
    </>
  )
}

export default MainLayout