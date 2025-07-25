import React, { useContext, useState } from 'react'
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function SignUp() {
    const {registerUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showpassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    });

    const onchangeHandler = (e) =>{
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        
        setFormData({...formData, [name]:value })
    }

    const passwordhandler = () =>{
        setShowpassword(!showpassword)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        registerUser(formData);
        navigate('/');
    }
  return (
    <div className='container p-3 p-md-5'>
            <div className="row">
                <div className="col-md-5 m-auto mt-5">
                    <form action="" onSubmit={submitHandler}>
                        <h1 className="display-6 m-0">Sign in</h1>
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
                        
                        <Link to='/signin' className=' text-dark'>Sign in</Link>
                       </div>

                       <button className='btn btn-dark p-2 fs-6 w-100 mt-3' type='submit'>Sign in <i className='bi bi-arrow-right mx-2'></i></button>
                       <button className="btn btn-light w-100 mt-2"><i className='bi bi-x-lg mx-2'></i>Cancel</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default SignUp