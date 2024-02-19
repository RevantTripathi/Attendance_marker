import React, { Component } from 'react'
import './login.css'

function Login() {
    return (

        <div className='login_div'>
            <div className='login'>
                <div className='wl_text1'>
                    <h1>Welcome Back</h1>
                </div>
                <div className='sec'>
                    {/* <label>Email</label> */}
                    <input placeholder='Email' type='text'></input>
                </div>
                <div className='sec2'>
                    {/* <label>Password</label> */}
                    <input placeholder='Password' type='password'></input>
                </div>
                <button className='b'>Login</button>
                <button className='bb'>Don't have a account? Register</button>
            </div>
        </div>

    )
}

export default Login;