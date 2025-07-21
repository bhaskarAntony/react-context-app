import React, { useContext } from 'react'
import './users.css'
import { UserContext } from '../../context/UsersData'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Users() {
    const {usersData, fetchUsers2} = useContext(UserContext);

    const deleteHanlder = async(id) =>{
        try {
            const response = await axios.delete(`http://localhost:3004/users/${id}`) 
            console.log(response);
            toast.success('user deleted successfully.');
            fetchUsers2();
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='container p-3 p-md-5'>
       <h1 className="display-6">Users List</h1>
       <hr />
       
       <table className='w-100'>
        <tr className='bg-black text-white'>
            <th>Sl.No</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Phone number</th>
            <th>Actions</th>
        </tr>
        {
            usersData.map((item, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                        <button className='btn btn-danger btn-sm mx-1' onClick={()=>deleteHanlder(item.id)}><i className='bi bi-trash'></i></button>
                        <Link to={`/edit/${item.id}`} className='btn btn-success  btn-sm mx-1'><i className='bi bi-pen'></i></Link>
                        <Link to={`/user/details/${item.id}`} className='btn btn-dark btn-sm mx-1'><i className='bi bi-eye'></i></Link>
                    </td>
                </tr>
            ))
        }
       </table>
    </div>
  )
}

export default Users