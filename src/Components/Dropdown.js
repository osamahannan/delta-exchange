import React, { useEffect, useState } from 'react'
import arrowdown from "../assets/arrow-down.png";
import arrowup from "../assets/arrow-up.png";
import { useSelector } from 'react-redux';

const Dropdown = ({ status, setStatus, handleFilter }) => {
    const CompanyData = useSelector((state) => state.authReducer.userRecords)
    const isLoading = useSelector((state) => state.authReducer.isLoading)
    const [company, setCompany] = useState(CompanyData);
    const [showBox, setShowBox] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    useEffect(() => {
        setCompany(CompanyData);
    }, [CompanyData])

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

    // const onFilterSelect = () => {
    //     console.log(status)
    //     filterHandle(status)
    // }

    return (
        !isLoading && <>
            <div className="filters">
                <div className='dropdown'>
                    <div className="dropdown-btn" onClick={() => setShowBox(!showBox)}>
                        Company({company?.length})
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
                                    checked={company?.filter((user) => user?.isChecked !== true).length < 1}
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
                    <div className="dropdown-btn" onClick={() => setShowStatus(!showStatus)} >
                        {status}
                        {showStatus ? <img src={arrowup} alt="arrowup" className='arrowup' /> : <img src={arrowdown} alt="dropdown" className='arrowdown' />}
                    </div>
                    {showStatus ?
                        <div className="dropdown-content status-content">
                            <div className="dropdown-item" onClick={e => { setStatus(e.target.textContent); setShowStatus(!showStatus); handleFilter("All") }}>All </div>
                            <div className="dropdown-item" onClick={e => { setStatus(e.target.textContent); setShowStatus(!showStatus); handleFilter("Active") }}>Active </div>
                            <div className="dropdown-item" onClick={e => { setStatus(e.target.textContent); setShowStatus(!showStatus); handleFilter("Closed") }}>Closed </div>
                        </div> : ""
                    }
                </div>

            </div>
        </>
    )
}

export default Dropdown