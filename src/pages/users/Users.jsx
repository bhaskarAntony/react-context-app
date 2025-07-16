import React, { useContext } from 'react'
import './users.css'
import { UserContext } from '../../context/UsersData'
import { Link } from 'react-router-dom';

function Users() {
    const {usersData} = useContext(UserContext);

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
                        <button className='btn btn-danger btn-sm mx-1'><i className='bi bi-trash'></i></button>
                        <Link to="/" className='btn btn-success  btn-sm mx-1'><i className='bi bi-pen'></i></Link>
                        <Link to="/" className='btn btn-dark btn-sm mx-1'><i className='bi bi-eye'></i></Link>
                    </td>
                </tr>
            ))
        }
       </table>
    </div>
  )
}

export default Users