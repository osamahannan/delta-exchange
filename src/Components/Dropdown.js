import React, { useEffect, useState } from 'react'
import arrowdown from "../assets/arrow-down.png";
import arrowup from "../assets/arrow-up.png";

const Dropdown = () => {

    const userData = [{ name: "DC United" }, { name: "Manchester United" }, { name: "LA Galaxy" }]

    const [company, setCompany] = useState(userData);
    const [showBox, setShowBox] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [selected, setSelected] = useState("Status");

    useEffect(() => {
        setCompany(userData);
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;
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
        <div className="filters">
            <div className='dropdown'>
                <div className="dropdown-btn" onClick={() => setShowBox(!showBox)}>
                    Company({company.length})
                    {showBox ? <img src={arrowup} alt="arrowup" className='arrowup' /> : <img src={arrowdown} alt="dropdown" className='arrowdown' />}

                </div>
                {showBox ?
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
                    </div> : ""
                }
            </div>

            <div className='dropdown status'>
                <div className="dropdown-btn" onClick={() => setShowStatus(!showStatus)}>
                    {selected}
                    {showStatus ? <img src={arrowup} alt="arrowup" className='arrowup' /> : <img src={arrowdown} alt="dropdown" className='arrowdown' />}
                </div>
                {showStatus ?
                    <div className="dropdown-content status-content">
                        <div className="dropdown-item" onClick={e => { setSelected(e.target.textContent); setShowStatus(!showStatus) }}>All </div>
                        <div className="dropdown-item" onClick={e => { setSelected(e.target.textContent); setShowStatus(!showStatus) }}>Active </div>
                        <div className="dropdown-item" onClick={e => { setSelected(e.target.textContent); setShowStatus(!showStatus) }}>Closed </div>
                    </div> : ""
                }
            </div>

        </div>
    )
}

export default Dropdown