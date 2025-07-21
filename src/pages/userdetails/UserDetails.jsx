import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function UserDetails() {
    const {id} = useParams();
    const [userdata, setuserdata] = useState({})

    useEffect(()=>{
        const fetchuser = async() =>{
            try {
                const responce = await axios.get(`http://localhost:3004/users/${id}`);
                console.log(responce);
                setuserdata(responce.data)
            } catch (error) {
                toast.error('failed to get the user data')
            }
        }
        fetchuser();
    }, [])
  return (
    <div className='container p-3 p-md-5'>
        <div className="border p-3 shadow-sm">
            <p className="fs-5">{userdata.name}</p>
            <p className="fs-6"><b>Email address: </b> {userdata.email}</p>
            <p className="fs-6"><b>Phone number: </b> {userdata.mobile}</p>
        </div>
    </div>
  )
}

export default UserDetails