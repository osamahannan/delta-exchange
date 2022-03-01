import React from 'react'
import Dropdown from './Dropdown'

const Home = () => {

    return (
        <div className='home'>
            <div className="heading">
                <h1>Team Members</h1>
                <button className='btn add'>Add Members +</button>
            </div>
            <Dropdown />
        </div>
    )
}

export default Home