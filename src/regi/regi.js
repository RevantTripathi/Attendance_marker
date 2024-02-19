import React, { Component } from 'react'
import './regi.css'

function Regi() {
    return (

        <div className='regi_div'>
            <div className='regi'>

                <div className='wl_text'>
                    <h1>Sign Up</h1>
                </div>
                <div className='r1'>
                    <div className='sec3'>
                        <input placeholder='First Name' type='text'></input>
                    </div>

                    <div className='sec3'>
                        <input placeholder='Last Name' type='text'></input>
                    </div>
                </div>
                <div className='r1'>
                    <div className='sec3'>
                        <input placeholder='Email' type='text'></input>
                    </div>
                    <div className='sec3'>
                        <input placeholder='Number' type='number'></input>
                    </div>
                </div>
                <div className='r1'>
                    <div className='sec3'>
                        <input placeholder='Employee ID' type='number'></input>
                    </div>
                    <div className='sec3'>
                        <input placeholder='Set Password' type='password'></input>
                    </div>
                </div>
                <div className='r2'>
                    <button className='b1'>Login</button>
                    <button className='b2'>Register</button>
                </div>

            </div>
        </div>

    )
}

export default Regi;