import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Forget = () => {
  return (
    <div>
        <form className="w-25 mx-auto border border-2 shadow-sm p-3  rounded" style={{marginTop:200}}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
            </div>
            </div>        
            {/* <button type="submit" className="btn btn-primary">
            Submit
            </button> */}

<Button
className='mx-auto d-block mt-3'
              variant="contained"
              style={{
                borderRadius: 30,
                paddingInline: 25,
                paddingTop: 7,
                paddingBottom: 7,
                backgroundColor: 'black',
                fontSize: 15,
              }}
            >
              Submit
            </Button>
        </form>
        <div className="text-center mt-3">
        <Link to="/resetpassword">Reset Password</Link>
      </div>
    </div>
  )
}

export default Forget