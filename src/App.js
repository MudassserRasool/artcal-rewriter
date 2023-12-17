import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forget from './pages/Authentication/Forget/Forget';
import Login from './pages/Authentication/Login/Login';
import ResetPassword from './pages/Authentication/ResetPassword/ResetPassword';
import SignUp from './pages/Authentication/SignUp/SignUp';
import Home from './pages/Home/Home';
import History from './pages/History/History';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='history' element={<History />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<Forget />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
