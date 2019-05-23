import React from "react";
import Json from "./db.json";
import "./App.scss";

function App() {
  const addOpenClass = e => {
    debugger;
    e.parent().toggleClass("open");
  };

  return (
    <div className="App container">
      <h3 className="main-header">Simple React Search</h3>
      <div>
        <div className="search">
          <input type="search" className="search-box" />
          <span className="search-button" onClick={addOpenClass}>
            <span className="search-icon" />
          </span>
        </div>
        <ul>
          {Json.map(l => {
            return (
              <li>
                {l.name} <a href="#">{l.email}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
