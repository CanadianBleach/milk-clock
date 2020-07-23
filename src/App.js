import React,{useState} from "react";
import Tweet from "./Tweet";

function App(){
  return(
    <div>
      <h3>Connor's Cool New Twitter Website</h3>
      <div className="app">
        <Tweet name="Camden" tweetBody="I make noodles" likes="69" />
        <Tweet name="Connor" tweetBody="CODE CODE CODe" likes="69" />
        <Tweet name="Cason " tweetBody="Pee Pee" likes="420" />
      </div>
    </div>
  );
}

export default App;