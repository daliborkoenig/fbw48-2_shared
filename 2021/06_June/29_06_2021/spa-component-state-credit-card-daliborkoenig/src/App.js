import React from "react"
import CreditCard from "./CreditCard";

function App() {
  return (
    <>
      <CreditCard sex="mr" firstName="John" lastName="Doe" ccExp="11/22" ccNum="5453 2000 2000 1000" ccv="546" bankName="König Bank" bankLoc="Frankfurt"/>
    </>
  );
}

export default App;
