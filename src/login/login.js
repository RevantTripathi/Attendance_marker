import React, { Component } from 'react'
import './login.css'

function Login() {
    return (

        <div className='login_div'>
            <div className='login'>
                <div className='wl_text1'>
                    <h1>Welcome Back</h1>
                    <p>Glad to see you again<br/>
                    Login to your account bellow</p>
                </div>
                <div className='sec'>
                    <input className="I1" placeholder='Email' type='text' required></input>
                </div>
                <div className='sec2'>
                    <input className="I1" placeholder='Password' type='password' required></input>
                </div>
                <button className='b'>Login</button>
                <button className='bb'>Don't have a account? <div className='r'><b>Register</b></div></button>
            </div>
        </div>

    )
}

export default Login;