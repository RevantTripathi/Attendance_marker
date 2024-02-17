import React, { Component } from 'react'
import './login.css'

function Login() {
    return (

        <div className='login_div'>
            <div className='login'>
                <div className='wl_text'>
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
            </div>
        </div>

    )
}

export default Login;