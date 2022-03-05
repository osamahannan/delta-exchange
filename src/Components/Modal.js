import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeBtn from "../assets/closeicon.jpg"
import { createUser } from '../store/Actions/auth.action'

const Modal = ({ openModal, setOpenModal }) => {

    const dispatch = useDispatch()
    const [user, setUser] = useState({ name: "", company: "", status: "", notes: "", date: new Date() })

    let name, value;
    const inputHandler = (e) => {
        e.preventDefault()
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(user))
        setOpenModal(false);
    }

    return (
        <div className='modalBackground'>
            <form className="modalContainer">
                <div className="addMember">
                    <h2>Add Members</h2>
                    <img src={closeBtn} alt="close" onClick={() => setOpenModal(!openModal)} />
                </div>
                <div className="modalSectors">
                    <h3>Name</h3>
                    <input type="text" onChange={inputHandler} name="name" value={user.name} autoComplete="off" />
                </div>
                <div className="modalSectors">
                    <h3>Company</h3>
                    <input type="text" onChange={inputHandler} name="company" value={user.company}
                        autoComplete="off" />
                </div>
                <div className="modalSectors">
                    <h3>Status</h3>
                    <input type="text" onChange={inputHandler} name="status" value={user.status}
                        autoComplete="off" />
                </div>
                <div className="modalSectors">
                    <h3>Notes</h3>
                    <input type="text" onChange={inputHandler} name="notes" value={user.notes}
                        autoComplete="off" />
                </div>
                <div className="buttonSector">
                    <button onClick={() => setOpenModal(!openModal)} className="cancelbtn">Cancel</button>
                    <button className='btn savebtn' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Modal