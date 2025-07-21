import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import UserContextProvider from './context/UsersData.jsx'
import AuthContextPorvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContextProvider>
    <AuthContextPorvider>
        <App />
    </AuthContextPorvider>
   </UserContextProvider>
  </StrictMode>,
)
