import React, { useState, useEffect } from 'react'
import "./home.css"
import Empty from "./empty.jpeg"


function Home({ src, alt, name, deg, job }) {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });
    return (
        <div className='main'>
            <div className='profile'>
                <div className='c1'>
                    {src ? (
                        <img className="icon" src={src} alt={alt} />
                    ) : (
                        <img className="icon2" src={Empty} alt={alt} />
                    )}
                    <div className='profile_details'>
                        <h2>{name}<br />
                            {deg}<br />
                            {job}
                        </h2>

                    </div>
                </div>
                <div className='c2'>
                    <div className='time'>
                        <h1>{date.toLocaleTimeString()}</h1>
                        <h1>{date.toLocaleDateString()}</h1>
                    </div>
                </div>
            </div>

            <div className='bt_sec'>
                <button style={{ backgroundColor: "#90CAF9" }}>Take Attendance</button>
                <button style={{ backgroundColor: "#90CAF9" }}>My Attendance Details</button>
                <button style={{ backgroundColor: "#90CAF9" }}>Leave Apply </button>
            </div>

        </div>


    )
}

export default Home;