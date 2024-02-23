import React, { useState, useEffect } from 'react'
import "./home.css"
import Empty from "./empty.jpeg"


function Home({ src, alt }) {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });
    return (
        <div className='home'>
            <div className='profile'>
                {src ? (
                    <img className="icon" src={src} alt={alt} />
                ) : (
                    <img className="icon2" src={Empty} alt={alt} />
                )}
                <div className='profile_details'>
                    <h2>Revant<br/>
                    Front-end Developer</h2>
                </div>
            </div>

            <div className='time'>
                <h1>{date.toLocaleTimeString()}</h1>
                <h1>{date.toLocaleDateString()}</h1>
            </div>

        </div>
    )
}

export default Home;