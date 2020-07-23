import React, {useState} from "react";
import "./App.css";

function Tweet({name, tweetBody}) {
  const[likes, setCount] = useState(0);

  const Increment = () => {
    setCount(likes + 1);
  }

  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{tweetBody}</p>
      <h3>{likes}</h3>
      <button onClick={Increment}>Like Post</button>
    </div>
  );
}

export default Tweet;