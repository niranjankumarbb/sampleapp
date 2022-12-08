import {React} from 'react'
import {Link,Route, Routes,BrowserRouter,Navigate} from 'react-router-dom' 
import Login1 from './pages/Login1.js'
 import Dashboard from './pages/dashboard/Dashboard.js'
 import ItemList from './pages/itemlist/ItemList.js'
 import Home from './pages/Home/Home.js'
 import About from './pages/about/About.js'
 import Features from './pages/features/Features.js'
  
 
function Routers() {
  return (
    <div>
         <BrowserRouter > 
           <Routes>
             <Route path='/' element={<Login1/>} exact={true} /> 
             <Route path='/dashboard' element={<Dashboard/>} > 
                <Route path='itemlist' element={<ItemList/>} /> 
                <Route path='home' element={<Home/>} /> 
                <Route path='Feature' element={<Features/>} /> 
                 <Route path='About' element={<About/>} /> 
                <Route path='Signup' element={<Navigate to="/" replace /> } /> 

             </Route>
          </Routes>  
          </BrowserRouter>
        </div>
  )
}

export default Routers