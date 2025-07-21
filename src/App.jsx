import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Books from './pages/books/Books'
import SignIn from './pages/authentication/SignIn'
import SignUp from './pages/authentication/SignUp'
import Pnf from './pages/pnf/Pnf'
import { ToastContainer } from 'react-toastify'
import ProtectRoute from './ProtectRoute/ProtectRoute'
import Edit from './pages/Edit/Edit'
import UserDetails from './pages/userdetails/UserDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route element={<ProtectRoute/>}>
           <Route path="/" element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          </Route>


          <Route path='/books' element={<Books/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/user/details/:id' element={<UserDetails/>}/>
          <Route path='/*' element={<Pnf/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App