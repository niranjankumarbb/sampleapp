 import React,{useState} from 'react'
 import './App.css';  
 import  Routers from './routes.js' 
 import { UserProvider } from './UserContext.js'

function App() { 
  const [user, setUser]= useState({
    username: '',
    email: '',
    password: '',
    
}) 
console.log('app component user value', user)
  return (
    <div className="App">
     <UserProvider  value={{user, setUser}}>
        <Routers/>  
     </UserProvider>
     
    </div>
  );
}

export default App
