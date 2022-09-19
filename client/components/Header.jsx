import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
  <>
    <div className="color-bar">
      <svg width="1600" height="17" viewBox="0 0 1600 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M896.121 -0.464111L1655.28 0.396551L1398.84 125.528L1154.35 125.251L896.121 -0.464111Z" fill="#F28521"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M566.191 -0.838379L1325.35 0.0222836L1068.91 125.154L824.42 124.877L566.191 -0.838379Z" fill="#74AE55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M235.195 -1.21362L994.352 -0.352961L737.918 124.779L493.424 124.501L235.195 -1.21362Z" fill="#9FCB3A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M-94.7344 -1.5874L664.422 -0.72674L407.988 124.405L163.494 124.128L-94.7344 -1.5874Z" fill="#2D4D6C"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M-424.664 -1.96143L334.494 -1.80935L77.7821 123.561L-166.713 123.512L-424.664 -1.96143Z" fill="#4EABCB"/>
      </svg>
    </div>
    <header>
      <img src="INVITE.png" onClick={()=>{props.setCurrDevice(null)}} style={{cursor:'pointer'}}></img>
      <div className="logout-button" onClick={props.logout}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{marginRight:"0.5rem"}}/>
        Logout
      </div>
    </header>
  </>
);

export default Header;
