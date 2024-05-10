import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forget from './pages/Authentication/Forget/Forget';
import Login from './pages/Authentication/Login/Login';
import ResetPassword from './pages/Authentication/ResetPassword/ResetPassword';
import SignUp from './pages/Authentication/SignUp/SignUp';
import History from './pages/History/History';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<Forget />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
