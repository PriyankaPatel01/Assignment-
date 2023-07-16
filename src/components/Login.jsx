import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [name, setname]=useState("");
  const nav=useNavigate();

  const handleClick=(e)=>
  {
    const x=e.target.value;
    setname(x);
    
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();

  }

    const [go, setgo]=useState(false);

    if(go)
    {
      nav('/landing', {state: {name: name}});
    }


  return (
    <>

    <div className="container">
        <div className="col wel">
            <h1>Welcome Back!!</h1>
        </div>
        <div className="col colo">
            <h1>Login</h1>
            <p>Welcome Back! Please Login to your account.</p>
            <br />
            <form onSubmit={handleSubmit}>
                <label>UserName</label><br />
                <input name="user" type="text" onChange={handleClick} value={name}/><br />
                <label>Password</label><br />
                <input type="password" />
                <br />
                <a href="/">Forgot password?</a>
                <br /><br /><br />
               <center><button type="submit" onClick={() => {setgo(true)}} className='btn'> LogIn</button></center> 
            </form>
        </div>
    </div>
    </>

  )
}

export default Login
