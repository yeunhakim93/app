import React from "react";
import Interface from "./Interface"
import Device from "./Device"

const InterfacesContainer = (props) => (
  <div className="items-container">
    <h3>Device</h3>
    {props.device && <Device device={props.device}/>}
    <h3>Interfaces</h3>
    {props.interfaces.length > 0 && props.interfaces.map((deviceInterface) => <Interface interface={deviceInterface}/>)}
    {props.interfaces.length === 0 && <>Interface not available</>}
  </div>
);

export default InterfacesContainer;
