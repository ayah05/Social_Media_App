import React from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';

export const Register = () => {
  return (
    <div className='register'>
    <div className="card">
      <div className="left">
        <h1>Lama Social.</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Commodi quis repellendus id blanditiis expedita doloremque! 
          Praesentium, facilis quam, unde sapiente ab ex sed non cum 
          recusandae nisi suscipit ducimus at?</p>
        <span>Already have an account?</span>
        <Link to="/login">
        <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Name'/>
          <input type="password" placeholder='Password'/>
          <button>Register</button>
        </form>
        
      </div>
    </div>
    </div>
  )
}
