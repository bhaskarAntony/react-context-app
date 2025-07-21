import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";



export const AuthContext = createContext();

const AuthContextPorvider = ({children})  => {
const [isLogin, setisLogin] = useState(false);
const [userData, setUserData] = useState({})
    const registerUser = async(data) =>{
        try {
            const responce = await axios.post('http://localhost:3004/users', data)
        console.log(responce);
        toast.success('Registered successfully.')
        } catch (error) {
            toast.error(error.message)
        }
        
    } 


    const loginUser = async(data) =>{
        
       try {
         const responce = await axios.get('http://localhost:3004/users');
        console.log(responce.data);
        const findeduser = responce.data.find(item=>item.email==data.email && item.password==data.password);
        console.log(findeduser);

        if(!findeduser){
           
            toast.error('Login failed Please check email or password');
            return false;
        }else{
             setUserData(findeduser)
            setisLogin(true);
            toast.success('Login is Successfull.')
            return true;
        }
        
       } catch (error) {
            toast.error(error.message)
       }   

        
    }

    const logoutUser = () =>{
        setisLogin(false);
    }

    
    return (
        <AuthContext.Provider value={{registerUser, loginUser, isLogin, logoutUser, userData}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextPorvider;