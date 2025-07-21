import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [usersData, setusersData] = useState([]);

   
    useEffect(()=>{
         const fetchUsers = async()=>{
       try {
         const responce = await axios.get('http://localhost:3004/users');
        console.log(responce.data);
        toast.success('data fetched successfully..');
        setusersData(responce.data)
       } catch (error) {
            toast.error('Something went wrong please refresh the site to check again..')
       }
        
    }
    fetchUsers();
    }, [])

     const fetchUsers2 = async()=>{
       try {
         const responce = await axios.get('http://localhost:3004/users');
        console.log(responce.data);
        toast.success('data fetched successfully..');
        setusersData(responce.data)
       } catch (error) {
            toast.error('Something went wrong please refresh the site to check again..')
       }
        
    }


    return (
        <UserContext.Provider value={{usersData, fetchUsers2}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;