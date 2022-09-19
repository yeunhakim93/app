import React from "react";


const Interface = (props) => {
  return (
    <div className="item-container interface">
      {Object.keys(props.interface).map((key)=>
        (key!=="_id" && <div key={key}>
            <span className="property-name">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> 
            {props.interface[key] || "N/A"}
          </div>))}
    </div>
  )
};

export default Interface;
