import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles.css";

import Nav from "./components/Nav"
import Header from "./components/Header"
import Login from "./components/Login"
import Footer from "./components/Footer"
import ItemsContainer from "./components/ItemsContainer"
import LandingInfo from "./components/LandingInfo"


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [devices, setDevices] = useState({});
  const [interfaces, setInterfaces] = useState({});
  const [currDevice, setCurrDevice] = useState(null);
  
  const getDevices = () => {
    if (!token) return;
    fetch ('api/invite/getDevices', {
      method: "GET",
      headers: {
        Authorization: token
      }
    })
    .then (res => res.json())
    .then(data => {
      setDevices(data);
      const interfacesObj = {};
      for (let key in data){
        interfacesObj[key] = [];
      }
      setInterfaces(interfacesObj);
    })
    .catch(err => {
      console.log(err);
    })
  }
  const getCurrDeviceInterfaces = () => {
    if (!currDevice || interfaces[currDevice].length > 0) return;
    const interfacesArr = devices[currDevice].interfaces;
    interfacesArr.forEach((interfaceId) => {
      fetch (`api/invite/getDeviceInterfaces/${interfaceId}`, {
        method: "GET",
        headers: {
          Authorization: token
        }
      })
      .then (res => res.json())
      .then(data => {
        setInterfaces(prevState => ({
          ...prevState, [currDevice]: [...prevState[currDevice], data]
        }))
      })
      .catch(err => {
        console.log(err);
      })
    })
  }
  const logout = () => {
    setLoggedIn(false);
    setToken("");
    setDevices({});
    setInterfaces({});
    setCurrDevice(null);
  }
  useEffect(()=>{
    getDevices();
  }, [token]);

  useEffect(()=>{
    getCurrDeviceInterfaces();
  }, [currDevice]);

  return (
    <>
      <Header setCurrDevice = {setCurrDevice} logout = {logout} loggedIn={loggedIn}/>
      {loggedIn && (
        <div className="main">
          <Nav 
            devices = {devices} 
            setDevices = {setDevices}
            setCurrDevice = {setCurrDevice}
            currDevice = {currDevice}
          />
          {!currDevice && <LandingInfo />}
          {currDevice && <ItemsContainer interfaces={interfaces[currDevice]} device={devices[currDevice]}/>}
        </div>)}
      {!loggedIn && <Login setToken={setToken} setLoggedIn={setLoggedIn}/>}
      <Footer />
    </>)
};

createRoot(document.getElementById('root')).render(<App/>);