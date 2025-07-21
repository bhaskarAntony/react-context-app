import React, { useContext, useState } from 'react'
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UsersData';

function SignIn() {
    const {loginUser, isLogin} = useContext(AuthContext);
    const {fetchUsers2} = useContext(UserContext)
    const [showpassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();

    const onchangeHandler = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value})
    }

    const passwordhandler = () =>{
        setShowpassword(!showpassword)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
       loginUser(formData).then((data)=>{
        console.log(data);
        if(data==true){
            fetchUsers2();
            navigate('/')
        }
       }).catch((error)=>{

       })
       

    }
  return (
    <div className='container p-3 p-md-5'>
            <div className="row">
                <div className="col-md-5 m-auto mt-5">
                    <form action="" onSubmit={submitHandler}>
                        <h1 className="display-6 m-0">Sign in</h1>
                        <p className='text-secondary mt-1'>Sign in to Website to view the home page</p>
                        <div className="form-group mt-4">
                            <label htmlFor="" className="form-label">Email address</label>
                            <input type="email" placeholder='exampe@gmail.com' required className='form-control p-2' onChange={onchangeHandler} value={formData.email} name='email' />
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
                        
                        <Link to='/signup' className=' text-dark'>Create account</Link>
                       </div>

                       <button className='btn btn-dark p-2 fs-6 w-100 mt-3' type='submit'>Sign in <i className='bi bi-arrow-right mx-2'></i></button>
                       <button className="btn btn-light w-100 mt-2"><i className='bi bi-x-lg mx-2'></i>Cancel</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default SignIn