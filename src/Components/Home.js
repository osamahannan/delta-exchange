import React from 'react'
import Dropdown from './Dropdown'
import { CompanyData } from './CompanyData'
import deletebtn from "../assets/delete.png";

const Home = () => {

    return (
        <div className='home'>
            <div className="heading">
                <h1>Team Members</h1>
                <button className='btn add'>Add Members +</button>
            </div>
            <Dropdown />
            <div className="heading-tags">
                <div className="label">
                    <input type="checkbox" />
                    <h3>Name</h3>
                </div>
                <h3>Company</h3>
                <h3>Status</h3>
                <h3>Last Updated</h3>
                <h3>Notes</h3>
            </div>
            {CompanyData.map((data) => (
                <div className={`heading-tags ${data.Status}`}>
                    <div className="label">
                        <input type="checkbox" />
                        <div>{data.name}</div>
                    </div>
                    <span>{data.Company}</span>
                    <span>{data.Status}</span>
                    <span>Last Updated</span>
                    <span className='deletebtn'>
                        {data.Notes}
                        <img src={deletebtn} alt="delete" />
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Home