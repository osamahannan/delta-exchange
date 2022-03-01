import React, { useEffect, useState } from 'react'
import dropdownbtn from "../assets/dropdown-btn.png";

const Dropdown = () => {

    const userData = [{ name: "DC United" }, { name: "Manchester United" }, { name: "LA Galaxy" }]

    const [company, setCompany] = useState(userData);

    useEffect(() => {
        setCompany(userData);
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        console.log(e.target.value);
        if (name === "allSelect") {
            let tempUser = company.map(user => {
                return {
                    ...user, isChecked: checked
                }
            })
            setCompany(tempUser)
        } else {
            let tempUser = company.map(user => user.name === name ? { ...user, isChecked: checked } : user
            )
            setCompany(tempUser);
        }
    }

    return (
        <div className='dropdown'>
            <div className="dropdown-btn">
                Company({company.length})
                <img src={dropdownbtn} alt="dropdown" />
            </div>
            <div className="dropdown-content">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className='check-input'
                        name="allSelect"
                        onChange={handleChange}
                        checked={company.filter((user) => user?.isChecked !== true).length < 1}
                    />
                    <label className='form-label'>Select all</label>
                </div>
                {company.map((item) => (
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className='check-input'
                            name={item.name}
                            onChange={handleChange}
                            checked={item?.isChecked || false}
                        />
                        <label className='form-label'>{item.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown