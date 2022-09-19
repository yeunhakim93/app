import React from "react";

const StubItems = () => {
  const itemNames = ['x','y','z'];
  return (
    <div className="stub-items">
      {itemNames.map((letter)=><div className="stub-item" key={letter}> {'item '+letter} </div>)}
    </div>
  )
};

export default StubItems;
