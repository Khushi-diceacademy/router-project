import React from "react";
import Child from "./Child";

function Parent({ familyName }) {
  return <div>
    <h1>Parent is serving the family name to child component</h1>
    <Child familyName={familyName}/>
  </div>;
}
// create a new folder install tailwind home, about,products , users 

export default Parent;
