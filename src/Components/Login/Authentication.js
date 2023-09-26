import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import "./Authentication.css"

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='auth_container'>
      {isLogin ? <Login /> : <Register />}
      {isLogin ? 
        <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a></p> :
        <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Sign In</a></p>
      }
    </div>
  );
}

export default Authentication;
