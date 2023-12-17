import { Button, Link } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <div>
      <form
        className="w-25 mx-auto border border-2 shadow-sm p-3  rounded"
        style={{ marginTop: 180 }}
      >
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
          className="mx-auto d-block mt-3"
          variant="contained"
          style={{
            borderRadius: 30,
            paddingInline: 25,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'black',
            fontSize: 15,
          }}
        >
          Submit
        </Button>
      </form>

      {/* sign up   */}
      <div className="text-center mt-3">
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </div>

      {/* forget password */}
      <div className="text-center mt-3">
        <Link href="/forgetpassword">Forget Password?</Link>
      </div>
    </div>
  );
};

export default Login;
