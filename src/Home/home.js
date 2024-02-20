import React, { useState,useEffect } from 'react'
import "./home.css"


function Home(){
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    return(
        <div className='home'>
            <div className='time'>
                <h1>{date.toLocaleTimeString()}</h1>
                <h1>{date.toLocaleDateString()}</h1>
            </div>

        </div>
    )
}

export default Home;