import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import deletebtn from "../assets/delete.png";
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUser } from '../store/Actions/auth.action';
import Loader from './Loader';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const CompanyData = useSelector((state) => state.authReducer.userRecords)
    const [companies, setCompanies] = useState(CompanyData);
    const isLoading = useSelector((state) => state.authReducer.isLoading)
    const [status, setStatus] = useState("Status");
    const userToken = Cookies.get("usertoken");
    const navigate = useNavigate();

    const deleteHandler = (objectId) => {
        dispatch(deleteUser(objectId));
    }

    useEffect(() => {
        dispatch(getUser())
    }, [])

    useEffect(() => {
        setCompanies(CompanyData)
        console.log(userToken);
        if (!userToken) {
            navigate("/login");
        }
    }, [CompanyData])



    const handleFilter = (data) => {
        let temp = data === "All" ? CompanyData : CompanyData.filter(x => x.status === data);
        setCompanies(temp)
    }



    return (
        isLoading ? <Loader /> :
            <div className='home'>
                <div className="heading">
                    <h1>Team Members</h1>
                    <button className='btn add' onClick={() => setOpenModal(!openModal)}>Add Members +</button>
                </div>
                <Dropdown status={status} setStatus={setStatus} handleFilter={handleFilter} />
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
                {companies?.map((data) => (
                    <div className={`heading-tags ${data.status}`} key={data.objectId}>
                        <div className="label">
                            <input type="checkbox" />
                            <div>{data.name}</div>
                        </div>
                        <span>{data.company}</span>
                        <span>{data.status}</span>
                        <span>{JSON.stringify(data.date).slice(1, 11)}</span>
                        <span className='deletebtn'>
                            {data.notes}
                            <img src={deletebtn} alt="delete" onClick={() => deleteHandler(data.objectId)} />
                        </span>
                    </div>
                ))}

                {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} CompanyData={CompanyData} />}

            </div>
    )
}

export default Home