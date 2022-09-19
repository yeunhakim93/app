import React from "react";


const Device = (props) => {
  return (
    <div className="item-container device">
      {Object.keys(props.device).map((key)=>
        (key!=="_id" && <div key={key}>
            <span className="property-name">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> 
            {props.device[key] || "N/A"}
          </div>))}
    </div>
  )
};

export default Device;
