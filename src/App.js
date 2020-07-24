import React from "react";
//import Tweet from "./Tweet";
//import milkBase from './milk_base.svg'

function App() {
  var decimalRounded = Math.round((new Date().getHours() / 24) * 100)/100;
  var decimalConversion = Math.round(decimalRounded * 255);
  var transparencyHex = decimalConversion.toString(16);

  return (
    <div className="app">
      <h1>Test Header</h1>
      {/*<img src={milkBase} width="300" height="300" alt = "milk"/>
      <h1>The hex code for the transparency is "{transparencyHex}"</h1>*/}
    </div>
  );
}

export default App;