import React, {useContext} from 'react';
import "./Login.scss";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

export const Login = () => {
  const {login} = useContext(AuthContext)
  
  const handleLogin = () =>{
    login();
  }

  return (
    <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Hello World.</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Commodi quis repellendus id blanditiis expedita doloremque! 
          Praesentium, facilis quam, unde sapiente ab ex sed non cum 
          recusandae nisi suscipit ducimus at?</p>
        <span>No account yet?</span>
        <Link to="/register">
        <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='Password'/>
          <button onClick={handleLogin}>Login</button>
        </form>
        
      </div>
    </div>
    </div>
  )
}
