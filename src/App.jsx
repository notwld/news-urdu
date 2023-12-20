import "./App.css";
import React from "react";
import { useEffect, useState } from "react";


function App() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("https://newsurdu.herokuapp.com")
      .then((response) => response.json())
      .then((json) => setHeadlines(json.headlines));
  }, []);

  return (
    <>
    <h1>NewsUrdu</h1>
    <h3>Headlines</h3>
      {headlines.map((news,index) => (
        <div className="container" key={index}>
          <h5 id="heading">{news}</h5>
        </div>
      ))}
    </>
  );
}

export default App;
