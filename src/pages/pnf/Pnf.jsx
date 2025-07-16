import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='container p-3 p-md-5'>
        <div className="row">
            <div className="col-md-4 m-auto">
                <div className="text-center p-3 mt-5">
                    <h1 className="display-1 text-danger">404</h1>
                    <h1 className="display-6">Page not found</h1>
                    <Link to="/" className='btn btn-dark mt-3'><i className='bi bi-arrow-left mx-2'></i>Back to home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pnf