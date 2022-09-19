import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi} from '@fortawesome/free-solid-svg-icons'
import StubItem from "./StubItem"


const NavItem = (props) => {
  const [showStubItems, setShowStubItems] = useState(false);

  useEffect (()=>{
    setShowStubItems(props.active);
  }, [props.active])

  return (
    <div 
      className = "nav-item"
      id = {props.active ? "active" : "" } 
      onMouseEnter = {()=>setShowStubItems(true)}
      onMouseLeave = {()=> { if(!props.active) setShowStubItems(false)}}
    >
      <div>
        <FontAwesomeIcon icon={faWifi} style={{marginRight:"0.5rem" }}/>
        {props.name}
      </div>
      {showStubItems && <StubItem />}
    </div>
  )
};

export default NavItem;
