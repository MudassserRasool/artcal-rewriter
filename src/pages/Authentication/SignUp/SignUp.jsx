import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <form className="w-25 mx-auto border border-2 shadow-sm p-3  rounded" style={{marginTop:170}}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
          <div id="username" className="form-text">
            {/* We'll never share your email with anyone else. */}
          </div>
        </div>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
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

      {/* sign up   */}
      <div className="text-center mt-3">
        <Link to="/login">Already have account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
