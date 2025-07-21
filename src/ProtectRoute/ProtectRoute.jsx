import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectRoute() {
    const {isLogin} = useContext(AuthContext);

  return (
    <>
        {
            isLogin==true? <Outlet/> : <Navigate to="/signin"/>
        }
    </>
  )
}

export default ProtectRoute