import React from "react";
import NavItem from "./NavItem"

const Nav = (props) => {
  return(
    <div className="nav-bar">
      <ul className="nav-ul">
        {Object.keys(props.devices).map( key => {
          return (
            <li 
              key={key} 
              onClick={() => props.setCurrDevice(key)}
            > 
              <NavItem 
                name = {props.devices[key].name} 
                active = {key === props.currDevice}
              /> 
            </li>
          )})
        }
      </ul>
    </div>
  )
};

export default Nav;
