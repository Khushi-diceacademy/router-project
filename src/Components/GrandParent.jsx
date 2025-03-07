import React from "react";
import Parent from "./Parent";

function GrandParent() {
  const familyName = "Gupta";
  return (
    <div>
      <h1>GrandParents name {familyName}</h1>
      <Parent familyName={familyName} />
    </div>
  );
  // create a new folder install tailwind home, about,products , users 

}

export default GrandParent;
