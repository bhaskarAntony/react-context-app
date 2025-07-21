import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../../context/UsersData';

function Edit() {
    const {id} = useParams(); //getting id from the urls (params)
    const {registerUser} = useContext(AuthContext);
    const {fetchUsers2} = useContext(UserContext)
    const navigate = useNavigate();
    const [showpassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    });

    //mounting stage
    useEffect(()=>{
        const fetchinitialdata = async() =>{
          try {
              const responce = await axios.get(`http://localhost:3004/users/${id}`);
              console.log(responce);
              var fetcheddata = responce.data; //object
              setFormData({...formData, ...fetcheddata})
              
          } catch (error) {
                toast.error(error.message)
          }    
        }
        fetchinitialdata();
    }, [])
    const onchangeHandler = (e) =>{
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        
        setFormData({...formData, [name]:value })
    }

    const passwordhandler = () =>{
        setShowpassword(!showpassword)
    }

    const updateHandler = async(e) =>{
        e.preventDefault();
       try {
         const responce = await axios.put(`http://localhost:3004/users/${id}`, formData)
         console.log(responce);
         toast.success('user detailes Updated..');
         fetchUsers2();
         navigate('/users')
       } catch (error) {
            toast.error(error.message)
       }
    }
    
  return (
    <div className='container p-3 p-md-5'>
            <div className="row">
                <div className="col-md-5 m-auto mt-5">
                    <form action="" onSubmit={updateHandler}>
                        <h1 className="display-6 m-0">Sign in </h1>
                        <p className='text-secondary mt-1'>Sign in to Website to view the home page</p>
                        <div className="form-group mt-4">
                            <label htmlFor="" className="form-label">username</label>
                            <input type="text" name='name' placeholder='Enter your username' required className='form-control p-2' onChange={onchangeHandler} value={formData.name} />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="email" name='email' placeholder='exampe@gmail.com' required className='form-control p-2' onChange={onchangeHandler} value={formData.email} />
                        </div>

                        <div className="form-group mt-4">
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" placeholder='+91 000-0000-000' required className='form-control p-2' onChange={onchangeHandler} value={formData.mobile} name='mobile'/>
                        </div>

                         <div className="form-group mt-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type={showpassword==true?'text':'password'} placeholder='exampe@gmail.com' required className='form-control p-2' onChange={onchangeHandler} value={formData.password} name='password' />
                        </div>
                       <div className="d-flex gap-2 align-items-center justify-content-between">
                         <div className="form-label mt-2 d-flex gap-2 align-items-center">
                            <input type="checkbox" name="" id="" onClick={passwordhandler} />
                           <span> {showpassword==true?'Hide Password':'Show Password'}</span>
                        </div>
                        
                       </div>

                       <button className='btn btn-dark p-2 fs-6 w-100 mt-3' type='submit'>Save Changes <i className='bi bi-arrow-right mx-2'></i></button>
                       <button className="btn btn-light w-100 mt-2"><i className='bi bi-x-lg mx-2'></i>Cancel</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Edit