import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // const [activeLink, setActiveLink] = useState(1);
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">

      <ToastContainer />

      <Router>

        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/register" element={<Register />} />

        </Routes>

      </Router>

    </div >
  );
}

export default App;