import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import MainLayout from './layouts/MainLayout'
import ProductsDetail from './pages/ProductsDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthLayout from './layouts/AuthLayout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>    
          <Route index element={<App/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='products'>
            <Route index element ={<Product/>} />  
            <Route path=':id' element={<ProductsDetail/>}/>
          </Route>  
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Route>
        // auth pages
        //http://localhost:3000/auth/login
        <Route path = "auth" element={
            <AuthLayout/>
        }>
             <Route path = 'login'element={<Login/>}/>
             <Route path='register'element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default Router