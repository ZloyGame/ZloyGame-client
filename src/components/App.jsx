import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import './app.css';
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);


  return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <div className="wrap">
            {!isAuth ? (
                <Routes>
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/*" element={<Navigate to="/login" />} />
                </Routes>
            ) : (
                <Routes>
                  <Route path="/" element={<Disk />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
